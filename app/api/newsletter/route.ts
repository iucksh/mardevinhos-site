import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { newsletter } from '@/lib/db/schema';
import { newsletterSchema } from '@/lib/validations';
import { sendEmail, getNewsletterWelcomeEmail } from '@/lib/email';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validar dados
        const validatedData = newsletterSchema.parse(body);

        // Verificar se email já existe
        const existing = await db.select().from(newsletter).where(eq(newsletter.email, validatedData.email));
        
        if (existing.length > 0) {
            if (existing[0].active) {
                return NextResponse.json(
                    { success: false, error: 'Email já cadastrado na newsletter' },
                    { status: 400 }
                );
            } else {
                // Reativar inscrição
                await db.update(newsletter)
                    .set({ active: true, updatedAt: new Date() })
                    .where(eq(newsletter.email, validatedData.email));
            }
        } else {
            // Criar nova inscrição
            await db.insert(newsletter).values({
                email: validatedData.email,
                name: validatedData.name,
                active: true,
            });
        }

        // Enviar email de boas-vindas (apenas se configurado)
        if (process.env.EMAIL_FROM) {
            try {
                await sendEmail({
                    to: validatedData.email,
                    subject: 'Bem-vindo à Newsletter Mar de Vinhos!',
                    html: getNewsletterWelcomeEmail(validatedData.email),
                });
            } catch (emailError) {
                console.error('Erro ao enviar email:', emailError);
                // Continuar mesmo se o email falhar
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erro ao inscrever na newsletter:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const subscriptions = await db.select().from(newsletter);
        return NextResponse.json({ subscriptions });
    } catch (error) {
        console.error('Erro ao buscar inscrições:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
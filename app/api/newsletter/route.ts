import { NextRequest, NextResponse } from 'next/server';
import { createNewsletterSubscription } from '@/lib/storage';
import { newsletterSchema } from '@/lib/validations';
import { sendEmail, getNewsletterWelcomeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validar dados
        const validatedData = newsletterSchema.parse(body);

        // Criar inscrição
        const newsletter = createNewsletterSubscription({
            email: validatedData.email,
            name: validatedData.name,
            active: true,
        });

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
        if (error instanceof Error && error.message === 'Email já cadastrado na newsletter') {
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 400 }
            );
        }
        
        console.error('Erro ao inscrever na newsletter:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
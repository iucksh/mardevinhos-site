import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { newsletterSchema } from '@/lib/validations';
import { sendEmail, getNewsletterWelcomeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validar dados
        const validatedData = newsletterSchema.parse(body);

        // Verificar se email já existe
        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email: validatedData.email },
        });

        if (existingSubscriber) {
            if (existingSubscriber.active) {
                return NextResponse.json(
                    { success: false, error: 'Email já cadastrado na newsletter' },
                    { status: 400 }
                );
            } else {
                // Reativar inscrição
                await prisma.newsletter.update({
                    where: { email: validatedData.email },
                    data: { active: true },
                });
            }
        } else {
            // Criar nova inscrição
            await prisma.newsletter.create({
                data: {
                    email: validatedData.email,
                    name: validatedData.name,
                    active: true,
                },
            });
        }

        // Enviar email de boas-vindas
        await sendEmail({
            to: validatedData.email,
            subject: 'Bem-vindo à Newsletter Mar de Vinhos!',
            html: getNewsletterWelcomeEmail(validatedData.email),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erro ao inscrever na newsletter:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
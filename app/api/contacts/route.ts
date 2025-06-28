import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
import { contactSchema } from '@/lib/validations';
import { sendEmail, getContactConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validar dados
        const validatedData = contactSchema.parse(body);

        // Criar contato
        const [contact] = await db.insert(contacts).values({
            name: validatedData.nome,
            email: validatedData.email,
            phone: validatedData.telefone,
            company: validatedData.empresa,
            type: validatedData.tipo,
            message: validatedData.mensagem,
            status: 'NEW',
        }).returning();

        // Enviar email de confirmação (apenas se configurado)
        if (process.env.EMAIL_FROM) {
            try {
                await sendEmail({
                    to: contact.email,
                    subject: 'Mensagem Recebida - Mar de Vinhos',
                    html: getContactConfirmationEmail(contact),
                });

                // Enviar notificação para a empresa
                await sendEmail({
                    to: process.env.EMAIL_FROM,
                    subject: 'Nova Mensagem de Contato - Mar de Vinhos',
                    html: `
                        <h3>Nova mensagem de contato:</h3>
                        <p><strong>Nome:</strong> ${contact.name}</p>
                        <p><strong>Email:</strong> ${contact.email}</p>
                        <p><strong>Telefone:</strong> ${contact.phone || 'Não informado'}</p>
                        <p><strong>Empresa:</strong> ${contact.company || 'Não informado'}</p>
                        <p><strong>Tipo:</strong> ${contact.type}</p>
                        <p><strong>Mensagem:</strong></p>
                        <p>${contact.message}</p>
                    `,
                });
            } catch (emailError) {
                console.error('Erro ao enviar email:', emailError);
                // Continuar mesmo se o email falhar
            }
        }

        return NextResponse.json({ success: true, contact });
    } catch (error) {
        console.error('Erro ao criar contato:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const allContacts = await db.select().from(contacts);
        return NextResponse.json({ contacts: allContacts });
    } catch (error) {
        console.error('Erro ao buscar contatos:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
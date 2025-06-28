import { NextRequest, NextResponse } from 'next/server';
import { createQuote } from '@/lib/storage';
import { quoteSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validar dados
        const validatedData = quoteSchema.parse(body);

        // Criar solicitação de orçamento
        const quote = createQuote({
            name: validatedData.nome,
            email: validatedData.email,
            phone: validatedData.telefone,
            company: validatedData.empresa,
            type: validatedData.tipo,
            description: validatedData.descricao,
            budget: validatedData.orcamento,
            status: 'PENDING',
        });

        // Enviar email de confirmação (apenas se configurado)
        if (process.env.EMAIL_FROM) {
            try {
                await sendEmail({
                    to: quote.email,
                    subject: 'Solicitação de Orçamento Recebida - Mar de Vinhos',
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #0d9488;">Solicitação de Orçamento Recebida</h2>
                            
                            <p>Olá ${quote.name},</p>
                            
                            <p>Recebemos sua solicitação de orçamento e nossa equipe está analisando suas necessidades.</p>
                            
                            <p>Entraremos em contato em até 24 horas com uma proposta personalizada.</p>
                            
                            <p>Atenciosamente,<br>
                            Equipe Mar de Vinhos</p>
                        </div>
                    `,
                });

                // Enviar notificação para a empresa
                await sendEmail({
                    to: process.env.EMAIL_FROM,
                    subject: 'Nova Solicitação de Orçamento - Mar de Vinhos',
                    html: `
                        <h3>Nova solicitação de orçamento:</h3>
                        <p><strong>Nome:</strong> ${quote.name}</p>
                        <p><strong>Email:</strong> ${quote.email}</p>
                        <p><strong>Telefone:</strong> ${quote.phone || 'Não informado'}</p>
                        <p><strong>Empresa:</strong> ${quote.company}</p>
                        <p><strong>Tipo:</strong> ${quote.type}</p>
                        <p><strong>Orçamento:</strong> ${quote.budget || 'Não informado'}</p>
                        <p><strong>Descrição:</strong></p>
                        <p>${quote.description}</p>
                    `,
                });
            } catch (emailError) {
                console.error('Erro ao enviar email:', emailError);
                // Continuar mesmo se o email falhar
            }
        }

        return NextResponse.json({ success: true, quote });
    } catch (error) {
        console.error('Erro ao criar solicitação de orçamento:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
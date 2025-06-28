import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { appointments } from '@/lib/db/schema';
import { appointmentSchema } from '@/lib/validations';
import { sendEmail, getAppointmentConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { selectedDate, selectedTime, ...formData } = body;

        // Validar dados
        const validatedData = appointmentSchema.parse(formData);

        // Criar agendamento
        const [appointment] = await db.insert(appointments).values({
            name: validatedData.nome,
            email: validatedData.email,
            phone: validatedData.telefone,
            company: validatedData.empresa,
            type: validatedData.tipo,
            date: selectedDate,
            time: selectedTime,
            observations: validatedData.observacoes,
            status: 'CONFIRMED',
        }).returning();

        // Enviar email de confirmação (apenas se configurado)
        if (process.env.EMAIL_FROM) {
            try {
                await sendEmail({
                    to: appointment.email,
                    subject: 'Agendamento Confirmado - Mar de Vinhos',
                    html: getAppointmentConfirmationEmail(appointment),
                });

                // Enviar notificação para a empresa
                await sendEmail({
                    to: process.env.EMAIL_FROM,
                    subject: 'Novo Agendamento - Mar de Vinhos',
                    html: `
                        <h3>Novo agendamento recebido:</h3>
                        <p><strong>Nome:</strong> ${appointment.name}</p>
                        <p><strong>Email:</strong> ${appointment.email}</p>
                        <p><strong>Telefone:</strong> ${appointment.phone}</p>
                        <p><strong>Empresa:</strong> ${appointment.company}</p>
                        <p><strong>Tipo:</strong> ${appointment.type}</p>
                        <p><strong>Data:</strong> ${appointment.date}</p>
                        <p><strong>Horário:</strong> ${appointment.time}</p>
                        ${appointment.observations ? `<p><strong>Observações:</strong> ${appointment.observations}</p>` : ''}
                    `,
                });
            } catch (emailError) {
                console.error('Erro ao enviar email:', emailError);
                // Continuar mesmo se o email falhar
            }
        }

        return NextResponse.json({ success: true, appointment });
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const allAppointments = await db.select().from(appointments);
        return NextResponse.json({ appointments: allAppointments });
    } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
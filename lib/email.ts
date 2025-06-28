// Simplified email service for deployment
export async function sendEmail({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) {
    // For deployment, we'll just log the email instead of sending it
    console.log('Email would be sent to:', to);
    console.log('Subject:', subject);
    return { success: true };
}

export function getAppointmentConfirmationEmail(appointment: any) {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0d9488;">Agendamento Confirmado - Mar de Vinhos</h2>
            
            <p>Olá ${appointment.name},</p>
            
            <p>Seu agendamento foi confirmado com sucesso!</p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0d9488; margin-top: 0;">Detalhes do Agendamento:</h3>
                <p><strong>Data:</strong> ${new Date(appointment.date).toLocaleDateString('pt-BR')}</p>
                <p><strong>Horário:</strong> ${appointment.time}</p>
                <p><strong>Empresa:</strong> ${appointment.company}</p>
                <p><strong>Tipo:</strong> ${appointment.type}</p>
                ${appointment.observations ? `<p><strong>Observações:</strong> ${appointment.observations}</p>` : ''}
            </div>
            
            <p>Entraremos em contato em breve com o link da reunião online.</p>
            
            <p>Atenciosamente,<br>
            Equipe Mar de Vinhos</p>
        </div>
    `;
}

export function getContactConfirmationEmail(contact: any) {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0d9488;">Mensagem Recebida - Mar de Vinhos</h2>
            
            <p>Olá ${contact.name},</p>
            
            <p>Recebemos sua mensagem e entraremos em contato em breve!</p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0d9488; margin-top: 0;">Sua Mensagem:</h3>
                <p>${contact.message}</p>
            </div>
            
            <p>Nosso tempo de resposta é de até 24 horas em dias úteis.</p>
            
            <p>Atenciosamente,<br>
            Equipe Mar de Vinhos</p>
        </div>
    `;
}

export function getNewsletterWelcomeEmail(email: string) {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0d9488;">Bem-vindo à Newsletter Mar de Vinhos!</h2>
            
            <p>Obrigado por se inscrever em nossa newsletter!</p>
            
            <p>Você receberá semanalmente:</p>
            <ul>
                <li>Insights sobre o mercado de vinhos</li>
                <li>Tendências do setor HORECA</li>
                <li>Dicas de gestão e harmonização</li>
                <li>Conteúdo exclusivo para profissionais</li>
            </ul>
            
            <p>Atenciosamente,<br>
            Equipe Mar de Vinhos</p>
        </div>
    `;
}
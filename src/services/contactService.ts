
import { toast } from "sonner";
import emailjs from 'emailjs-com';

// Interface com sobrenome e telefone
export interface ContactFormData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// Função para enviar o formulário de contato
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Log das informações
    console.log("Enviando mensagem de contato:", formData);
    
    // Inicializa o EmailJS com seu ID de usuário
    emailjs.init("bag3pcxnV3zHGfNTm"); 
    
    // Prepara parâmetros para o template
    const templateParams = {
      from_name: `${formData.name} ${formData.lastName}`,
      reply_to: formData.email,
      // Usamos o email do cliente como reply_to, não como from_email
      // Todos os campos do formulário
      name: formData.name,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      // Conteúdo formatado para o corpo do email
      html_message: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #eaeaea;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">Nova Mensagem de Contato</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome Completo:</strong> ${formData.name} ${formData.lastName}</p>
            <p style="margin: 10px 0;"><strong>Telefone:</strong> ${formData.phone}</p>
            <p style="margin: 10px 0;"><strong>E-mail:</strong> ${formData.email}</p>
            <p style="margin: 10px 0;"><strong>Assunto:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #4f46e5;">
            <h3 style="color: #4f46e5; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eaeaea; padding-top: 10px;">
            <p>Esta mensagem foi enviada através do formulário de contato do site da GV Software.</p>
          </div>
        </div>
      `
    };
    
    // Envia o email usando EmailJS
    const response = await emailjs.send(
      "service_wz0y9kn", 
      "template_y19vqfe", 
      templateParams
    );
    
    console.log("Email enviado com sucesso:", response);
    
    toast.success("Mensagem enviada com sucesso!", {
      description: "Seu contato foi registrado e será respondido em breve."
    });
    
    return true;
  } catch (error) {
    console.error("Erro ao enviar formulário de contato:", error);
    toast.error("Erro ao enviar mensagem", {
      description: "Por favor tente novamente mais tarde.",
      duration: 5000,
    });
    return false;
  }
};

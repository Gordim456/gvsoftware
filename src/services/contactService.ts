
import { toast } from "sonner";

// Define the contact form data type with all required fields
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Function to submit contact form data
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Log the information for demonstration
    console.log("Enviando mensagem de contato:", formData);
    
    // Prepare email content
    const emailContent = `
      Nome: ${formData.name}
      Email: ${formData.email}
      Assunto: ${formData.subject}
      Mensagem: ${formData.message}
    `;
    
    console.log(`Enviando email para contato.gvsoftware@gmail.com com conteúdo:`, emailContent);
    
    // Simulate network delay - in production, remove this
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real implementation, you would use an email service here
    // For example with EmailJS, SendGrid, or a backend API:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     to: "contato.gvsoftware@gmail.com",
    //     subject: `Novo contato: ${formData.subject}`,
    //     text: emailContent
    //   })
    // });
    
    // For demonstration purposes, we'll return success
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

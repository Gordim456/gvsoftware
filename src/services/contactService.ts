
import { toast } from "sonner";
import emailjs from 'emailjs-com';

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
    // Log the information
    console.log("Enviando mensagem de contato:", formData);
    
    // Initialize EmailJS with your User ID
    emailjs.init("bag3pcxnV3zHGfNTm"); 
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    // Send email using EmailJS
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

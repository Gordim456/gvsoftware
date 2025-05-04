
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
    console.log("Contact form data received:", formData);
    console.log(`Sending email with contact information to contato.gvsoftware@gmail.com`);
    
    // In a real application, you would send this to a service that handles emails
    // For example, using a serverless function or a dedicated email service
    
    // Simulate network delay for demonstration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would use a service like EmailJS, SendGrid, or similar
    // Example pseudo-code for email sending:
    // await sendEmailService({
    //   to: "contato.gvsoftware@gmail.com",
    //   subject: `Novo contato: ${formData.subject}`,
    //   body: `
    //     Nome: ${formData.name}
    //     Email: ${formData.email}
    //     Mensagem: ${formData.message}
    //   `
    // });
    
    return true;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    toast("Erro ao enviar mensagem", {
      description: "Por favor tente novamente mais tarde.",
      duration: 5000,
    });
    return false;
  }
};


import { toast } from "sonner";

// Define the contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Function to submit contact form data
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // In a real application, you would send this data to a server
    // For example with fetch or axios:
    // const response = await fetch('https://api.yourbackend.com/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    console.log("Contact form data received:", formData);
    console.log("Sending email to contato.gvsoftware@gmail.com");
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store the contact message in localStorage for demonstration
    const storedMessages = localStorage.getItem('contactMessages');
    const messages = storedMessages ? JSON.parse(storedMessages) : [];
    messages.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'unread',
      emailSent: 'contato.gvsoftware@gmail.com' // Record that the message was sent to this email
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    return true;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    toast("Error submitting form", {
      description: "Please try again later.",
      duration: 5000,
    });
    return false;
  }
};

// Function to retrieve stored contact messages
export const getStoredContactMessages = () => {
  const storedMessages = localStorage.getItem('contactMessages');
  return storedMessages ? JSON.parse(storedMessages) : [];
};

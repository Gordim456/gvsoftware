
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { getStoredContactMessages } from "@/services/contactService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Trash2, Mail, AlertTriangle, Clock, Keyboard } from "lucide-react";

const AdminMessages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Admin Messages | GV Software';
    loadMessages();
  }, []);

  const loadMessages = () => {
    setIsLoading(true);
    try {
      const storedMessages = getStoredContactMessages();
      setMessages(storedMessages);
    } catch (error) {
      console.error("Error loading messages:", error);
      toast({
        title: "Error",
        description: "Failed to load contact messages.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id: number) => {
    try {
      const updatedMessages = messages.filter(message => message.id !== id);
      localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
      toast({
        title: "Message deleted",
        description: "The message has been successfully deleted.",
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      toast({
        title: "Error",
        description: "Failed to delete the message.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit', 
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gv-darker">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Messages</h1>
          <p className="text-gv-gray">View and manage contact form submissions.</p>
          <div className="mt-2 flex items-center text-sm text-gv-gray bg-gv-dark/30 p-2 rounded-md">
            <Keyboard className="h-4 w-4 mr-2" />
            <span>Atalho de teclado: <kbd className="px-2 py-0.5 bg-gray-700 rounded text-xs">ALT + A</kbd> para acessar esta página.</span>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : messages.length > 0 ? (
          <div className="bg-gv-dark rounded-xl border border-gray-800 overflow-hidden">
            <Table>
              <TableCaption>List of all contact form submissions.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        {formatDate(message.date)}
                      </div>
                    </TableCell>
                    <TableCell>{message.name}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell>{message.subject}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-1"
                          onClick={() => window.open(`mailto:${message.email}?subject=Re: ${message.subject}`)}
                        >
                          <Mail className="h-4 w-4" />
                          Reply
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => handleDelete(message.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <Alert>
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>No messages found</AlertTitle>
            <AlertDescription>
              There are no contact form submissions yet.
            </AlertDescription>
          </Alert>
        )}

        <div className="mt-8">
          <Button onClick={loadMessages} className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Refresh Messages
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminMessages;


import * as React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactSuccess from './ContactSuccess';
import ContactForm from './ContactForm';

type ContactLayoutProps = {
  isFormSubmitted: boolean;
  onSubmitSuccess: () => void;
  onReset: () => void;
};

const ContactLayout: React.FC<ContactLayoutProps> = ({ isFormSubmitted, onSubmitSuccess, onReset }) => {
  return (
    <>
      <ContactHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 space-y-8">
          <ContactInfo />
        </div>
        
        <div className="lg:col-span-3">
          {isFormSubmitted ? (
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-indigo-500/20 shadow-xl">
              <ContactSuccess onReset={onReset} />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-indigo-500/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Envie-nos uma mensagem
              </h3>
              <ContactForm onSuccess={onSubmitSuccess} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactLayout;

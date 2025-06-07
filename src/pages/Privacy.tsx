
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Política de Privacidade | GV Software';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente, incluindo:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Nome e informações de contato</li>
                <li>• Informações sobre seu projeto</li>
                <li>• Comunicações conosco</li>
                <li>• Informações de pagamento (processadas por terceiros seguros)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos suas Informações</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Fornecer e melhorar nossos serviços</li>
                <li>• Comunicar sobre projetos e atualizações</li>
                <li>• Processar pagamentos</li>
                <li>• Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Informações</h2>
              <p className="text-gray-300 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Segurança dos Dados</h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Seus Direitos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Acessar suas informações pessoais</li>
                <li>• Corrigir informações incorretas</li>
                <li>• Solicitar a exclusão de seus dados</li>
                <li>• Retirar consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Alterações nesta Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através de nosso site ou por email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Para questões sobre privacidade, entre em contato: contato@gvsoftware.com.br
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-slate-700">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;

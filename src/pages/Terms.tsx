
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Termos de Uso | GV Software';
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
            Termos de Uso
          </h1>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e usar os serviços da GV Software, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
              <p className="text-gray-300 leading-relaxed">
                A GV Software oferece serviços de desenvolvimento de software, incluindo aplicações web, mobile e sistemas personalizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidades do Cliente</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Fornecer informações precisas e completas</li>
                <li>• Colaborar durante o desenvolvimento do projeto</li>
                <li>• Realizar pagamentos conforme acordado</li>
                <li>• Respeitar prazos de feedback e aprovações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriedade Intelectual</h2>
              <p className="text-gray-300 leading-relaxed">
                Todo o código desenvolvido pela GV Software permanecerá de propriedade do cliente após o pagamento integral do projeto, salvo acordo em contrário.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed">
                A GV Software não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Modificações dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato conosco através do email: contato@gvsoftware.com.br
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

export default Terms;

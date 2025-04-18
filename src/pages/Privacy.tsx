
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Política de Privacidade | GV Software';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />
      
      <section className="py-20 pt-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-indigo-400 hover:text-indigo-300 mb-8 group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gv-darker p-8 rounded-xl border border-gray-800"
          >
            <div className="mb-10 text-center">
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto rounded-full animate-pulse mb-6"></div>
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Política de Privacidade</h1>
              <p className="text-gv-gray">Última atualização: Abril de 2025</p>
            </div>
            
            <div className="space-y-8 text-gv-gray">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">1. Coleta de Dados</h2>
                <p>Coletamos apenas as informações necessárias para fornecer nossos serviços. Isso pode incluir:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Informações fornecidas voluntariamente (nome, endereço de e-mail, telefone)</li>
                  <li>Informações coletadas automaticamente (endereço IP, tipo de navegador, páginas visitadas)</li>
                  <li>Cookies e tecnologias semelhantes que coletam dados para melhorar a experiência do usuário</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">2. Uso de Informações</h2>
                <p>Usamos as informações coletadas para:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Fornecer, manter e melhorar nossos serviços</li>
                  <li>Processar transações e enviar notificações relacionadas</li>
                  <li>Responder a comentários, perguntas e solicitações</li>
                  <li>Fornecer suporte ao cliente</li>
                  <li>Enviar informações técnicas, atualizações e alertas de segurança</li>
                  <li>Monitorar e analisar tendências, uso e atividades</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">3. Compartilhamento de Dados</h2>
                <p>Não vendemos, negociamos ou transferimos suas informações pessoais para terceiros. Isso não inclui terceiros confiáveis que nos ajudam a operar nosso site, realizar negócios ou servi-lo, desde que essas partes concordem em manter essas informações confidenciais.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">4. Segurança dos Dados</h2>
                <p>Implementamos medidas de segurança adequadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição de suas informações pessoais. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">5. Seus Direitos</h2>
                <p>Você tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Acessar os dados pessoais que mantemos sobre você</li>
                  <li>Solicitar a correção de dados imprecisos</li>
                  <li>Solicitar a exclusão de seus dados pessoais</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                  <li>Solicitar a restrição do processamento de seus dados</li>
                  <li>Solicitar a transferência de seus dados para outro controlador</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">6. Cookies</h2>
                <p>Usamos cookies para melhorar sua experiência em nosso site. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, alguns recursos do site podem não funcionar corretamente sem cookies.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">7. Alterações a Esta Política</h2>
                <p>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data "última atualização" no topo.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">8. Contato</h2>
                <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:</p>
                <p className="text-indigo-400">contato@gvsoftware.tech</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;

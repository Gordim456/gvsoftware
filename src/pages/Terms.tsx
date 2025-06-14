
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    document.title = 'Termos de Uso | GV Software';
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
          
          <div className="bg-gv-darker p-8 rounded-xl border border-gray-800 animate-fade-in">
            <div className="mb-10 text-center">
              <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse mb-6"></div>
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Termos de Uso</h1>
              <p className="text-gv-gray">Última atualização: Abril de 2025</p>
            </div>
            
            <div className="space-y-8 text-gv-gray">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
                <p>Ao acessar e usar este website, você aceita e concorda em cumprir estes termos e condições de uso. Se você não concordar com estes termos, por favor, não use este site.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">2. Uso do Serviço</h2>
                <p>Nossos serviços devem ser utilizados de acordo com as leis aplicáveis e de forma ética. Você concorda em não:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Utilizar nossos serviços para qualquer propósito ilegal ou não autorizado</li>
                  <li>Violar quaisquer leis em sua jurisdição (incluindo, mas não limitado a, leis de direitos autorais)</li>
                  <li>Interferir ou interromper o funcionamento dos serviços ou servidores ou redes conectadas aos serviços</li>
                  <li>Contornar medidas que possamos usar para impedir ou restringir o acesso aos serviços</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">3. Propriedade Intelectual</h2>
                <p>O conteúdo, recursos e funcionalidades disponíveis neste site, como texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados são propriedade da GV Software ou de seus fornecedores de conteúdo e estão protegidos por leis de direitos autorais, marcas registradas, patentes ou outros direitos de propriedade intelectual.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">4. Limitação de Responsabilidade</h2>
                <p>Em nenhum caso a GV Software, seus diretores, funcionários ou agentes serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do uso ou incapacidade de usar os serviços.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">5. Alterações dos Termos</h2>
                <p>A GV Software reserva-se o direito de modificar estes termos de uso a qualquer momento. Vamos notificá-lo sobre quaisquer alterações publicando os novos termos de uso nesta página. Alterações entram em vigor imediatamente após serem postadas.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">6. Lei Aplicável</h2>
                <p>Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem levar em consideração seus conflitos de disposições legais.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">7. Contato</h2>
                <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco em:</p>
                <p className="text-indigo-400">contato@gvsoftware.tech</p>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;

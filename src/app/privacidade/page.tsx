import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 section-padding bg-white min-h-screen">
        <div className="container-max mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-vap-teal hover:text-vap-teal-dark mb-8 transition-colors font-medium">
            <ChevronLeft size={20} />
            Voltar para o início
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-vap-dark mb-4">Minuta de Política de Privacidade</h1>
          <p className="text-sm text-vap-gray mb-12">Data da Última Atualização: 31 de março de 2026 - Versão 1.2</p>
          
          <div className="space-y-6 text-vap-dark/80 leading-relaxed">
            <p>Sua privacidade e a proteção dos dados pessoais da criança sob sua responsabilidade são prioridades absolutas para o VapApp - Via Aérea Pediátrica. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais e os dados de saúde da Criança Traqueostomizada ao utilizar nosso Aplicativo, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e o Estatuto da Criança e do Adolescente (ECA - Lei nº 8.069/1990).</p>
            <p>Ao aceitar os Termos de Uso e utilizar o VapApp - Via Aérea Pediátrica, você concorda com as práticas de tratamento de dados descritas nesta Política de Privacidade.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">1. Controlador dos Dados Pessoais</h2>
            <p>O Controlador dos dados pessoais coletados e tratados por meio do VapApp - Via Aérea Pediátrica é: INNOVA DIGITAL LTDA. CNPJ: 61.674.924/0001-68 Endereço: Av. Fernandes Lima, nº 08, Edf. Centenário Plaza Center, Sala 406, Farol, Maceió/AL, CEP: 57.050-000 Contato: comunicacao@vap-app.com.br. Como Controlador, somos responsáveis por todas as decisões referentes ao Tratamento de Dados Pessoais.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">2. Dados Pessoais Coletados e Como São Obtidos</h2>
            <p>Para oferecer as funcionalidades do VapApp, coletamos diferentes categorias de Dados Pessoais, sempre em estrita observância ao princípio da minimização de dados (Art. 6º, III, da LGPD).</p>
            
            <p><strong>2.1. Dados Pessoais do Cuidador/Pais e Responsáveis Legais:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nome Completo:</strong> Obtido no momento do cadastro inicial.</li>
              <li><strong>CPF:</strong> Obtido no momento do cadastro inicial para sua identificação única e validação da capacidade legal.</li>
              <li><strong>Endereço de E-mail:</strong> Obtido no momento do cadastro, utilizado para comunicação, recuperação de acesso e notificações.</li>
              <li><strong>Número de Telefone:</strong> Obtido no momento do cadastro, utilizado para comunicação e notificações.</li>
              <li><strong>Dados Sociais:</strong> Informações socioeconômicas (se coletadas) visando exclusivamente à melhoria do Aplicativo através de análises agregadas e anonimizadas.</li>
            </ul>

            <p><strong>2.2. Dados Pessoais da Criança Traqueostomizada:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nome Completo, Data de Nascimento, Sexo, Filiação:</strong> Inseridos pelo Cuidador/Responsável Legal no perfil da criança.</li>
            </ul>

            <p><strong>2.3. Dados Clínicos da Criança (Dados Pessoais Sensíveis):</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Histórico de Traqueostomia, Condições Médicas Associadas, Tipos de Cânulas e Dispositivos, Acompanhamento Médico e Terapêutico, Medicações e Posologia, Exames e Resultados, Dados Biomédicos, Registro de Intercorrências.</li>
            </ul>

            <p><strong>2.4. Dados de Geolocalização:</strong> Localização do Dispositivo coletada (se permitido) para auxiliar na localização de serviços próximos. Não é armazenada de forma contínua.</p>
            
            <p><strong>2.5. Dados de Utilização e Dispositivo:</strong> Informações Técnicas do Dispositivo (hardware, OS, rede) e Dados de Uso do Aplicativo.</p>

            <p><strong>2.6. Dados de Interação com o Chatbot de IA:</strong> Conteúdo das Conversas e Metadados da Interação.</p>

            <p><strong>2.7. Dados de Transação no Marketplace:</strong> Informações do Vendedor, Informações do Comprador, Dados da Transação e Dados de Interação no Marketplace.</p>

            <p><strong>2.8. Dados de Interação no Chat Comunitário:</strong> Conteúdo das Mensagens, Metadados e Dados de Moderação.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">3. Consentimento Específico para Dados de Crianças e Adolescentes (ECA Digital)</h2>
            <p><strong>3.1. Princípio do Melhor Interesse da Criança:</strong> O tratamento de Dados Pessoais será sempre realizado no Melhor Interesse da Criança.</p>
            <p><strong>3.2. Escopo de Aplicação do ECA Digital:</strong> O VapApp se submete às exigências do ECA Digital porque coleta e processa dados de menores de 18 anos, operando como aplicativo móvel no Brasil.</p>
            <p><strong>3.3. Verificação Obrigatória de Idade e 3.4. Consentimento Parental:</strong> Implementamos um sistema robusto de verificação de idade e exigimos consentimento específico e em destaque.</p>
            <p><strong>3.5. Consentimento Granular:</strong> O responsável legal pode consentir especificamente para diversas finalidades, podendo recusá-las independentemente.</p>
            <p><strong>3.6. Direito à Revogação do Consentimento:</strong> O responsável legal pode REVOGAR O CONSENTIMENTO A QUALQUER MOMENTO, através do DPO: dpo@vap-app.com.br.</p>
            <p><strong>3.7. Proibições Específicas do ECA Digital:</strong> O VapApp NÃO coleta biometria facial, NÃO comercializa dados, NÃO implementa loot boxes, NÃO rastreia localização sem consentimento e NÃO usa manipulação algorítmica.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">4. Finalidade do Tratamento dos Dados Pessoais e Bases Legais</h2>
            <p>O Tratamento dos Dados Pessoais é realizado para as seguintes finalidades, amparado pela LGPD:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Autenticação e suporte:</strong> Baseada em Consentimento e Execução de contrato.</li>
              <li><strong>Perfil de saúde da Criança:</strong> Consentimento dos pais/responsáveis (Art. 14, §1º).</li>
              <li><strong>Pesquisa em saúde pública:</strong> Realização de estudos por órgão de pesquisa garantindo a anonimização dos dados sensíveis.</li>
              <li><strong>Marketplace e Chat Comunitário:</strong> Execução de contrato, Legítimo Interesse e Consentimento.</li>
            </ul>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">5. Compartilhamento de Dados Pessoais</h2>
            <p><strong>5.1.</strong> O compartilhamento ocorre apenas nas situações estritamente necessárias.</p>
            <p><strong>5.2. Operadores e Provedores de Serviço:</strong> Hospedagem, envio de e-mail, IA, Gateways de Pagamento, sob rigorosas obrigações de segurança.</p>
            <p><strong>5.3. Registro Nacional e Pesquisa:</strong> Com consentimento, os dados (anonimizados ou agregados) poderão compor o Registro Nacional ou ser usados em pesquisas de saúde pública.</p>
            <p><strong>5.4. Autoridades Legais:</strong> Em resposta a ordens judiciais ou regulatórias.</p>
            <p><strong>5.5 a 5.8:</strong> Compartilhamento interno para Marketplace, Chat Comunitário e Diário de Eventos da Criança, geridos e moderados conforme a necessidade da plataforma.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">6. Retenção e Descarte de Dados Pessoais</h2>
            <p>Os dados serão retidos apenas pelo tempo necessário. Após o término da finalidade, serão eliminados ou anonimizados, exceto quando exigido por lei.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">7. Segurança da Informação</h2>
            <p>Empregamos criptografia para todos os dados sensíveis, controle de acesso via RLS (Row Level Security) e criptografia zero-knowledge para dados clínicos. Possuímos um Plano de Resposta a Incidentes de Segurança em conformidade com o Art. 48 da LGPD.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">8. Direitos dos Titulares dos Dados Pessoais</h2>
            <p>Você possui direitos garantidos pela LGPD, como Confirmação e Acesso, Retificação, Anonimização, Eliminação, Portabilidade e Revogação do Consentimento.</p>
            <p>Implementamos um sistema completo de exclusão de dados, com modalidades parcial e total, processado em até 15 dias úteis.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">9. Cookies e Tecnologias Semelhantes</h2>
            <p>O VapApp NÃO utiliza Cookies HTTP de navegadores web. Utilizamos Identificadores de Dispositivo, Armazenamento Local Criptografado, Sentry para monitoramento de erros e Push Tokens para notificações, todos estritamente para o funcionamento e segurança do app nativo.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">10. Transferência Internacional de Dados</h2>
            <p>Se houver necessidade de armazenamento no exterior, este ocorrerá para países com nível de proteção adequado ou mediante cláusulas contratuais específicas (Art. 33 da LGPD).</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">11. Encarregado de Dados (DPO) e Canais de Contato</h2>
            <p><strong>Nome do DPO:</strong> Kauê Cavalcante Wanderley de Melo</p>
            <p><strong>E-mail:</strong> dpo@vap-app.com.br</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">12. Alterações nesta Política de Privacidade</h2>
            <p>A Política poderá ser atualizada, e Você será notificado sobre alterações substanciais.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">13. Legislação Aplicável e Foro</h2>
            <p>Regida pela legislação da República Federativa do Brasil, em especial a Lei nº 13.709/2018 (LGPD). Fica eleito o foro do domicílio do Usuário para dirimir questões.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

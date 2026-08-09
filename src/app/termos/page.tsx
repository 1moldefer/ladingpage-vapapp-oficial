import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TermosDeUso() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 section-padding bg-white min-h-screen">
        <div className="container-max mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-vap-teal hover:text-vap-teal-dark mb-8 transition-colors font-medium">
            <ChevronLeft size={20} />
            Voltar para o início
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-vap-dark mb-4">TERMOS DE USO</h1>
          <p className="text-sm text-vap-gray mb-12">Data da Última Atualização: 31 de março de 2026 - Versão 1.2</p>
          
          <div className="space-y-6 text-vap-dark/80 leading-relaxed">
            <p className="font-semibold text-lg text-vap-dark">Bem-vindo ao VapApp - Via Aérea Pediátrica!</p>
            <p>Este documento contém os Termos de Uso que regem a utilização do aplicativo móvel VapApp - Via Aérea Pediátrica, desenvolvido por INNOVA DIGITAL LTDA. CNPJ: 61.674.924/0001-68 Endereço: Av. Fernandes Lima, nº 08, Edf. Centenário Plaza Center, Sala 406, Farol, Maceió/AL, CEP: 57.050-000 Contato: comunicacao@vap-app.com.br (doravante denominado "Nós" ou "Aplicativo").</p>
            <p>Estes Termos de Uso são um contrato legalmente vinculativo entre Você, usuário do aplicativo (doravante denominado "Você" ou "Usuário"), e Nós. Eles definem as regras, condições e responsabilidades que se aplicam ao acesso e uso das funcionalidades oferecidas pelo VapApp - Via Aérea Pediátrica.</p>
            <p>É fundamental que Você leia, compreenda e concorde integralmente com estes Termos de Uso antes de utilizar o Aplicativo. Ao acessar, navegar ou utilizar qualquer funcionalidade do VapApp - Via Aérea Pediátrica, Você declara ter lido, compreendido e aceitado todos os termos e condições aqui estabelecidos. Caso Você não concorde com qualquer disposição destes Termos de Uso, solicitamos que não utilize o Aplicativo.</p>
            <p>Este documento é complementado pela nossa Política de Privacidade, que detalha como seus dados pessoais e os dados pessoais de saúde da criança sob sua responsabilidade são coletados, tratados, armazenados e compartilhados.</p>
            <p>Ao realizar o cadastro e utilizar o Aplicativo, Você declara ser o(a) Cuidador(a)/Pai/Mãe/Responsável Legal da Criança Traqueostomizada. Você compreende e concorda que, ao aceitar estes Termos de Uso e a Política de Privacidade, está fornecendo, em nome e no melhor interesse da criança, o consentimento para o tratamento dos Dados Pessoais e Dados Pessoais Sensíveis da Criança Traqueostomizada, estritamente para as finalidades descritas nestes documentos e em conformidade com o Art. 14 da LGPD e a Lei nº 14.811/2024.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">1. Definições</h2>
            <p>Para facilitar a compreensão destes Termos de Uso e da Política de Privacidade, os seguintes termos terão o significado a eles atribuído abaixo:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Aplicativo:</strong> Refere-se ao aplicativo móvel VapApp - Via Aérea Pediátrica, desenvolvido e disponibilizado por Nós, por meio do qual os Usuários acessam os serviços e conteúdos.</li>
              <li><strong>Criança Traqueostomizada:</strong> Toda pessoa natural com idade inferior a 12 (doze) anos incompletos que necessita de traqueostomia e que é objeto de acompanhamento por este Aplicativo.</li>
              <li><strong>Cuidadores/Pais e Responsáveis Legais:</strong> Pessoa(s) natural(is) que exerce(m) o poder familiar ou que detém(êm) a guarda, tutela ou curatela legalmente concedida sobre a Criança Traqueostomizada, e que são os Usuários diretos do Aplicativo.</li>
              <li><strong>Chatbot de IA:</strong> Ferramenta interativa de Inteligência Artificial disponibilizada no Aplicativo para fornecer informações gerais e responder a dúvidas.</li>
              <li><strong>Chat Comunitário:</strong> Funcionalidade do Aplicativo que permite a interação e troca de mensagens entre os Usuários.</li>
              <li><strong>Dados Pessoais:</strong> Informação relacionada a pessoa natural identificada ou identificável, conforme definido pela Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).</li>
              <li><strong>Dados Pessoais Sensíveis:</strong> Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural, conforme definido pela LGPD. Para os fins deste Aplicativo, os Dados Clínicos da Criança são considerados Dados Pessoais Sensíveis.</li>
              <li><strong>Dados Clínicos da Criança:</strong> Informações referentes à saúde da Criança Traqueostomizada, incluindo, mas não se limitando a: histórico de traqueostomia, condições médicas associadas, tipos de cânulas, intercorrências, dados de internação, medicações, exames, dados biométricos (ex: peso, altura) e demais informações essenciais para o acompanhamento da sua condição de saúde.</li>
              <li><strong>LGPD:</strong> Lei nº 13.709, de 14 de agosto de 2018 – Lei Geral de Proteção de Dados Pessoais.</li>
              <li><strong>Marketplace:</strong> Plataforma dentro do Aplicativo que facilita a oferta e aquisição de produtos e/ou serviços entre Usuários.</li>
              <li><strong>Melhor Interesse da Criança:</strong> Princípio fundamental que rege todas as ações e decisões relacionadas à Criança Traqueostomizada, garantindo que suas necessidades e direitos sejam priorizados, conforme estabelecido no Estatuto da Criança e do Adolescente (Lei nº 8.069/1990 – ECA) e na LGPD.</li>
              <li><strong>Política de Privacidade:</strong> Documento que acompanha e complementa estes Termos de Uso, detalhando as práticas de privacidade e proteção de Dados Pessoais e Dados Pessoais Sensíveis realizadas por Nós.</li>
              <li><strong>Registro Nacional da Criança Traqueostomizada:</strong> Banco de dados criado e mantido por Nós, por meio das informações coletadas e tratadas pelo Aplicativo. As informações destinadas à pesquisa epidemiológica e formulação de políticas públicas serão obrigatoriamente anonimizadas ou agregadas. Caso dados pseudonimizados sejam utilizados, isso ocorrerá apenas mediante consentimento específico.</li>
              <li><strong>Tratamento de Dados Pessoais:</strong> Toda operação realizada com Dados Pessoais, como coleta, armazenamento, eliminação, transferência, etc., conforme definido pela LGPD.</li>
              <li><strong>Usuário (ou "Você"):</strong> Refere-se exclusivamente ao(s) Cuidador(es)/Pai(s) e/ou Responsável(is) Legal(is) da Criança Traqueostomizada que utiliza(m) o Aplicativo.</li>
              <li><strong>Usuário Vendedor / Comprador:</strong> Cuidador/Pai/Responsável Legal que oferece/adquire produtos e/ou serviços no Marketplace do Aplicativo.</li>
            </ul>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">2. Descrição do Serviço e Suas Limitações Essenciais</h2>
            <p><strong>2.1.</strong> O VapApp - Via Aérea Pediátrica é uma plataforma digital desenvolvida com o objetivo de oferecer suporte, educação e informações relevantes para Cuidadores/Pais e Responsáveis Legais de Crianças Traqueostomizadas. Suas funcionalidades incluem, mas não se limitam a: a. Registro e organização de Dados Clínicos da Criança; b. Armazenamento de informações qualificadas sobre dispositivos médicos; c. Acesso a material didático e conteúdos educativos; d. Ferramentas de apoio à rotina e comunicação; e. Coleta e tratamento de dados para a formação do Registro Nacional (anonimizados); f. Chatbot de Inteligência Artificial; g. Marketplace; h. Chat Comunitário; i. Diário de Eventos Compartilhado.</p>
            <p><strong>2.2. Natureza Não Médica e Limitação de Responsabilidade:</strong></p>
            <p><strong>a. O VapApp - Via Aérea Pediátrica É UMA FERRAMENTA DE APOIO, EDUCAÇÃO, REGISTRO E FACILITAÇÃO. ELE NÃO É UM SERVIÇO MÉDICO, NÃO FORNECE ACONSELHAMENTO CLÍNICO INDIVIDUALIZADO, DIAGNÓSTICO, TRATAMENTO OU PRESCRIÇÕES DE MEDICAMENTOS.</strong> As informações e conteúdos disponibilizados no Aplicativo são de caráter meramente informativo e educacional, e não devem ser interpretados como substituto de consulta. O Chatbot de Inteligência Artificial não substitui e nunca deve ser utilizado como base para decisões de saúde.</p>
            <p><strong>b.</strong> Você compreende e concorda que as informações fornecidas no Aplicativo não têm a finalidade de tratar, curar ou diagnosticar qualquer doença ou condição de saúde específica. Em caso de emergências médicas, Você deve procurar imediatamente atendimento médico.</p>
            
            <p><strong>2.A. Conformidade Legal:</strong> VapApp — Via Aérea Pediátrica está em conformidade total com: Lei nº 14.811/2024 (ECA Digital), Lei nº 13.709/2018 (LGPD), Lei nº 8.069/1990 (ECA), entre outras. O Aplicativo implementou todas as proteções especiais previstas em lei para crianças e adolescentes.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">3. Cadastramento e Acesso ao Aplicativo</h2>
            <p><strong>3.1.</strong> Para acessar as funcionalidades do VapApp, Você deverá realizar um cadastro, fornecendo as informações solicitadas de forma completa e precisa.</p>
            <p><strong>3.2.</strong> Você é o único responsável pela veracidade, exatidão e atualização das informações fornecidas no cadastro.</p>
            <p><strong>3.3.</strong> O login e senha são pessoais e intransferíveis.</p>
            <p><strong>3.4.</strong> Você deverá nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">4. Uso do Aplicativo e Conduta do Usuário</h2>
            <p><strong>4.1.</strong> O Aplicativo deve ser utilizado de forma responsável, ética e em conformidade com a legislação brasileira aplicável.</p>
            <p><strong>4.2.</strong> Você se compromete a não utilizar o Aplicativo para: a. Finalidades ilegais; b. Transmitir conteúdo ilegal ou difamatório; c. Praticar atos de engenharia reversa; d. Interferir no desempenho do Aplicativo; e. Inserir códigos maliciosos; f. Coletar dados pessoais sem consentimento; g. Utilizar o Chatbot de IA de forma abusiva; h. Publicar informações falsas no Chat Comunitário; i. Compartilhar dados de crianças sem consentimento granular; k. Acessar como menor de 18 anos sem consentimento parental.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">5. Disposições Específicas do Marketplace</h2>
            <p><strong>5.1. Natureza da Intermediação:</strong> Não somos fabricantes, distribuidores, fornecedores ou prestadores de serviços dos itens ou serviços listados no Marketplace.</p>
            <p><strong>5.2. Responsabilidade dos Usuários:</strong> Vendedores e Compradores são integralmente responsáveis pelos produtos, serviços e transações.</p>
            <p><strong>5.3 - 5.7:</strong> Não nos responsabilizamos por falhas, fraudes ou disputas relacionadas a pagamentos ou entregas. A utilização do Marketplace poderá estar sujeita a taxas ou comissões. Reservamo-nos o direito de remover anúncios ou banir usuários.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">6. Propriedade Intelectual</h2>
            <p>Todos os direitos de propriedade intelectual relativos ao VapApp são de propriedade exclusiva da INNOVA DIGITAL LTDA. O conteúdo gerado por Usuários permanece de propriedade de seus respectivos criadores, mas concede ao Aplicativo uma licença para uso e exibição.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">7. Conteúdo Gerado pelo Usuário e Moderação (Chat Comunitário)</h2>
            <p>Você é o único responsável pelo conteúdo que publica. Reservamo-nos o direito, mas não a obrigação, de monitorar, editar, remover ou bloquear qualquer conteúdo que consideremos violar estes Termos de Uso.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">8. Segurança da Informação</h2>
            <p>Nós empregamos as melhores práticas de mercado e as medidas técnicas e administrativas aptas a proteger os Dados Pessoais. Em caso de incidente de segurança, nós notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os afetados.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">9. Limitação de Responsabilidade</h2>
            <p>O VapApp é fornecido “como está” e “conforme disponível”. Não garantimos que o Aplicativo será ininterrupto ou livre de erros. Em nenhuma hipótese, seremos responsáveis por danos emergentes, lucros cessantes, ou outras perdas decorrentes do uso inadequado do Aplicativo.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">10. Vigência, Rescisão e Suspensão</h2>
            <p>Estes Termos de Uso são válidos por prazo indeterminado. Poderemos rescindir ou suspender seu acesso ao Aplicativo a qualquer momento se houver violação destes Termos.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">11. Alterações nos Termos de Uso</h2>
            <p>Estes Termos de Uso poderão ser atualizados a qualquer momento. Notificaremos Você sobre quaisquer alterações substanciais.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">12. Disposições Gerais</h2>
            <p>Se qualquer disposição destes Termos for considerada inválida, as demais disposições permanecerão em pleno vigor e efeito.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">13. Legislação Aplicável e Foro</h2>
            <p>Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Para dirimir quaisquer dúvidas, fica eleito o foro do domicílio do Usuário.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">14. Canais de Contato</h2>
            <p>Para quaisquer dúvidas ou problemas: <strong>comunicacao@vap-app.com.br</strong></p>
            <p>Para questões relacionadas à privacidade e proteção de dados pessoais: <strong>dpo@vap-app.com.br</strong></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

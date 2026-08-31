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

          <h1 className="text-3xl md:text-4xl font-bold text-vap-dark mb-2">POLÍTICA DE PRIVACIDADE</h1>
          <h2 className="text-xl font-semibold text-vap-teal mb-2">VapApp — Via Aérea Pediátrica</h2>
          <p className="text-sm text-vap-gray mb-2">Versão 2.0 — 10 de agosto de 2026</p>
          <p className="text-sm text-vap-gray mb-12">Substitui integralmente a Versão 1.2, de 31/03/2026.</p>

          <div className="space-y-6 text-vap-dark/80 leading-relaxed">

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">1. Como ler este documento</h2>
            <p>Esta Política explica quais dados o VapApp trata, por quê, com quem os compartilha, por quanto tempo os guarda e quais são os seus direitos.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-vap-teal/10">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">SE VOCÊ QUER SABER…</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">VÁ PARA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">quem é o responsável pelos seus dados</td><td className="border border-gray-200 px-4 py-2">seção 3</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">quais dados tratamos</td><td className="border border-gray-200 px-4 py-2">seção 6</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">por que podemos tratá-los</td><td className="border border-gray-200 px-4 py-2">seção 7</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">como funciona o consentimento</td><td className="border border-gray-200 px-4 py-2">seção 8</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">como protegemos os dados da criança</td><td className="border border-gray-200 px-4 py-2">seção 9</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">com quem compartilhamos</td><td className="border border-gray-200 px-4 py-2">seções 10 e 11</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">por quanto tempo guardamos</td><td className="border border-gray-200 px-4 py-2">seção 12</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">como exercer seus direitos</td><td className="border border-gray-200 px-4 py-2">seção 15</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">2. Definições</h2>
            <p>Adotam-se as definições do art. 5º da Lei nº 13.709/2018 (LGPD), em especial:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dado pessoal</strong> — informação relacionada a pessoa natural identificada ou identificável.</li>
              <li><strong>Dado pessoal sensível</strong> — entre outros, o dado referente à saúde. Os dados clínicos do Assistido são dados pessoais sensíveis.</li>
              <li><strong>Titular</strong> — a pessoa natural a quem os dados se referem. O titular dos dados do Assistido é o próprio Assistido, ainda que quem os informe e consinta seja o Usuário Responsável.</li>
              <li><strong>Controlador</strong> — a quem competem as decisões sobre o tratamento: a INNOVA.</li>
              <li><strong>Operador</strong> — quem trata dados pessoais em nome do Controlador.</li>
              <li><strong>Anonimização</strong> — perda da possibilidade de associação ao indivíduo, considerados os meios técnicos razoáveis e disponíveis.</li>
              <li><strong>Descaracterização</strong> — tratamento que remove ou substitui identificadores diretos, reduzindo, sem eliminar, a possibilidade de associação ao indivíduo. Distingue-se da anonimização por não ser irreversível.</li>
            </ul>
            <p>Os demais termos — Assistido, Usuário Responsável, Colaborador do Diário, Usuário Profissional, Diário de Eventos, Dr. VAP e Comunidade — têm o significado atribuído nos Termos de Uso.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">3. Quem é o Controlador e quem é o Encarregado</h2>
            <p><strong>Controlador:</strong> INNOVA DIGITAL LTDA., CNPJ 61.674.924/0001-68, Avenida Fernandes Lima, nº 08, Edifício Centenário Plaza Center, sala 406, Farol, Maceió/AL, CEP 57.050-000. Contato: comunicacao@vap-app.com.br</p>
            <p><strong>Encarregado pelo Tratamento de Dados Pessoais (DPO):</strong> Kauê Cavalcante Wanderley de Melo — dpo@vap-app.com.br</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">4. Normas observadas</h2>
            <p>Constituição Federal (arts. 5º, X e LXXIX, e 227); Lei nº 13.709/2018 (LGPD); Lei nº 8.069/1990 (ECA); Lei nº 15.211/2025 e Decreto nº 12.880/2026; Lei nº 12.965/2014 (Marco Civil da Internet) e Decreto nº 8.771/2016; Lei nº 8.078/1990 (CDC); Resoluções CD/ANPD nº 15/2024 e nº 19/2024.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">5. De quem são os dados que tratamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-vap-teal/10">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">TITULAR</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">QUEM INFORMA</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">OBSERVAÇÃO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">Usuário Responsável</td><td className="border border-gray-200 px-4 py-2">ele próprio</td><td className="border border-gray-200 px-4 py-2">titular dos próprios dados</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Assistido (criança ou adolescente)</td><td className="border border-gray-200 px-4 py-2">o Usuário Responsável</td><td className="border border-gray-200 px-4 py-2">é o titular dos direitos sobre seus dados, embora não contrate</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Colaborador do Diário</td><td className="border border-gray-200 px-4 py-2">ele próprio, ao aceitar o convite</td><td className="border border-gray-200 px-4 py-2">tratamos seus dados de identificação e de acesso</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Usuário Profissional</td><td className="border border-gray-200 px-4 py-2">ele próprio</td><td className="border border-gray-200 px-4 py-2">inclui dados de qualificação declarada</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Terceiro mencionado</td><td className="border border-gray-200 px-4 py-2">incidentalmente, por outro Usuário</td><td className="border border-gray-200 px-4 py-2">não solicitamos esses dados e os removemos quando identificados</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">6. Quais dados tratamos</h2>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.1. Do Usuário Responsável</h3>
            <p>Nome completo; CPF; data de nascimento; e-mail; telefone; endereço residencial (CEP, logradouro, bairro, cidade, estado); foto de perfil; grau de parentesco com o Assistido; registro do aceite dos documentos; conteúdo que publica na Comunidade e no Diário; perguntas feitas ao Dr. VAP.</p>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.2. Do Assistido</h3>
            <p>Nome completo; data de nascimento; sexo; filiação; Cartão Nacional de Saúde ou CPF; município de nascimento; e dados de saúde, incluindo: informações sobre a gestação e o parto; motivo e data da traqueostomia; características da cânula; equipamentos em uso; internações; especialidades que o acompanham; medicações; e os registros do Diário de Eventos.</p>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.3. Do Colaborador do Diário</h3>
            <p>Dados de identificação e contato; registros de acesso; autoria e horário dos lançamentos.</p>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.4. Do Usuário Profissional</h3>
            <p>Nome; CPF; e-mail; telefone; conselho profissional, número de registro e UF; a decisão sobre o cadastro; e, havendo adesão ao Programa Apoiador Científico, o registro desse aceite.</p>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.5. Dados técnicos e de uso</h3>
            <p>Identificador do dispositivo; modelo e sistema operacional; versão do aplicativo; data, hora e endereço IP de acesso; token de notificação; registros de erro do aplicativo; registros de moderação.</p>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.6. Dados que não tratamos</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Não coletamos localização. O Aplicativo não solicita permissão de localização e não coleta a posição geográfica do Usuário ou do Assistido, por GPS, por rede ou por qualquer outro meio.</li>
              <li>Não tratamos dados de pagamento, bancários ou de transação. O Aplicativo não comercializa produtos ou serviços.</li>
              <li>Não utilizamos cookies HTTP, pixels de rastreamento ou web beacons.</li>
              <li>Não realizamos publicidade comportamental e não vendemos dados pessoais.</li>
            </ul>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">6.7. Informações sobre o contexto de cuidado</h3>
            <p>De preenchimento facultativo, e destinadas exclusivamente a adequar o conteúdo educativo e as orientações de segurança ao preparo declarado de quem cuida:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>se a família recebeu treinamento hospitalar antes da alta e como avalia sua segurança para realizar os cuidados;</li>
              <li>escolaridade do Usuário Responsável, utilizada para calibrar a linguagem do material educativo.</li>
            </ul>
            <p>A recusa em informá-las não impede o cadastro nem o uso de qualquer funcionalidade, e a informação pode ser excluída a qualquer tempo nas configurações do Aplicativo.</p>
            <p>Não tratamos informações sobre renda, benefícios assistenciais ou situação financeira da família.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">7. Por que tratamos cada dado — finalidades e bases legais</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-vap-teal/10">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">FINALIDADE</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">DADOS</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">BASE LEGAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">Criar e manter a conta; autenticar o acesso</td><td className="border border-gray-200 px-4 py-2">identificação e contato do Usuário Responsável, do Colaborador e do Profissional</td><td className="border border-gray-200 px-4 py-2">art. 7º, V — execução de contrato</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Verificar a identidade e prevenir fraude no cadastro</td><td className="border border-gray-200 px-4 py-2">CPF e resultado da validação</td><td className="border border-gray-200 px-4 py-2">art. 7º, V e art. 7º, IX — legítimo interesse</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Manter o cadastro clínico e o Diário do Assistido, para uso do próprio Usuário Responsável</td><td className="border border-gray-200 px-4 py-2">dados de saúde do Assistido</td><td className="border border-gray-200 px-4 py-2">art. 11, I — consentimento específico e destacado, prestado na forma do art. 14, §1º</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Permitir o compartilhamento do Diário com Colaborador escolhido pelo Usuário Responsável</td><td className="border border-gray-200 px-4 py-2">dados do Assistido e do Colaborador</td><td className="border border-gray-200 px-4 py-2">art. 11, I (Assistido) e art. 7º, V (Colaborador)</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Enviar lembretes e comunicações do serviço</td><td className="border border-gray-200 px-4 py-2">contato e token de notificação</td><td className="border border-gray-200 px-4 py-2">art. 7º, V</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Operar a Comunidade</td><td className="border border-gray-200 px-4 py-2">conteúdo publicado, que pode conter dado de saúde</td><td className="border border-gray-200 px-4 py-2">art. 11, I — consentimento específico, com advertência destacada</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Moderar a Comunidade e remover conteúdo ilícito</td><td className="border border-gray-200 px-4 py-2">conteúdo e registros de moderação</td><td className="border border-gray-200 px-4 py-2">art. 11, II, &quot;a&quot; — cumprimento de obrigação legal e regulatória (ECA e Lei nº 15.211/2025)</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Operar o Dr. VAP</td><td className="border border-gray-200 px-4 py-2">conteúdo das perguntas</td><td className="border border-gray-200 px-4 py-2">art. 11, I — consentimento específico</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Corrigir falhas do Aplicativo e manter a segurança da informação</td><td className="border border-gray-200 px-4 py-2">dados técnicos, registros de erro</td><td className="border border-gray-200 px-4 py-2">art. 7º, IX — legítimo interesse</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Guarda de registros de acesso</td><td className="border border-gray-200 px-4 py-2">IP, data e hora</td><td className="border border-gray-200 px-4 py-2">art. 7º, II — obrigação legal (art. 15 do Marco Civil)</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Gerir o Programa Apoiador Científico</td><td className="border border-gray-200 px-4 py-2">dados do Profissional e registro do aceite</td><td className="border border-gray-200 px-4 py-2">art. 7º, V</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Adequar o conteúdo educativo e as orientações de segurança ao preparo declarado do cuidador</td><td className="border border-gray-200 px-4 py-2">informações da seção 6.7</td><td className="border border-gray-200 px-4 py-2">art. 7º, I — consentimento, revogável a qualquer tempo</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Exercício regular de direitos em processo judicial, administrativo ou arbitral</td><td className="border border-gray-200 px-4 py-2">os estritamente necessários</td><td className="border border-gray-200 px-4 py-2">art. 7º, VI e art. 11, II, &quot;d&quot;</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Compor o Registro Nacional da Criança Traqueostomizada e produzir indicadores sobre essa população</td><td className="border border-gray-200 px-4 py-2">dados de saúde descaracterizados do Assistido, listados na cláusula 7.1.4</td><td className="border border-gray-200 px-4 py-2">art. 11, I, c/c art. 14, §1º — consentimento específico, destacado e facultativo</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-vap-dark mt-6 mb-3">7.1. Registro Nacional da Criança Traqueostomizada</h3>
            <p><strong>7.1.1.</strong> O Registro Nacional da Criança Traqueostomizada é base de dados de saúde descaracterizados, mantida pela INNOVA, destinada a produzir indicadores sobre a população pediátrica traqueostomizada no Brasil e a orientar o aprimoramento do conteúdo educativo e das funcionalidades do Aplicativo.</p>
            <p><strong>7.1.2. Facultatividade.</strong> A inclusão dos dados do Assistido no Registro é <strong>facultativa</strong> e depende de consentimento específico e destacado do Usuário Responsável, apartado dos demais. A recusa e a revogação <strong>não impedem o cadastro, não restringem qualquer funcionalidade e não alteram a qualidade do serviço</strong>.</p>
            <p><strong>7.1.3. Base legal.</strong> Arts. 7º, I; 11, I; e 14, §1º, da LGPD. A INNOVA <strong>não é órgão de pesquisa</strong> na acepção do art. 5º, XVIII, da LGPD e <strong>não invoca</strong> as hipóteses dos arts. 7º, IV, 11, II, &quot;c&quot;, ou 13.</p>
            <p><strong>7.1.4. O que integra o Registro.</strong> Faixa etária; sexo; unidade federativa; motivo da traqueostomia; faixa etária na data da traqueostomia; caráter permanente ou temporário; material e número da cânula; ocorrência e mês/ano da decanulação; equipamentos em uso; especialidades em acompanhamento; faixa de internações no período; faixa de semanas de gestação; faixa de peso ao nascer; necessidade de suporte respiratório na sala de parto; e tipo de parto.</p>
            <p><strong>Não integram o Registro</strong>, em nenhuma hipótese: nome, Cartão Nacional de Saúde, CPF, filiação, contato, endereço, data de nascimento exata, município de nascimento, o conteúdo do Diário de Eventos, as mensagens da Comunidade e as perguntas feitas ao Dr. VAP.</p>
            <p><strong>7.1.5. Limite da técnica.</strong> A INNOVA informa que, em razão da raridade da condição clínica e do número de variáveis, <strong>não é possível assegurar anonimização irreversível</strong>: subsiste risco residual de reidentificação. Por essa razão, os dados que integram a camada individualizada do Registro <strong>permanecem tratados como dados pessoais sensíveis</strong>, com todas as proteções desta Política. Os indicadores divulgados são exclusivamente agregados e não permitem individualização.</p>
            <p><strong>7.1.6. Vedações.</strong> São vedados, quanto aos dados do Registro: cessão onerosa a qualquer título; compartilhamento com a indústria farmacêutica, de equipamentos ou de dispositivos médicos; uso publicitário ou comercial; utilização para decisão sobre acesso a plano de saúde, crédito, benefício ou emprego; e qualquer tentativa de reidentificação.</p>
            <p><strong>7.1.7. Acesso externo e pesquisa.</strong> O acesso a dados individualizados por instituição externa depende, cumulativamente, de: (a) projeto com finalidade, método e prazo definidos; (b) aprovação por Comitê de Ética em Pesquisa e, quando cabível, pela CONEP, na forma da Lei nº 14.874/2024; (c) instrumento escrito que defina papéis, responsabilidades, prazo e medidas de segurança; e (d) atualização prévia desta Política. <strong>Nenhum acesso externo está em curso nesta data.</strong></p>
            <p><strong>7.1.8. Retenção e revogação.</strong> Os dados permanecem no Registro enquanto durar a finalidade, com revisão da necessidade a cada 24 (vinte e quatro) meses. A revogação do consentimento determina a exclusão dos dados do Assistido da camada individualizada, ressalvados os indicadores agregados já produzidos, que não permitem individualização.</p>
            <p><strong>7.1.9. Governança.</strong> O acesso à camada individualizada é restrito e registrado, mediante política interna de acesso, sob supervisão do Encarregado.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">8. Consentimento</h2>
            <p><strong>8.1.</strong> O que exige consentimento. O tratamento dos dados de saúde do Assistido depende de consentimento específico e destacado, prestado pelo Usuário Responsável.</p>
            <p><strong>8.2. Finalidades obrigatórias e recusáveis.</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-vap-teal/10">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">FINALIDADE</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">PODE SER RECUSADA?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">cadastro do Assistido e Diário de Eventos</td><td className="border border-gray-200 px-4 py-2">não — esse consentimento é condição do próprio serviço; sem ele não é possível utilizar o Aplicativo</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">participação na Comunidade</td><td className="border border-gray-200 px-4 py-2">sim — a recusa não impede o uso das demais funcionalidades</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">uso do Dr. VAP</td><td className="border border-gray-200 px-4 py-2">sim — a recusa não impede o uso das demais funcionalidades</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">compartilhamento do Diário com Colaborador</td><td className="border border-gray-200 px-4 py-2">sim — depende de ato próprio do Usuário</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">inclusão dos dados do Assistido no Registro Nacional (cláusula 7.1)</td><td className="border border-gray-200 px-4 py-2">sim — a recusa não afeta nenhuma funcionalidade</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>8.3. Revogação.</strong> O consentimento pode ser revogado a qualquer tempo, por funcionalidade no Aplicativo ou pelo contato com o Encarregado. A revogação não invalida o tratamento realizado antes dela e pode implicar a impossibilidade de uso da funcionalidade correspondente.</p>
            <p><strong>8.4. Registro do aceite.</strong> Registramos, como prova do consentimento prestado: a versão do documento aceito, a data, a hora, o endereço IP, o identificador da conta e o resumo criptográfico (hash) do texto exibido, que permite comprovar sua integridade sem armazená-lo associado aos dados pessoais do titular. <strong>Não mantemos, nesse registro nem em suas trilhas de auditoria, o nome, a data de nascimento ou o número de CPF do titular por extenso.</strong> Mantemos o histórico de versões dos documentos, de modo que o texto aceito seja sempre recuperável.</p>
            <p><strong>8.5. Consentimento colhido em versões anteriores.</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>(a) O consentimento obtido sob versões anteriores desta Política foi prestado de forma atrelada, sem possibilidade de manifestação separada por finalidade. Por isso será recoletado, de forma desmembrada, <strong>na primeira abertura do Aplicativo</strong> após a entrada em vigor desta Política.</li>
              <li>(b) <strong>As funcionalidades do Aplicativo permanecem integralmente disponíveis durante a recoleta.</strong> A publicação desta Política <strong>não suspende</strong> o cadastro do Assistido, o Diário de Eventos, a Comunidade nem o Dr. VAP.</li>
              <li>(c) Fica suspensa, desde a entrada em vigor e até manifestação específica do Usuário Responsável, exclusivamente a finalidade que não integra a prestação do serviço: a inclusão de dados no Registro Nacional (cláusula 7.1). <strong>Nenhum dado é incluído no Registro antes do novo consentimento.</strong></li>
              <li>(d) O consentimento anteriormente colhido sob a expressão &quot;uso de dados anonimizados para pesquisa&quot; <strong>não é aproveitado</strong>, por descrever como anônimo tratamento que é descaracterizado, na forma da cláusula 7.1.5.</li>
              <li>(e) A recusa de qualquer finalidade recusável não implica exclusão da conta nem perda do conteúdo já registrado.</li>
            </ul>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">9. Dados de crianças e adolescentes</h2>
            <p><strong>9.1.</strong> O Aplicativo não é dirigido a crianças e adolescentes, e não admite cadastro por eles. O titular da conta é sempre adulto, cuja identidade é verificada por CPF.</p>
            <p><strong>9.2.</strong> O Aplicativo trata dados de crianças e adolescentes — informados pelo adulto responsável. Esse tratamento observa o Melhor Interesse do Assistido, na forma do art. 227 da Constituição Federal, dos arts. 3º e 4º do ECA e do art. 14 da LGPD.</p>
            <p><strong>9.3. Quem consente e quem titulariza.</strong> O consentimento é prestado por quem detém o poder familiar, a guarda, a tutela ou a curatela. Os direitos previstos no art. 18 da LGPD são do Assistido, e são exercidos, em seu nome e no seu melhor interesse, pelo Usuário Responsável. O Colaborador do Diário não presta consentimento nem cadastra um Assistido.</p>
            <p><strong>9.4.</strong> Não fazemos, com dados de crianças e adolescentes: publicidade direcionada; comercialização ou cessão onerosa; perfilamento para engajamento; coleta de biometria; rastreamento de localização; nem condicionamento de funcionalidade ao fornecimento de dado além do necessário. O Aplicativo também não emprega recompensa aleatória, caixas de recompensa, rolagem infinita, notificação com gatilho de urgência artificial ou qualquer recurso destinado a prolongar compulsoriamente o tempo de uso.</p>
            <p><strong>9.5.</strong> Ao completar 18 anos, o Assistido pode requerer diretamente o acesso, a correção, a portabilidade ou a eliminação de seus dados, pelo canal do Encarregado.</p>
            <p><strong>9.6. Canal.</strong> Notificações sobre violação de direitos de criança ou adolescente podem ser feitas no Aplicativo ou pelo e-mail do Encarregado, e são apreciadas em até 48 horas.</p>
            <p><strong>9.7. Aferição de idade.</strong> O cadastro exige o CPF, validado junto à base da Receita Federal, de onde se obtém a data de nascimento do candidato a Usuário. Cadastros de pessoas menores de 18 anos não são aprovados. Não utilizamos autodeclaração de idade como único mecanismo de aferição.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">10. Com quem compartilhamos</h2>
            <p><strong>10.1. Operadores.</strong> Compartilhamos dados com fornecedores que os tratam em nosso nome e sob nossas instruções, vinculados contratualmente a deveres de segurança e confidencialidade.</p>
            <p><strong>10.2. Autoridades.</strong> Podemos compartilhar dados para cumprir ordem judicial, requisição de autoridade competente ou obrigação legal, no limite do estritamente necessário. Comunicaremos o Usuário, salvo vedação legal ou segredo de justiça.</p>
            <p><strong>10.3. Comunidade.</strong> O que Você publica na Comunidade é visível aos demais participantes, observado o prazo da seção 12.</p>
            <p><strong>10.4. Reorganização societária.</strong> Em caso de fusão, aquisição ou transferência de ativos, os dados podem ser transferidos, mantidas as condições desta Política e comunicado o titular.</p>
            <p><strong>10.5.</strong> Não vendemos, alugamos nem cedemos dados pessoais para fins publicitários ou comerciais.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">11. Transferência internacional</h2>
            <p><strong>11.1.</strong> A base de dados do Aplicativo fica no Brasil. Os cadastros, os dados do Assistido, o Diário, a Comunidade e os arquivos estão hospedados em servidores localizados no território nacional, na região de São Paulo.</p>
            <p><strong>11.2.</strong> Há transferência internacional de dados específicos. Quatro dos nossos operadores estão localizados nos Estados Unidos e recebem, rotineiramente, os seguintes dados:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-vap-teal/10">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">DESTINATÁRIO</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">O QUE É TRANSFERIDO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">Resend</td><td className="border border-gray-200 px-4 py-2">o conteúdo dos e-mails enviados pelo serviço: nome, endereço de e-mail, códigos de verificação e as informações que constem do corpo da mensagem</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">OpenAI</td><td className="border border-gray-200 px-4 py-2">o texto integral das mensagens publicadas na Comunidade, para moderação, e das perguntas feitas ao Dr. VAP, que podem conter informações de saúde do Assistido.</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Expo, Apple e Google</td><td className="border border-gray-200 px-4 py-2">o identificador do aparelho e o conteúdo da notificação</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Sentry</td><td className="border border-gray-200 px-4 py-2">o identificador do usuário e as informações técnicas da falha ocorrida no aplicativo</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>11.3. Base legal e garantias.</strong> As transferências ocorrem com fundamento no art. 33, II, &quot;a&quot;, da LGPD, mediante cláusulas contratuais padrão aprovadas pela Autoridade Nacional de Proteção de Dados (Resolução CD/ANPD nº 19/2024), que asseguram ao titular os mesmos direitos e o mesmo nível de proteção previstos na legislação brasileira.</p>
            <p><strong>11.4.</strong> Não transferimos, para fora do país, o cadastro clínico do Assistido nem o Diário de Eventos.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">12. Por quanto tempo guardamos</h2>
            <p><strong>12.1.</strong> Guardamos os dados pelo tempo necessário às finalidades declaradas, observados os prazos abaixo. Findo o prazo, os dados são eliminados ou anonimizados, salvo hipótese do art. 16 da LGPD.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-vap-teal/10">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">CATEGORIA</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-vap-dark">PRAZO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">Mensagens da Comunidade</td><td className="border border-gray-200 px-4 py-2"><strong>7 dias</strong>, com eliminação definitiva</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Mensagem denunciada ou removida, e o respectivo registro de moderação</td><td className="border border-gray-200 px-4 py-2"><strong>90 dias</strong>, para comprovação da atuação de moderação</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Conversas com o Dr. VAP</td><td className="border border-gray-200 px-4 py-2"><strong>30 dias</strong></td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Backups da base de dados</td><td className="border border-gray-200 px-4 py-2">7 dias</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Cadastro do Assistido e Diário de Eventos</td><td className="border border-gray-200 px-4 py-2">enquanto a conta estiver ativa</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Dados que integram o Registro Nacional (cláusula 7.1)</td><td className="border border-gray-200 px-4 py-2">enquanto durar a finalidade, com revisão a cada 24 meses</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Marcação de conta inativa</td><td className="border border-gray-200 px-4 py-2"><strong>2 anos sem acesso</strong></td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Anonimização de dados do Assistido em conta inativa</td><td className="border border-gray-200 px-4 py-2"><strong>3 anos sem acesso</strong></td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Eliminação após pedido de exclusão da conta</td><td className="border border-gray-200 px-4 py-2"><strong>90 dias</strong></td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Registro do pedido de exclusão (identificador da conta, e-mail do solicitante e data do pedido)</td><td className="border border-gray-200 px-4 py-2">5 anos, contados da conclusão da eliminação</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Registro administrativo da exclusão (identificador da conta, data e categorias eliminadas) — sem nome e sem e-mail do titular</td><td className="border border-gray-200 px-4 py-2">5 anos, contados da conclusão da eliminação</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Códigos de recuperação de senha</td><td className="border border-gray-200 px-4 py-2"><strong>24 horas</strong></td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Registros de acesso (IP, data e hora)</td><td className="border border-gray-200 px-4 py-2">6 meses (art. 15 do Marco Civil)</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Registro do aceite dos documentos (Termos, Política e Termo de Apoiador) e respectiva trilha de auditoria</td><td className="border border-gray-200 px-4 py-2"><strong>5 anos após o encerramento da relação</strong></td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Informações sobre o contexto de cuidado (seção 6.7)</td><td className="border border-gray-200 px-4 py-2">enquanto a conta estiver ativa; eliminadas com a exclusão da conta</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Registro de incidentes de segurança</td><td className="border border-gray-200 px-4 py-2">5 anos (Res. CD/ANPD nº 15/2024)</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Conteúdo e registros sob requisição de autoridade, ou sob apuração de violação a direito de criança ou adolescente</td><td className="border border-gray-200 px-4 py-2">pelo tempo necessário à apuração — seção 12.4</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>12.2. Limite da eliminação na Comunidade.</strong> A eliminação em 7 dias alcança as cópias sob nosso controle. Não alcança as cópias eventualmente retidas nos aparelhos dos Usuários que a elas tiveram acesso, nem as cópias sob controle do operador responsável pela moderação, sujeitas à política de retenção deste.</p>
            <p><strong>12.3. Retenção após a exclusão da conta.</strong> Alguns dados são mantidos, após o pedido de exclusão, exclusivamente para: (a) cumprimento de obrigação legal ou regulatória; (b) exercício regular de direitos em processo judicial, administrativo ou arbitral; (c) prova do aceite dos documentos, na forma da seção 8.4; e (d) <strong>prova de que o próprio pedido de exclusão foi recebido e atendido</strong>. Mantemos o mínimo necessário e pelos prazos da tabela acima.</p>
            <p><strong>12.4. Suspensão dos prazos por determinação ou por conhecimento de ilicitude.</strong> Os prazos desta seção não se aplicam quando houver requisição de autoridade judicial, policial, administrativa ou do Ministério Público, ou quando tivermos conhecimento de conteúdo que possa configurar violação a direito de criança ou adolescente, ou ilícito penal. Nessas hipóteses, o conteúdo e os registros correspondentes são preservados pelo tempo necessário à apuração e ao cumprimento da determinação, na forma do art. 15, §2º, da Lei nº 12.965/2014 e do Estatuto Digital da Criança e do Adolescente.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">13. Segurança</h2>
            <p><strong>13.1.</strong> Adotamos medidas técnicas e administrativas para proteger os dados, entre elas: controle de acesso por perfil; segregação de acesso no banco de dados; criptografia dos dados em trânsito; criptografia, no banco de dados, dos seguintes campos do Assistido: nome, Cartão Nacional de Saúde, telefone, CEP, logradouro, bairro e cidade; registro de acessos; e rotina de cópia de segurança.</p>
            <p><strong>13.2.</strong> O CPF não é armazenado em texto legível. Do número é derivado um identificador criptográfico, com valor de sal, que permite verificar a correspondência com um número informado sem manter o número armazenado. Trabalhamos continuamente no reforço desse mecanismo. Isso se aplica tanto ao Usuário Responsável quanto ao Usuário Profissional.</p>
            <p><strong>13.3.</strong> Nenhum sistema é absolutamente seguro. Proteja suas credenciais e comunique-nos imediatamente qualquer atividade suspeita.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">14. Incidentes de segurança</h2>
            <p><strong>14.1.</strong> Ocorrendo incidente de segurança que possa acarretar risco ou dano relevante, comunicaremos a Autoridade Nacional de Proteção de Dados e os titulares afetados em até 3 (três) dias úteis, contados do conhecimento de que o incidente afetou dados pessoais, na forma da Resolução CD/ANPD nº 15/2024.</p>
            <p><strong>14.2.</strong> A comunicação ao titular indicará, em linguagem acessível: a descrição do incidente, os dados afetados, os riscos envolvidos, as medidas adotadas e os canais de contato.</p>
            <p><strong>14.3.</strong> Mantemos plano de resposta a incidentes, com responsável designado e fluxo de escalonamento.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">15. Seus direitos</h2>
            <p><strong>15.1.</strong> Você pode, a qualquer tempo, requerer: confirmação da existência de tratamento; acesso aos dados; correção; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade; portabilidade; informação sobre compartilhamento; informação sobre a possibilidade de não consentir e suas consequências; revogação do consentimento; e oposição a tratamento em desconformidade com a lei (arts. 18 e 20 da LGPD).</p>
            <p><strong>15.2. Prazo.</strong> Responderemos em até 15 (quinze) dias corridos, contados do recebimento do pedido.</p>
            <p><strong>15.3. Exclusão da conta.</strong> O pedido pode ser feito no Aplicativo. A eliminação ocorre em até 90 (noventa) dias, ressalvadas as hipóteses da seção 12.3, que serão informadas de forma específica na confirmação enviada a Você.</p>
            <p><strong>15.4. Decisões automatizadas.</strong> A moderação de conteúdo pode envolver tratamento automatizado. Você pode solicitar revisão dessas decisões pelo canal de atendimento.</p>
            <p><strong>15.5. Reclamação.</strong> Você pode apresentar reclamação à Autoridade Nacional de Proteção de Dados.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">16. Tecnologias empregadas</h2>
            <p><strong>16.1.</strong> Identificadores de dispositivo — para autenticação, detecção de acesso não autorizado e gestão de sessões.</p>
            <p><strong>16.2.</strong> Armazenamento local — tokens de autenticação e preferências ficam no seu próprio aparelho, protegidos pelo sistema operacional.</p>
            <p><strong>16.3.</strong> Notificações — utilizamos token de notificação, que pode ser desativado nas configurações do seu aparelho.</p>
            <p><strong>16.4. Relatórios de falha.</strong> Utilizamos o serviço Sentry para identificar e corrigir falhas do próprio Aplicativo — travamentos, erros de execução e problemas de desempenho. São coletados o identificador do usuário e informações técnicas sobre a falha. Não utilizamos esse serviço para análise de comportamento, publicidade ou perfilamento.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">17. Vigência, alterações e histórico</h2>
            <p><strong>17.1.</strong> Esta Política pode ser atualizada. Alterações que <strong>ampliem o tratamento, criem nova finalidade ou restrinjam direitos do titular</strong> serão comunicadas por aviso no Aplicativo e por e-mail, com antecedência mínima de 30 (trinta) dias. Alterações <strong>corretivas, favoráveis ao titular ou determinadas por lei, decisão judicial ou ato de autoridade competente</strong> produzem efeito imediato, com comunicação na data da publicação.</p>
            <p><strong>17.2.</strong> Manteremos disponível o histórico de versões, com as respectivas datas.</p>
            <p><strong>17.3. Foro.</strong> Fica eleito o foro do domicílio do titular.</p>
            <p><strong>17.4.</strong> Dúvidas, solicitações e reclamações: <a href="mailto:dpo@vap-app.com.br" className="text-vap-teal hover:underline">dpo@vap-app.com.br</a>.</p>
            <p><strong>17.5. Disposição transitória.</strong> Esta Versão 2.0 entra em vigor na data de sua publicação, com comunicação por aviso no Aplicativo e por e-mail nessa mesma data. A antecedência prevista na cláusula 17.1 aplica-se às alterações posteriores a esta versão. A eliminação das mensagens da Comunidade prevista na seção 12 passa a produzir efeitos 30 (trinta) dias após a publicação, prazo em que o Usuário pode preservar o conteúdo que deseje.</p>

            <p className="text-sm text-vap-gray mt-10 pt-6 border-t border-gray-100">Versão 2.0 — 10 de agosto de 2026.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}



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

          <h1 className="text-3xl md:text-4xl font-bold text-vap-dark mb-2">TERMOS DE USO</h1>
          <h2 className="text-xl font-semibold text-vap-teal mb-2">VapApp — Via Aérea Pediátrica</h2>
          <p className="text-sm text-vap-gray mb-12">Versão 2.0 — 10 de agosto de 2026</p>

          <div className="space-y-6 text-vap-dark/80 leading-relaxed">
            <p>Bem-vindo ao VapApp — Via Aérea Pediátrica.</p>
            <p>Estes Termos de Uso regem a utilização do aplicativo móvel VapApp — Via Aérea Pediátrica, desenvolvido e operado pela INNOVA DIGITAL LTDA, sociedade empresária limitada inscrita no CNPJ sob o nº 61.674.924/0001-68, com sede na Avenida Fernandes Lima, nº 08, Edifício Centenário Plaza Center, Sala 406, Farol, Maceió/AL, CEP: 57050-000, doravante &quot;INNOVA&quot;, &quot;Nós&quot; ou &quot;Aplicativo&quot;.</p>
            <p>Estes Termos são contrato legalmente vinculante entre Você e Nós. Leia-os integralmente. Ao acessar ou utilizar qualquer funcionalidade do Aplicativo, Você declara ter lido, compreendido e aceitado todos os termos aqui estabelecidos. Se não concordar com qualquer disposição, não utilize o Aplicativo.</p>
            <p>Este documento é complementado pela Política de Privacidade e, para os profissionais de saúde que a ele adiram, pelo Termo de Apoiador Científico.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">1. Definições</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Aplicativo:</strong> o aplicativo móvel VapApp — Via Aérea Pediátrica.</li>
              <li><strong>Assistido:</strong> a criança ou o adolescente traqueostomizado, ou com patologia de via aérea pediátrica, cujos dados são registrados no Aplicativo pelo Usuário Responsável. Nos termos do art. 2º do ECA, criança é a pessoa até 12 anos incompletos e adolescente, a pessoa entre 12 e 18 anos.</li>
              <li><strong>Usuário Responsável:</strong> pessoa natural maior de 18 anos que exerce o poder familiar sobre o Assistido, ou detém sua guarda, tutela ou curatela legalmente constituída, e que realiza o cadastro.</li>
              <li><strong>Colaborador do Diário:</strong> terceiro convidado pelo Usuário Responsável para acessar e registrar informações no Diário de Eventos de um Assistido.</li>
              <li><strong>Usuário Profissional:</strong> profissional de saúde cujo cadastro foi aprovado por Nós.</li>
              <li><strong>Usuário:</strong> qualquer das categorias acima.</li>
              <li><strong>Diário de Eventos:</strong> registro cronológico das ocorrências do cuidado diário do Assistido.</li>
              <li><strong>Dr. VAP:</strong> assistente virtual automatizado de dúvidas gerais.</li>
              <li><strong>Comunidade:</strong> espaço moderado de troca de mensagens entre Usuários.</li>
              <li><strong>Dados Pessoais, Dados Pessoais Sensíveis e Tratamento:</strong> conforme o art. 5º da Lei nº 13.709/2018 (LGPD).</li>
              <li><strong>Melhor Interesse:</strong> princípio que rege toda decisão relativa ao Assistido, nos termos do art. 227 da Constituição Federal, dos arts. 3º e 4º do ECA e do art. 14 da LGPD.</li>
            </ul>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">2. Objeto e natureza do serviço</h2>
            <p><strong>2.1.</strong> O Aplicativo é ferramenta gratuita de apoio, educação e organização de informações destinada a pais, responsáveis legais e cuidadores de crianças e adolescentes traqueostomizados, e a profissionais de saúde que atuam nessa linha de cuidado.</p>
            <p><strong>2.2.</strong> São funcionalidades do Aplicativo:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>cadastro do Assistido, para registro e organização de informações clínicas de uso do próprio Usuário Responsável;</li>
              <li>Diário de Eventos, com lembretes, e possibilidade de compartilhamento com Colaborador;</li>
              <li>Comunidade, espaço moderado de troca de experiências;</li>
              <li>Dr. VAP, assistente automatizado de dúvidas gerais, nos limites da cláusula 6;</li>
              <li>calculadora de referência, nos limites da cláusula 7;</li>
              <li>conteúdo educativo: aulas, textos, e-books, podcasts e quiz;</li>
              <li>Programa Apoiador Científico, destinado a Usuários Profissionais, regido por termo próprio.</li>
            </ol>
            <p><strong>2.3. O que o Aplicativo não é.</strong> O Aplicativo não é serviço de saúde, não presta assistência médica, não realiza diagnóstico, não prescreve tratamento e não configura telemedicina, teleconsulta ou segunda opinião. Todo o conteúdo tem natureza informativa e educacional e não substitui consulta, avaliação, prescrição ou acompanhamento por profissional de saúde habilitado.</p>
            <p><strong>2.4. Emergências.</strong> Em caso de emergência, agravamento do quadro do Assistido ou qualquer situação que exija atenção urgente, procure imediatamente o serviço de urgência ou o profissional responsável. Não utilize o Aplicativo para essa finalidade.</p>
            <p><strong>2.5. O Diário não é prontuário.</strong> O Diário de Eventos e o cadastro do Assistido são registros de organização pessoal do Usuário Responsável. Não constituem prontuário médico, não são produzidos nem validados por profissional de saúde no exercício de sua atividade, e não se submetem ao regime da Lei nº 13.787/2018.</p>
            <p><strong>2.6. Público a que se destina.</strong> O Aplicativo não é dirigido a crianças ou adolescentes e não admite cadastro por eles. O titular do cadastro é sempre pessoa maior de 18 anos. O Aplicativo, contudo, trata dados pessoais de crianças e adolescentes fornecidos por esse adulto, sempre no Melhor Interesse do Assistido, na forma da Política de Privacidade.</p>
            <p><strong>2.6.1. Classificação indicativa.</strong> O conteúdo do Aplicativo é classificado como adequado a partir de 16 (dezesseis) anos, em razão de sua natureza clínica. Essa classificação não altera a idade mínima de 18 anos exigida para o cadastro, prevista na cláusula 4.</p>
            <p><strong>2.7. Gratuidade.</strong> O uso do Aplicativo é gratuito para o Usuário Responsável. A gratuidade não afasta os deveres de qualidade e de informação previstos na legislação aplicável.</p>
            <p><strong>2.8.</strong> Não há funcionalidade de compra e venda. O Aplicativo não intermedeia transações, não comercializa produtos ou serviços e não processa pagamentos.</p>
            <p><strong>2.9.</strong> Não há coleta de localização. O Aplicativo não solicita permissão de localização e não coleta a posição geográfica do Usuário ou do Assistido, por GPS, por rede ou por qualquer outro meio.</p>
            <p><strong>2.10.</strong> Não há mecanismos de engajamento compulsório. O Aplicativo não emprega recompensa aleatória, caixas de recompensa, rolagem infinita, notificação com gatilho de urgência artificial, nem qualquer recurso destinado a prolongar compulsoriamente o tempo de uso ou a explorar a condição peculiar de desenvolvimento de crianças e adolescentes.</p>
            <p><strong>2.11. Registro Nacional da Criança Traqueostomizada.</strong> O Aplicativo mantém base de dados descaracterizados destinada a produzir indicadores sobre a população pediátrica traqueostomizada no Brasil, na forma da cláusula 7.1 da Política de Privacidade. A inclusão é facultativa, depende de consentimento específico e destacado, e a recusa não restringe qualquer funcionalidade.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">3. Legislação observada</h2>
            <p>O Aplicativo é operado em observância, entre outras normas, à Constituição Federal, à Lei nº 13.709/2018 (LGPD), à Lei nº 8.069/1990 (ECA), à Lei nº 15.211/2025 e ao Decreto nº 12.880/2026, à Lei nº 12.965/2014 (Marco Civil da Internet), à Lei nº 8.078/1990 (Código de Defesa do Consumidor) e à Lei nº 9.610/1998.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">4. Quem pode se cadastrar</h2>
            <p><strong>4.1.</strong> O cadastro é privativo de pessoa natural maior de 18 anos, plenamente capaz, que seja pai, mãe, responsável legal, tutor, curador ou guardião do Assistido, ou profissional de saúde regularmente inscrito em conselho.</p>
            <p><strong>4.2.</strong> É vedado o cadastro por menor de 18 anos, ainda que autorizado por terceiro. Identificada a condição, a conta será suspensa e os dados eliminados na forma da Política de Privacidade.</p>
            <p><strong>4.3. Verificação de identidade.</strong> O cadastro exige a informação do CPF, submetido a validação junto à base da Receita Federal. A aprovação depende do resultado dessa validação. Essa exigência aplica-se tanto ao Usuário Responsável quanto ao Usuário Profissional.</p>
            <p><strong>4.4. Vínculo com o Assistido.</strong> Ao cadastrar um Assistido, Você declara, sob as penas da lei, ser seu pai, mãe ou responsável legal, e ter poder para consentir com o tratamento de seus dados pessoais, nos termos do art. 14, §1º, da LGPD. A declaração falsa sujeita o declarante às sanções civis e penais cabíveis e autoriza o encerramento imediato da conta.</p>
            <p><strong>4.5. Cuidador sem poder familiar.</strong> Quem exerça cuidado sobre o Assistido sem deter poder familiar, guarda, tutela ou curatela não pode criar cadastro de Assistido, podendo apenas ser convidado como Colaborador do Diário, na forma da cláusula 9. O Colaborador do Diário não cadastra Assistido e não presta consentimento em nome dele.</p>
            <p><strong>4.6. Veracidade.</strong> Você é responsável pela veracidade, exatidão e atualização das informações que fornecer, inclusive as relativas ao Assistido.</p>
            <p><strong>4.7. Credenciais.</strong> Login e senha são pessoais e intransferíveis. Você deve mantê-los em sigilo e comunicar-nos imediatamente qualquer uso não autorizado. Você responde pelas atividades realizadas em sua conta, salvo quando decorrerem de fraude, de falha de segurança do Aplicativo ou de outra circunstância alheia ao seu controle.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">5. Cadastro do Usuário Profissional</h2>
            <p><strong>5.1.</strong> O cadastro de profissional de saúde exige nome, CPF, contato, conselho profissional, número de registro e unidade federativa, e é submetido a análise por nossa equipe.</p>
            <p><strong>5.2.</strong> A qualificação profissional é autodeclarada. A validação do CPF confirma a identidade do profissional, e não a sua habilitação. Não realizamos conferência automatizada do registro junto ao respectivo conselho. A aprovação do cadastro não constitui atestado, certificação, credenciamento ou endosso da habilitação, da especialidade ou da regularidade do profissional, e não deve ser interpretada como tal por nenhum Usuário.</p>
            <p><strong>5.3.</strong> O Usuário Profissional declara e garante, sob as penas da lei, que as informações de qualificação são verdadeiras e que seu registro está ativo e regular, obrigando-se a comunicar imediatamente qualquer alteração, suspensão ou cancelamento.</p>
            <p><strong>5.4.</strong> O Usuário Profissional obriga-se a observar o código de ética de sua profissão e a não utilizar o Aplicativo para captação de clientela, promoção comercial, diagnóstico, prescrição ou orientação terapêutica individualizada a Assistido determinado.</p>
            <p><strong>5.5.</strong> A aprovação pode ser revogada a qualquer tempo, motivadamente, inclusive em caso de dúvida fundada sobre a veracidade da qualificação declarada.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">6. Dr. VAP — assistente automatizado</h2>
            <p><strong>6.1. Natureza.</strong> O Dr. VAP é sistema automatizado que gera respostas a partir de material educativo previamente selecionado. Não é profissional de saúde, não possui inscrição em conselho e não estabelece relação profissional-paciente.</p>
            <p><strong>6.2. Limites.</strong> O Dr. VAP não fornece diagnóstico, prescrição, posologia, conduta terapêutica nem orientação individualizada sobre o Assistido. Perguntas relativas a emergência ou sinal de gravidade, a manejo de cânula em caso concreto, a medicamento, dose ou posologia, e a interpretação de sintoma ou de exame são respondidas com a orientação de procurar atendimento profissional.</p>
            <p><strong>6.3. Falibilidade.</strong> Respostas geradas automaticamente podem conter erro, imprecisão ou desatualização. Não tome decisão sobre a saúde do Assistido com base em resposta do Dr. VAP.</p>
            <p><strong>6.4.</strong> Não inserção de dados de terceiros. É vedado inserir, nas perguntas, dados pessoais de terceiros.</p>
            <p><strong>6.5. Processamento e retenção.</strong> O conteúdo das interações é processado por fornecedor localizado no exterior e retido pelo prazo indicado na Política de Privacidade.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">7. Calculadora de referência</h2>
            <p><strong>7.1.</strong> A calculadora é ferramenta de cálculo de valor teórico de referência, que aplica fórmula de domínio público sobre valores informados manualmente pelo Usuário na própria tela.</p>
            <p><strong>7.2.</strong> A fórmula utilizada e sua fonte bibliográfica são exibidas junto ao resultado.</p>
            <p><strong>7.3.</strong> O resultado não é recomendação clínica. A calculadora não indica, não recomenda e não valida a cânula adequada a Assistido determinado. A definição da cânula é ato exclusivo do profissional de saúde assistente.</p>
            <p><strong>7.4.</strong> A ferramenta não armazena os valores informados nem gera histórico.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">8. Comunidade</h2>
            <p><strong>8.1. Natureza.</strong> A Comunidade é espaço de apoio mútuo entre Usuários. O conteúdo é gerado pelos Usuários e não reflete nosso posicionamento, não constituindo orientação de saúde.</p>
            <p><strong>8.2. Cautela.</strong> As mensagens são visíveis aos demais participantes. Recomendamos cautela ao compartilhar informações de saúde do Assistido ou dados pessoais, seus ou de terceiros.</p>
            <p><strong>8.3. Prazo das mensagens.</strong> As mensagens da Comunidade são eliminadas definitivamente após 7 (sete) dias da publicação. A eliminação alcança as cópias sob nosso controle; não alcança as cópias eventualmente retidas nos aparelhos dos Usuários que a elas tiveram acesso.</p>
            <p><strong>8.4. Condutas vedadas.</strong> É vedado publicar conteúdo que: (a) seja ilícito, difamatório, discriminatório ou que incite ódio ou violência; (b) viole direitos de terceiros, inclusive de propriedade intelectual; (c) exponha dado pessoal de terceiro sem sua autorização; (d) constitua diagnóstico, prescrição ou orientação terapêutica individualizada; (e) veicule publicidade, captação de clientela ou oferta comercial; (f) contenha desinformação em saúde; (g) viole a dignidade, a imagem ou a privacidade de criança ou adolescente.</p>
            <p><strong>8.5. Moderação.</strong> As mensagens são submetidas a moderação, com apoio de ferramenta automatizada. Podemos remover conteúdo, suspender ou encerrar contas em caso de violação destes Termos.</p>
            <p><strong>8.6. Remoção independentemente de ordem judicial.</strong> Removeremos conteúdo manifestamente ilícito, especialmente o que viole direitos de criança ou adolescente, independentemente de ordem judicial, tão logo tenhamos conhecimento, e comunicaremos o fato ao Conselho Tutelar, ao Ministério Público ou à autoridade policial, conforme o caso.</p>
            <p><strong>8.7. Canal de notificação.</strong> Está disponível, no Aplicativo, canal para notificação de conteúdo que viole estes Termos ou direitos de criança e adolescente. As notificações são apreciadas em até 48 (quarenta e oito) horas quando envolverem criança ou adolescente, e em até 5 (cinco) dias nos demais casos, sendo o notificante informado do desfecho.</p>
            <p><strong>8.8. Preservação para prova.</strong> A mensagem objeto de denúncia ou de remoção é preservada por 90 (noventa) dias, juntamente com o respectivo registro de moderação, para comprovação da atuação e exercício regular de direitos. Findo esse prazo, é eliminada.</p>
            <p><strong>8.9. Preservação por determinação ou por conhecimento de ilicitude.</strong> Os prazos das cláusulas 8.3 e 8.8 não se aplicam quando: (a) houver requisição de autoridade judicial, policial, administrativa ou do Ministério Público; ou (b) tivermos conhecimento de conteúdo que possa configurar violação a direito de criança ou adolescente, ou ilícito penal. Nessas hipóteses, o conteúdo e os registros correspondentes são preservados pelo tempo necessário à apuração e ao cumprimento da determinação, ainda que superior aos prazos ordinários, na forma do art. 15, §2º, da Lei nº 12.965/2014 e do Estatuto Digital da Criança e do Adolescente.</p>
            <p><strong>8.10. Contestação.</strong> O Usuário cujo conteúdo tenha sido removido, ou cuja conta tenha sido suspensa, pode requerer a revisão da decisão pelo canal de atendimento, inclusive quando a medida tenha decorrido de tratamento automatizado, na forma do art. 20 da LGPD.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">9. Diário compartilhado e Colaborador</h2>
            <p><strong>9.1.</strong> O Usuário Responsável pode convidar terceiro de sua confiança para acessar e registrar informações no Diário de Eventos do Assistido.</p>
            <p><strong>9.2. Limites do acesso.</strong> O Colaborador do Diário não pode cadastrar Assistido, não presta consentimento em nome dele e não tem acesso às demais funcionalidades vinculadas ao cadastro clínico, salvo as expressamente disponibilizadas no Diário compartilhado.</p>
            <p><strong>9.3. Papéis.</strong> Ao convidar, o Usuário Responsável decide quem acessa os dados do Assistido e responde por essa escolha, devendo orientar o Colaborador quanto ao uso adequado das informações e revogar o acesso quando cessar a necessidade.</p>
            <p><strong>9.4.</strong> O Colaborador obriga-se a utilizar o acesso exclusivamente para o cuidado do Assistido, a manter sigilo e a não reproduzir ou divulgar as informações.</p>
            <p><strong>9.5. Nossa posição.</strong> O Colaborador é usuário do Aplicativo e tratamos os dados pessoais dele, identificação, registros de acesso e autoria dos lançamentos, na forma da Política de Privacidade. Respondemos pelo funcionamento seguro do mecanismo de compartilhamento e pela efetividade da revogação de acesso.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">10. Dados de terceiros</h2>
            <p><strong>10.1.</strong> É vedado inserir, em qualquer funcionalidade, dado pessoal de terceiro, outro familiar, profissional de saúde, instituição ou paciente, sem que haja fundamento legítimo para tanto.</p>
            <p><strong>10.2.</strong> Identificado o registro indevido de dados de terceiro, podemos removê-lo.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">11. Propriedade intelectual</h2>
            <p><strong>11.1.</strong> O Aplicativo e todo o conteúdo por Nós produzido ou licenciado, software, design, textos, imagens, vídeos, material didático, marcas, logotipos e bases de dados, são de titularidade da INNOVA ou de seus licenciadores, protegidos pela Lei nº 9.610/1998 e pela Lei nº 9.279/1996.</p>
            <p><strong>11.2.</strong> É vedada a reprodução, distribuição, modificação, engenharia reversa, descompilação, exploração comercial ou qualquer outro uso não expressamente autorizado.</p>
            <p><strong>11.3. Conteúdo do Usuário.</strong> O conteúdo que Você publica permanece de sua titularidade. Ao publicá-lo, Você nos concede licença gratuita e não exclusiva, limitada ao necessário à operação do Aplicativo e ao prazo em que o conteúdo permanecer publicado, para armazenar, reproduzir e exibir esse conteúdo exclusivamente para o funcionamento das funcionalidades em que foi publicado.</p>
            <p><strong>11.4.</strong> A licença não abrange uso publicitário, cessão a terceiros, sublicenciamento nem utilização fora do Aplicativo, salvo autorização específica e destacada.</p>
            <p><strong>11.5.</strong> Removido o conteúdo, encerrada a conta ou decorrido o prazo da cláusula 8.3, a licença cessa, ressalvadas as cópias técnicas transitórias e os registros exigidos por lei.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">12. Programa Apoiador Científico</h2>
            <p><strong>12.1.</strong> Usuários Profissionais podem aderir ao Programa Apoiador Científico, de participação voluntária e gratuita, regido pelo Termo de Apoiador Científico, que integra estes Termos por referência e prevalece, quanto às matérias que disciplina, em caso de conflito.</p>
            <p><strong>12.2. Forma da adesão.</strong> A adesão se dá por aceite eletrônico do Termo, do mesmo modo que o aceite destes Termos de Uso. Registramos a data, a hora, o endereço IP e a versão do documento aceito. Não é gerado nem armazenado documento em formato de arquivo contendo os dados pessoais do Apoiador.</p>
            <p><strong>12.3.</strong> A adesão não gera vínculo empregatício, societário ou de prestação de serviços, nem confere ao Apoiador poder de representação da INNOVA.</p>
            <p><strong>12.4.</strong> O Apoiador pode encerrar a adesão a qualquer tempo, na forma do Termo próprio.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">13. Condutas vedadas</h2>
            <p>Além do previsto nas cláusulas 5, 6, 8 e 10, é vedado ao Usuário:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>utilizar o Aplicativo para finalidade ilícita;</li>
              <li>praticar engenharia reversa, descompilação ou tentativa de acesso ao código-fonte;</li>
              <li>interferir na integridade, na segurança ou no desempenho do Aplicativo, de seus servidores ou redes;</li>
              <li>inserir ou transmitir código malicioso;</li>
              <li>coletar ou extrair dados de outros Usuários, por qualquer meio, inclusive automatizado;</li>
              <li>criar conta em nome de terceiro ou mediante informação falsa;</li>
              <li>utilizar o Aplicativo para oferta comercial ou captação de clientela.</li>
            </ol>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">14. Suspensão e encerramento</h2>
            <p><strong>14.1.</strong> Podemos suspender ou encerrar o acesso em caso de violação destes Termos, da Política de Privacidade ou da legislação aplicável, mediante comunicação ao Usuário e com indicação do motivo, ressalvadas as hipóteses de risco iminente a criança ou adolescente, em que a medida pode ser imediata.</p>
            <p><strong>14.2.</strong> Você pode, a qualquer tempo, deixar de utilizar o Aplicativo e solicitar a exclusão de sua conta. Os dados são eliminados em até 90 (noventa) dias do deferimento do pedido, ressalvadas as hipóteses de retenção descritas na Política de Privacidade.</p>
            <p><strong>14.3.</strong> O encerramento não afeta as obrigações constituídas antes dele nem as cláusulas que, por sua natureza, devam subsistir.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">15. Disponibilidade e responsabilidade</h2>
            <p><strong>15.1.</strong> Empregamos esforços para manter o Aplicativo disponível e seguro, mas ele pode sofrer interrupções para manutenção, atualização ou por causas alheias ao nosso controle.</p>
            <p><strong>15.2.</strong> Não respondemos por: (a) decisão de saúde tomada com base em conteúdo do Aplicativo, sem orientação de profissional habilitado; (b) conteúdo publicado por outros Usuários; (c) atos de Colaborador do Diário convidado pelo Usuário Responsável; (d) falha de conexão, de dispositivo ou de sistema operacional do Usuário; (e) caso fortuito ou força maior.</p>
            <p><strong>15.3.</strong> As limitações desta cláusula não afastam a responsabilidade prevista em normas de ordem pública, notadamente os arts. 12 a 14 da Lei nº 8.078/1990, nem se aplicam a hipóteses de dolo ou culpa grave.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">16. Alterações</h2>
            <p><strong>16.1.</strong> Estes Termos podem ser atualizados. Alterações que ampliem obrigações ou restrinjam direitos do Usuário serão comunicadas por aviso no Aplicativo e por e-mail, com antecedência mínima de 30 (trinta) dias. Alterações corretivas, favoráveis ao Usuário ou determinadas por lei, decisão judicial ou ato de autoridade competente produzem efeito imediato, com comunicação na data da publicação.</p>
            <p><strong>16.2.</strong> Se Você não concordar com a nova versão, poderá encerrar a conta e solicitar a exclusão dos dados, na forma da Política de Privacidade.</p>
            <p><strong>16.3.</strong> Manteremos disponível o histórico de versões.</p>
            <p><strong>16.4. Disposição transitória.</strong> Esta Versão 2.0 entra em vigor na data de sua publicação, com comunicação por aviso no Aplicativo e por e-mail nessa mesma data. A antecedência prevista na cláusula 16.1 aplica-se às alterações posteriores a esta versão. O prazo de eliminação da cláusula 8.3 passa a produzir efeitos 30 (trinta) dias após a publicação.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">17. Disposições gerais</h2>
            <p><strong>17.1.</strong> A invalidade de qualquer disposição não prejudica as demais.</p>
            <p><strong>17.2.</strong> A tolerância quanto ao descumprimento não implica renúncia ou novação.</p>
            <p><strong>17.3.</strong> Estes Termos são regidos pela lei brasileira.</p>

            <h2 className="text-xl font-bold text-vap-dark mt-8 mb-4">18. Contato</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Atendimento geral: <strong>comunicacao@vap-app.com.br</strong></li>
              <li>Encarregado pelo Tratamento de Dados Pessoais (DPO): Kauê Cavalcante Wanderley de Melo — <strong>dpo@vap-app.com.br</strong></li>
              <li>INNOVA DIGITAL LTDA. — CNPJ 61.674.924/0001-68 — Av. Fernandes Lima, nº 08, Ed. Centenário Plaza Center, sala 406, Farol, Maceió/AL, CEP 57.050-000.</li>
            </ul>

            <p className="text-sm text-vap-gray mt-10 pt-6 border-t border-gray-100">Versão 2.0 — 10 de agosto de 2026.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

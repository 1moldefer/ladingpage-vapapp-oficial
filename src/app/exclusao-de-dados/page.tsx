"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ChevronLeft,
  Trash2,
  Shield,
  Mail,
  CheckCircle,
  AlertCircle,
  Clock,
  FileText,
  User,
  Database,
  XCircle
} from "lucide-react";

export default function ExclusaoDeDadosClient() {
  const emailSubject = "Solicitação de Exclusão de Conta VapApp";
  const emailBody = `Prezado(a) Encarregado de Dados,

Solicito a exclusão completa da minha conta e todos os dados associados no aplicativo VapApp - Via Aérea Pediátrica, conforme meu direito garantido pela LGPD (Art. 18, VI).

DADOS PARA IDENTIFICAÇÃO:
Nome completo: [PREENCHER SEU NOME]
Email cadastrado: [PREENCHER SEU EMAIL]
Telefone: [PREENCHER SEU TELEFONE - OPCIONAL]

CONFIRMAÇÃO:
Confirmo que solicito a exclusão completa e irreversível da minha conta e todos os dados pessoais associados ao VapApp, incluindo dados de saúde das crianças cadastradas.

Estou ciente de que:
- Esta ação é irreversível
- Não poderei recuperar os dados após a exclusão
- Receberei confirmação por email em até 15 dias úteis

Atenciosamente,
[SEU NOME]`;

  const mailtoLink = `mailto:dpo@vap-app.com.br?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 section-padding bg-white min-h-screen">
        <div className="container-max mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-vap-teal hover:text-vap-teal-dark mb-8 transition-colors font-medium"
          >
            <ChevronLeft size={20} />
            Voltar para o início
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-vap-dark mb-4 flex items-center gap-3">
              <Trash2 className="text-vap-teal" size={32} />
              Exclusão de Conta e Dados
            </h1>
            <p className="text-lg text-vap-gray mb-6">
              VapApp - Via Aérea Pediátrica
            </p>
            <div className="text-vap-dark/80 leading-relaxed space-y-4">
              <p>
                Conforme a <strong>Lei Geral de Proteção de Dados (LGPD - Art. 18, VI)</strong>, você tem o direito de solicitar a exclusão completa da sua conta e de todos os dados pessoais armazenados em nosso aplicativo. Estamos aqui para garantir que esse processo seja simples, transparente e respeitoso.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Seção: Seus Direitos */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <Shield className="text-vap-teal" size={24} />
                Seus Direitos de Privacidade
              </h2>
              <div className="text-vap-dark/80 leading-relaxed space-y-4">
                <p>
                  De acordo com a LGPD, você possui o <strong>direito à eliminação dos dados pessoais</strong> tratados com o seu consentimento. Respeitamos profundamente sua privacidade e garantimos que sua solicitação será atendida com total confidencialidade.
                </p>
                <div className="bg-vap-light/50 border-l-4 border-vap-teal p-6 rounded-r-2xl mt-4">
                  <h4 className="font-bold text-vap-dark mb-2">O que isso significa?</h4>
                  <p>
                    Você pode, a qualquer momento, solicitar que todos os seus dados pessoais e os dados de saúde das crianças sob sua responsabilidade sejam permanentemente excluídos de nossos sistemas. Esta é uma ação <strong>irreversível</strong> e você tem total controle sobre ela.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção: Como Solicitar */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <Mail className="text-vap-teal" size={24} />
                Como Solicitar a Exclusão
              </h2>
              <p className="text-vap-dark/80 mb-6">
                Siga os passos abaixo para solicitar a exclusão da sua conta:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-vap-teal text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-vap-dark mb-2">Envie um Email</h3>
                    <p className="text-sm text-vap-gray">Envie sua solicitação para: <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="text-vap-teal hover:underline font-medium">dpo@vap-app.com.br</a></p>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-vap-teal text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-vap-dark mb-2">Use o Assunto Correto</h3>
                    <p className="text-sm text-vap-gray"><strong>Assunto:</strong> &ldquo;Solicitação de Exclusão de Conta VapApp&rdquo;</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-vap-teal text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-vap-dark mb-2">Informe Seus Dados</h3>
                    <ul className="text-sm text-vap-gray space-y-1 list-disc pl-4 mt-2">
                      <li><strong>Nome completo</strong></li>
                      <li><strong>Email cadastrado</strong> no aplicativo</li>
                      <li><strong>Telefone cadastrado</strong> (opcional)</li>
                      <li><strong>Confirmação:</strong> &ldquo;Solicito a exclusão...&rdquo;</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-vap-teal text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-vap-dark mb-2">Aguarde a Confirmação</h3>
                    <p className="text-sm text-vap-gray">Processaremos sua solicitação em <strong>até 15 dias úteis</strong> e enviaremos uma confirmação por email.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-vap-teal hover:bg-vap-teal-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Mail size={20} />
                  Solicitar Exclusão por Email
                </a>
                <p className="text-sm text-vap-gray mt-4">
                  O botão acima tentará abrir seu aplicativo de email. Se não funcionar, envie manualmente para <strong>dpo@vap-app.com.br</strong>
                </p>
              </div>
            </section>

            {/* Seção: O que Será Excluído */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <Trash2 className="text-vap-teal" size={24} />
                O que Será Excluído
              </h2>
              <p className="text-vap-dark/80 mb-6">
                Ao solicitar a exclusão, os seguintes dados serão <strong>permanentemente removidos</strong> de nossos sistemas:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="bg-vap-light/30 p-5 rounded-2xl">
                  <User className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Conta de Autenticação</h4>
                  <p className="text-xs text-vap-gray">Login, senha e credenciais de acesso</p>
                </div>
                <div className="bg-vap-light/30 p-5 rounded-2xl">
                  <FileText className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Dados Pessoais</h4>
                  <p className="text-xs text-vap-gray">Nome, email, telefone, CPF, endereço, foto</p>
                </div>
                <div className="bg-vap-light/30 p-5 rounded-2xl">
                  <Database className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Dados de Saúde</h4>
                  <p className="text-xs text-vap-gray">Histórico, traqueostomia, internações, medicamentos</p>
                </div>
                <div className="bg-vap-light/30 p-5 rounded-2xl">
                  <Mail className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Interações</h4>
                  <p className="text-xs text-vap-gray">Mensagens da comunidade, reações, comentários</p>
                </div>
                <div className="bg-vap-light/30 p-5 rounded-2xl">
                  <CheckCircle className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Dispositivos</h4>
                  <p className="text-xs text-vap-gray">Tokens de autenticação, sessões ativas</p>
                </div>
                <div className="bg-vap-light/30 p-5 rounded-2xl">
                  <FileText className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Fotos e Documentos</h4>
                  <p className="text-xs text-vap-gray">Todos os arquivos enviados por você</p>
                </div>
              </div>
            </section>

            {/* Seção: O que Pode Ser Mantido */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <AlertCircle className="text-vap-teal" size={24} />
                O que Pode Ser Mantido (Legal)
              </h2>
              <p className="text-vap-dark/80 mb-6">
                Por questões de <strong>conformidade legal e segurança</strong>, alguns dados podem ser retidos de forma <strong>anonimizada</strong> ou por exigência legal:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                  <Clock className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1 text-sm">Logs de Auditoria e Segurança</h4>
                    <p className="text-sm text-amber-800/80">Logs de acesso e auditoria são anonimizados e mantidos por <strong>90 dias</strong> para conformidade com requisitos de segurança.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                  <Database className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1 text-sm">Dados Estatísticos Agregados</h4>
                    <p className="text-sm text-amber-800/80">Dados anonimizados e agregados podem ser mantidos para análises estatísticas, pesquisas e melhoria do aplicativo.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                  <FileText className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1 text-sm">Registros Financeiros</h4>
                    <p className="text-sm text-amber-800/80">Se houver transações (marketplace), registros contábeis devem ser mantidos por <strong>5 anos</strong> conforme legislação fiscal.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção: Informações Importantes */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <AlertCircle className="text-vap-teal" size={24} />
                Informações Importantes
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 p-5 bg-red-50 rounded-2xl border border-red-100">
                  <XCircle className="text-red-500 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-red-900 mb-1 text-sm">A Exclusão é Irreversível</h4>
                    <p className="text-xs text-red-800/80">Uma vez processada, a exclusão <strong>não pode ser desfeita</strong>. Todos os dados serão permanentemente removidos.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-5 bg-red-50 rounded-2xl border border-red-100">
                  <Database className="text-red-500 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-red-900 mb-1 text-sm">Não Será Possível Recuperar</h4>
                    <p className="text-xs text-red-800/80">Após a exclusão, você <strong>não poderá recuperar</strong> nenhum histórico ou documento previamente armazenado.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-5 bg-green-50 rounded-2xl border border-green-100">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 mb-1 text-sm">Você Pode Criar Nova Conta</h4>
                    <p className="text-xs text-green-800/80">No futuro, você poderá criar uma nova conta, mas ela começará do zero, sem qualquer histórico anterior.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <Clock className="text-blue-500 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1 text-sm">Prazo de Processamento</h4>
                    <p className="text-xs text-blue-800/80">Sua solicitação será processada em <strong>até 15 dias úteis</strong>. Você receberá uma confirmação por email.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção: Contato */}
            <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mt-12">
              <h2 className="text-xl font-bold text-vap-dark mb-6 flex items-center gap-2">
                <Mail className="text-vap-gray" size={24} />
                Contato do Encarregado de Dados (DPO)
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-sm text-vap-dark/80 space-y-2">
                  <p><strong>Nome:</strong> Kauê Cavalcante Wanderley de Melo</p>
                  <p><strong>Email:</strong> <a href="mailto:dpo@vap-app.com.br" className="text-vap-teal hover:underline">dpo@vap-app.com.br</a></p>
                  <p><strong>Desenvolvedor:</strong> INNOVA DIGITAL LTDA.</p>
                  <p><strong>CNPJ:</strong> 61.674.924/0001-68</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-vap-dark hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Mail size={18} />
                    Enviar Solicitação
                  </a>
                  <Link
                    href="/politica-de-privacidade"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-vap-dark px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Shield size={18} />
                    Ver Política de Privacidade
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

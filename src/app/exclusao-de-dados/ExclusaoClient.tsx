"use client";

import { useState } from "react";
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
  XCircle,
  Smartphone,
  Copy,
  Check,
  MessageSquare,
  AlertTriangle,
  KeyRound,
  ExternalLink,
} from "lucide-react";

export default function ExclusaoClient() {
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailSubject = "Exclusão de conta VapApp";
  const emailBody = `Solicito a exclusão da minha conta e dos meus dados.

Nome completo: [PREENCHA SEU NOME COMPLETO]
E-mail cadastrado: [PREENCHA SEU E-MAIL CADASTRADO NO VAPAPP]`;

  const mailtoHref = `mailto:dpo@vap-app.com.br?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const copyToClipboard = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-vap-dark mb-4 flex items-center gap-3">
              <Trash2 className="text-vap-teal" size={32} />
              Excluir sua conta e seus dados do VapApp
            </h1>
            <p className="text-lg text-vap-gray mb-6">
              VapApp — Via Aérea Pediátrica
            </p>
            <div className="text-vap-dark/80 leading-relaxed text-base md:text-lg bg-vap-light/30 border-l-4 border-vap-teal p-6 rounded-r-2xl">
              <p>
                Você pode pedir a exclusão da sua conta e dos seus dados a qualquer momento. É um direito garantido pela <strong>Lei Geral de Proteção de Dados (LGPD, art. 18, VI)</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Seção 1: Duas formas de pedir */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-6 flex items-center gap-2">
                <Shield className="text-vap-teal" size={24} />
                Duas formas de pedir
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* 1. Pelo aplicativo */}
                <div className="bg-white border-2 border-vap-teal/20 shadow-sm hover:border-vap-teal/50 transition-colors rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-vap-teal text-white flex items-center justify-center font-bold flex-shrink-0">
                        <Smartphone size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-vap-teal">
                          Opção 1 (Recomendada)
                        </span>
                        <h3 className="font-bold text-vap-dark text-lg">
                          Pelo aplicativo (o caminho mais rápido)
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-vap-dark/80 leading-relaxed">
                      Abra o VapApp, vá em <strong>Perfil</strong> e toque em <strong>Excluir minha conta</strong>. O pedido fica registrado na hora.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-vap-teal">
                    <CheckCircle size={16} />
                    Registro imediato e automatizado
                  </div>
                </div>

                {/* 2. Por e-mail */}
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-vap-dark text-white flex items-center justify-center font-bold flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-vap-gray">
                          Opção 2
                        </span>
                        <h3 className="font-bold text-vap-dark text-lg">
                          Por e-mail, se você não consegue entrar no aplicativo
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-vap-dark/80 leading-relaxed mb-3">
                      Escreva para <strong className="text-vap-teal">dpo@vap-app.com.br</strong>, com o assunto <strong>&quot;Exclusão de conta VapApp&quot;</strong>, informando:
                    </p>
                    <ul className="text-sm text-vap-dark/80 space-y-1.5 list-disc pl-5">
                      <li>o seu <strong>nome completo</strong>;</li>
                      <li>o <strong>e-mail cadastrado</strong> no aplicativo;</li>
                      <li>a frase: <em>&quot;Solicito a exclusão da minha conta e dos meus dados.&quot;</em></li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-vap-teal hover:underline"
                    >
                      <ExternalLink size={14} />
                      Abrir aplicativo de e-mail pronto
                    </a>
                  </div>
                </div>
              </div>

              {/* Assistente de E-mail: Assunto e Corpo */}
              <div className="mt-6 bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-6">
                <h4 className="font-bold text-vap-dark mb-4 flex items-center gap-2 text-base">
                  <Mail className="text-vap-teal" size={18} />
                  Modelo para envio por e-mail
                </h4>

                <div className="space-y-4">
                  {/* Assunto */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-vap-gray mb-1.5">
                      <span className="font-semibold uppercase tracking-wider">Assunto do E-mail</span>
                      <button
                        onClick={() => copyToClipboard(emailSubject, setCopiedSubject)}
                        className="inline-flex items-center gap-1 text-vap-teal hover:text-vap-teal-dark font-medium transition-colors"
                      >
                        {copiedSubject ? <Check size={14} /> : <Copy size={14} />}
                        {copiedSubject ? "Copiado!" : "Copiar assunto"}
                      </button>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 text-sm font-semibold text-vap-dark">
                      {emailSubject}
                    </div>
                  </div>

                  {/* Corpo do e-mail */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-vap-gray mb-1.5">
                      <span className="font-semibold uppercase tracking-wider">Mensagem (Copie e preencha)</span>
                      <button
                        onClick={() => copyToClipboard(emailBody, setCopiedBody)}
                        className="inline-flex items-center gap-1 text-vap-teal hover:text-vap-teal-dark font-medium transition-colors"
                      >
                        {copiedBody ? <Check size={14} /> : <Copy size={14} />}
                        {copiedBody ? "Copiado!" : "Copiar mensagem"}
                      </button>
                    </div>
                    <pre className="bg-white p-4 rounded-xl border border-gray-200 text-sm text-vap-dark/80 font-mono whitespace-pre-wrap break-words">
                      {emailBody}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Box de confirmação de identidade */}
              <div className="mt-6 bg-amber-50/70 border border-amber-200 p-6 rounded-2xl flex gap-4 items-start">
                <Shield className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div className="text-sm leading-relaxed text-amber-950">
                  <h4 className="font-bold text-base mb-1 text-amber-900">
                    Antes de apagar, confirmamos que o pedido é seu.
                  </h4>
                  <p>
                    Como a conta guarda dados de saúde de uma criança, não apagamos nada só porque alguém pediu por e-mail. Podemos pedir alguma informação que só você sabe e confirmar pelo telefone cadastrado na conta. Isso protege você de alguém que tente apagar a sua conta no seu lugar.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 2: Prazos */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-6 flex items-center gap-2">
                <Clock className="text-vap-teal" size={24} />
                Prazos
              </h2>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="bg-vap-light/40 border border-vap-teal/20 p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-vap-teal text-white flex items-center justify-center font-bold mb-3 text-sm">
                    15d
                  </div>
                  <h4 className="font-bold text-vap-dark mb-1 text-base">Resposta inicial</h4>
                  <p className="text-sm text-vap-dark/80">
                    <strong>Respondemos em até 15 dias corridos</strong> a partir do pedido.
                  </p>
                </div>

                <div className="bg-vap-light/40 border border-vap-teal/20 p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-vap-teal text-white flex items-center justify-center font-bold mb-3 text-sm">
                    90d
                  </div>
                  <h4 className="font-bold text-vap-dark mb-1 text-base">Eliminação final</h4>
                  <p className="text-sm text-vap-dark/80">
                    <strong>A eliminação se conclui em até 90 dias.</strong>
                  </p>
                </div>

                <div className="bg-vap-light/40 border border-vap-teal/20 p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-vap-teal text-white flex items-center justify-center font-bold mb-3 text-sm">
                    <CheckCircle size={18} />
                  </div>
                  <h4 className="font-bold text-vap-dark mb-1 text-base">Notificação</h4>
                  <p className="text-sm text-vap-dark/80">
                    Você recebe um e-mail quando a exclusão for concluída.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 3: O que é apagado */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <Trash2 className="text-vap-teal" size={24} />
                O que é apagado
              </h2>
              <p className="text-vap-dark/80 mb-6">
                Ao concluir o procedimento, os seguintes registros são permanentemente excluídos:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <User className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">A conta</h4>
                  <p className="text-xs text-vap-gray leading-relaxed">Login, senha e sessões.</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <FileText className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Seus dados de cadastro</h4>
                  <p className="text-xs text-vap-gray leading-relaxed">Nome, e-mail, telefone, endereço e foto de perfil.</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <Database className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Os dados da criança</h4>
                  <p className="text-xs text-vap-gray leading-relaxed">O cadastro, o Diário de Eventos e a <strong>Carteirinha da Traqueo</strong>.</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <MessageSquare className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">O que você escreveu</h4>
                  <p className="text-xs text-vap-gray leading-relaxed">Mensagens da Comunidade e conversas com o Dr. VAP.</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <CheckCircle className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Programa Apoiador Científico</h4>
                  <p className="text-xs text-vap-gray leading-relaxed">Se você é profissional do Programa Apoiador Científico: as respostas atuais do questionário.</p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <Smartphone className="text-vap-teal mb-3" size={24} />
                  <h4 className="font-bold text-vap-dark mb-1 text-sm">Os aparelhos vinculados</h4>
                  <p className="text-xs text-vap-gray leading-relaxed">Inclusive a cópia da carteirinha guardada no celular, quando ele se conectar de novo.</p>
                </div>
              </div>
            </section>

            {/* Seção 4: O que fica guardado, e por quê */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-3 flex items-center gap-2">
                <Shield className="text-vap-teal" size={24} />
                O que fica guardado, e por quê
              </h2>
              <p className="text-vap-dark/80 mb-6 leading-relaxed">
                A lei exige que alguns registros fiquem guardados mesmo depois da exclusão. <strong>Nenhum deles é usado para outra coisa</strong>:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <FileText className="text-vap-teal flex-shrink-0 mt-1" size={22} />
                  <div className="text-sm text-vap-dark/80 leading-relaxed">
                    <h4 className="font-bold text-vap-dark mb-1 text-sm">
                      Registro de consentimento e aceite dos documentos
                    </h4>
                    <p>
                      O registro de que você aceitou os documentos (os Termos, a Política e, se for o caso, o Termo de Apoiador): a versão, a data e um código que prova o texto. <strong>Fica 5 anos, sem o seu nome nem o CPF por extenso.</strong> É a prova de que o consentimento foi colhido.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <Clock className="text-vap-teal flex-shrink-0 mt-1" size={22} />
                  <div className="text-sm text-vap-dark/80 leading-relaxed">
                    <h4 className="font-bold text-vap-dark mb-1 text-sm">
                      Registro do pedido de exclusão
                    </h4>
                    <p>
                      O registro do pedido de exclusão e de que ele foi cumprido: <strong>5 anos</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <Database className="text-vap-teal flex-shrink-0 mt-1" size={22} />
                  <div className="text-sm text-vap-dark/80 leading-relaxed">
                    <h4 className="font-bold text-vap-dark mb-1 text-sm">
                      Registros de conexão e acesso
                    </h4>
                    <p>
                      Registros de acesso (IP, data e hora): <strong>6 meses</strong>, como manda o Marco Civil da Internet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <CheckCircle className="text-vap-teal flex-shrink-0 mt-1" size={22} />
                  <div className="text-sm text-vap-dark/80 leading-relaxed">
                    <h4 className="font-bold text-vap-dark mb-1 text-sm">
                      Programa Apoiador Científico (respostas de aceite)
                    </h4>
                    <p>
                      Se você era profissional do Programa Apoiador: as respostas do questionário dadas no dia de cada aceite, junto com o registro do aceite, por <strong>5 anos</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <Shield className="text-vap-teal flex-shrink-0 mt-1" size={22} />
                  <div className="text-sm text-vap-dark/80 leading-relaxed">
                    <h4 className="font-bold text-vap-dark mb-1 text-sm">
                      Métricas e estatísticas anonimizadas
                    </h4>
                    <p>
                      Números de uso sem identificação (por exemplo, quantas pessoas abriram um podcast), que não permitem saber quem é você.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 5: O que não conseguimos apagar */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <AlertTriangle className="text-amber-600" size={24} />
                O que não conseguimos apagar
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200 flex gap-3">
                  <FileText className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-amber-950 mb-1 text-sm">Arquivos já compartilhados</h4>
                    <p className="text-xs text-amber-900/80 leading-relaxed">
                      <strong>Um PDF da carteirinha que você já enviou a alguém.</strong> Depois de enviado, o arquivo sai do nosso alcance.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200 flex gap-3">
                  <MessageSquare className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-amber-950 mb-1 text-sm">Cópias locais salvas por terceiros</h4>
                    <p className="text-xs text-amber-900/80 leading-relaxed">
                      <strong>Mensagens da Comunidade</strong> que outras pessoas tenham salvado no próprio celular.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 6: Antes de pedir */}
            <section>
              <h2 className="text-2xl font-bold text-vap-dark mb-4 flex items-center gap-2">
                <AlertCircle className="text-vap-teal" size={24} />
                Antes de pedir
              </h2>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-5 bg-red-50 rounded-2xl border border-red-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-red-700 font-bold mb-2 text-sm">
                      <XCircle size={18} />
                      Ação definitiva
                    </div>
                    <p className="text-xs text-red-900/80 leading-relaxed">
                      <strong>A exclusão não pode ser desfeita.</strong> Os dados apagados não voltam.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-700 font-bold mb-2 text-sm">
                      <KeyRound size={18} />
                      Recuperação de acesso
                    </div>
                    <p className="text-xs text-blue-900/80 leading-relaxed">
                      <strong>Esqueceu a senha?</strong> Você não precisa excluir a conta: use <strong>&quot;Esqueci minha senha&quot;</strong> no aplicativo.
                    </p>
                    <p className="text-xs text-blue-900/80 leading-relaxed mt-2">
                      <strong>Perdeu o acesso ao e-mail?</strong> Escreva para <span className="font-semibold">dpo@vap-app.com.br</span>: depois de confirmar que é você, podemos trocar o e-mail da conta, e você não perde nada.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2 text-sm">
                      <CheckCircle size={18} />
                      Novo cadastro
                    </div>
                    <p className="text-xs text-emerald-900/80 leading-relaxed">
                      Você pode criar uma conta nova depois, quando quiser.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 7: Contato */}
            <section className="bg-gray-50 rounded-3xl p-8 border border-gray-200 mt-12">
              <h2 className="text-xl font-bold text-vap-dark mb-6 flex items-center gap-2">
                <Mail className="text-vap-gray" size={24} />
                Contato
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-sm text-vap-dark/80 space-y-2">
                  <p>
                    <strong>Encarregado de Proteção de Dados:</strong> Kauê Cavalcante Wanderley de Melo —{" "}
                    <a href="mailto:dpo@vap-app.com.br" className="text-vap-teal hover:underline font-semibold">
                      dpo@vap-app.com.br
                    </a>
                  </p>
                  <p>
                    <strong>INNOVA DIGITAL LTDA.</strong> — CNPJ 61.674.924/0001-68
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <button
                    onClick={() => copyToClipboard("dpo@vap-app.com.br", setCopiedEmail)}
                    className="inline-flex items-center justify-center gap-2 bg-vap-dark hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check size={18} /> : <Mail size={18} />}
                    {copiedEmail ? "E-mail copiado!" : "Copiar dpo@vap-app.com.br"}
                  </button>
                  <Link
                    href="/politica-de-privacidade"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-100 text-vap-dark px-6 py-3 rounded-xl font-medium transition-colors"
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

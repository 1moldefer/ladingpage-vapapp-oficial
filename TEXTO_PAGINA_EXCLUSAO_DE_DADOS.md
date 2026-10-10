# O texto novo da página de exclusão de dados (vap-app.com.br/exclusao-de-dados)

**Escrito pelo revisor do app em 03/10/2026**, para quem mantém o `vap-landing`
(`src/app/exclusao-de-dados/ExclusaoClient.tsx`). A Google Play exige esta página para todo app
com conta, e olha o texto: ela tem de descrever o que o app **faz hoje**.

**A fonte de cada frase é a Política de Privacidade 2.1** (`docs/juridico/02_POLITICA_DE_PRIVACIDADE_v2.1.md`,
seções 12 e 15). Onde esta página e a Política divergirem, a Política vale, e a página está
errada.

## O que estava errado no texto de fevereiro, medido

| texto de hoje | o certo | fonte |
|---|---|---|
| *"processaremos em até **15 dias úteis**"* | resposta em até **15 dias corridos**; a eliminação se conclui em até **90 dias** | Pol. 15.2 e 12 |
| *"Registros Financeiros"* entre o que fica guardado | **sai**: o marketplace saiu do app em abril | — |
| *"Fotos e Documentos — todos os arquivos enviados"* | o app só recebe a **foto de perfil** | `authService` (único upload) |
| não cita a **Carteirinha da Traqueo** nem o **Programa Apoiador** | entram nas duas listas | Pol. 12, 6.8, 6.4.1 |
| não diz que o **registro do aceite** fica guardado | fica, **5 anos**, sem nome nem CPF por extenso | Pol. 8.4 e 12 |
| não diz que dá para excluir **pelo próprio app** | dá: Perfil → Excluir minha conta | `dataDeletionService` |
| não diz que **confirmamos a identidade** de quem pede por e-mail | confirmamos, antes de apagar qualquer coisa | prática da equipe |

---

## O texto, seção por seção (substitui o de hoje)

### Título
**Excluir sua conta e seus dados do VapApp**

### Abertura
Você pode pedir a exclusão da sua conta e dos seus dados a qualquer momento. É um direito
garantido pela Lei Geral de Proteção de Dados (LGPD, art. 18, VI).

### Duas formas de pedir

**1. Pelo aplicativo (o caminho mais rápido).** Abra o VapApp, vá em **Perfil** e toque em
**Excluir minha conta**. O pedido fica registrado na hora.

**2. Por e-mail, se você não consegue entrar no aplicativo.** Escreva para
**dpo@vap-app.com.br**, com o assunto **"Exclusão de conta VapApp"**, informando:
- o seu **nome completo**;
- o **e-mail cadastrado** no aplicativo;
- a frase: *"Solicito a exclusão da minha conta e dos meus dados."*

**Antes de apagar, confirmamos que o pedido é seu.** Como a conta guarda dados de saúde de uma
criança, não apagamos nada só porque alguém pediu por e-mail. Podemos pedir alguma informação
que só você sabe e confirmar pelo telefone cadastrado na conta. Isso protege você de alguém que
tente apagar a sua conta no seu lugar.

### Prazos
- **Respondemos em até 15 dias corridos** a partir do pedido.
- **A eliminação se conclui em até 90 dias.**
- Você recebe um e-mail quando a exclusão for concluída.

### O que é apagado
- **A conta:** login, senha e sessões.
- **Seus dados de cadastro:** nome, e-mail, telefone, endereço e foto de perfil.
- **Os dados da criança:** o cadastro, o Diário de Eventos e a **Carteirinha da Traqueo**.
- **O que você escreveu:** mensagens da Comunidade e conversas com o Dr. VAP.
- **Se você é profissional do Programa Apoiador Científico:** as respostas atuais do
  questionário.
- **Os aparelhos vinculados**, inclusive a cópia da carteirinha guardada no celular, quando ele
  se conectar de novo.

### O que fica guardado, e por quê
A lei exige que alguns registros fiquem guardados mesmo depois da exclusão. **Nenhum deles é
usado para outra coisa**:
- **O registro de que você aceitou os documentos** (os Termos, a Política e, se for o caso, o
  Termo de Apoiador): a versão, a data e um código que prova o texto. **Fica 5 anos, sem o seu
  nome nem o CPF por extenso.** É a prova de que o consentimento foi colhido.
- **O registro do pedido de exclusão e de que ele foi cumprido:** 5 anos.
- **Registros de acesso** (IP, data e hora): 6 meses, como manda o Marco Civil da Internet.
- **Se você era profissional do Programa Apoiador:** as respostas do questionário dadas no dia
  de cada aceite, junto com o registro do aceite, por 5 anos.
- **Números de uso sem identificação** (por exemplo, quantas pessoas abriram um podcast), que
  não permitem saber quem é você.

### O que não conseguimos apagar
- **Um PDF da carteirinha que você já enviou a alguém.** Depois de enviado, o arquivo sai do
  nosso alcance.
- **Mensagens da Comunidade** que outras pessoas tenham salvado no próprio celular.

### Antes de pedir
- **A exclusão não pode ser desfeita.** Os dados apagados não voltam.
- **Esqueceu a senha?** Você não precisa excluir a conta: use **"Esqueci minha senha"** no
  aplicativo. **Perdeu o acesso ao e-mail?** Escreva para **dpo@vap-app.com.br**: depois de
  confirmar que é você, podemos trocar o e-mail da conta, e você não perde nada.
- Você pode criar uma conta nova depois, quando quiser.

### Contato
**Encarregado de Proteção de Dados:** Kauê Cavalcante Wanderley de Melo —
**dpo@vap-app.com.br**
INNOVA DIGITAL LTDA. — CNPJ 61.674.924/0001-68

---

## Para quem for implementar

- Mantenha o layout e os ícones; troque **só o texto** e a estrutura das seções acima.
- O `metadata` da página: troque *"VAP-App"* por **"VapApp"**, que é o nome do app nas lojas.
- Depois de publicar, mande o link para o dono conferir no celular, e **confira se este
  endereço está declarado** na *Segurança dos dados* da Play.

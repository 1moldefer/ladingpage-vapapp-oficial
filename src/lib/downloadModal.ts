/**
 * Abre o modal de download do VAP App (App Store + Google Play).
 * Pode ser chamado de qualquer componente.
 */
export function openDownloadModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openDownloadModal"));
  }
}

/**
 * Abre o modal de orientação para usuários no Instagram + iOS.
 * Instrui o usuário a abrir a página no Safari.
 */
export function openInstagramIOSModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openInstagramIOSModal"));
  }
}

/**
 * Gambiarra: Tenta forçar a abertura da App Store via itms-apps.
 * Se falhar (o usuário continuar na página após 2.5s), mostra o modal de instruções.
 */
export function tryInstagramHack() {
  if (typeof window !== "undefined") {
    const url = "itms-apps://apps.apple.com/br/app/vapapp/id6758860501";

    // Tentativa 1: Redirecionamento normal
    window.location.href = url;

    // Tentativa 2: Tentar usar window.top.location para burlar iframes
    try {
      if (window.top) window.top.location.href = url;
    } catch (e) {
      // Ignorar erro de cross-origin
    }

    // Tentativa 3: Criar um link e simular um clique (hábito do Safari)
    const a = document.createElement("a");
    a.href = url;
    a.style.display = "none";
    // usar target _top ou _blank pode ajudar
    a.target = "_top";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Tentativa 4: Iframe invisível (força a abertura de deep links no WKWebView do iOS)
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    document.body.appendChild(iframe);

    // Se nada disso funcionar em 2.5s, mostra a tela de instruções
    setTimeout(() => {
      openInstagramIOSModal();
    }, 2500);
  }
}

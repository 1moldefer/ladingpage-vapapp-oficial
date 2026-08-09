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
    window.location.href = "itms-apps://apps.apple.com/br/app/vapapp/id6758860501";
    
    setTimeout(() => {
      openInstagramIOSModal();
    }, 2500);
  }
}

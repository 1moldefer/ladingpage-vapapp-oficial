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

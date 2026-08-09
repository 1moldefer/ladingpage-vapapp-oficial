/**
 * Abre o modal de download do VAP App (App Store + Google Play).
 * Pode ser chamado de qualquer componente.
 */
export function openDownloadModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openDownloadModal"));
  }
}

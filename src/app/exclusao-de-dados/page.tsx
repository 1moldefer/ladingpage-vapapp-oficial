import type { Metadata } from "next";
import ExclusaoClient from "./ExclusaoClient";

export const metadata: Metadata = {
  title: "Excluir sua conta e seus dados do VapApp | VapApp",
  description:
    "Você pode pedir a exclusão da sua conta e dos seus dados do VapApp a qualquer momento. Conheça as formas de solicitação pelo aplicativo ou por e-mail (LGPD, art. 18, VI).",
  openGraph: {
    title: "Excluir sua conta e seus dados do VapApp | VapApp",
    description:
      "Você pode pedir a exclusão da sua conta e dos seus dados do VapApp a qualquer momento. Conheça as formas de solicitação pelo aplicativo ou por e-mail (LGPD, art. 18, VI).",
  },
};

export default function ExclusaoDeDadosPage() {
  return <ExclusaoClient />;
}

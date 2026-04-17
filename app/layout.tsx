import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brilho da Ana | Curadoria feminina com estilo e autenticidade",
  description:
    "Landing page institucional da Brilho da Ana, boutique feminina com curadoria elegante, acessibilidade e atendimento próximo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

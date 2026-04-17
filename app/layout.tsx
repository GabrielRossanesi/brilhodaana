import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brilho da Ana | Biquínis com curadoria e estilo",
  description:
    "Curadoria feminina de biquínis e achados de praia com estilo, preço leve e atendimento próximo.",
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

import type { StaticImageData } from "next/image";
import lookBeige from "@/images/WhatsApp Image 2026-04-22 at 12.47.19.jpeg";
import lookBlue from "@/images/WhatsApp Image 2026-04-22 at 12.47.20 (1).jpeg";
import lookTerracotta from "@/images/WhatsApp Image 2026-04-22 at 12.47.20 (2).jpeg";
import lookStriped from "@/images/WhatsApp Image 2026-04-22 at 12.47.20 (3).jpeg";
import lookNeutral from "@/images/WhatsApp Image 2026-04-22 at 12.47.20 (4).jpeg";
import lookPinkSkirt from "@/images/WhatsApp Image 2026-04-22 at 12.47.20.jpeg";
import lookGreen from "@/images/WhatsApp Image 2026-04-22 at 12.47.21 (1).jpeg";
import lookShorts from "@/images/WhatsApp Image 2026-04-22 at 12.47.21 (2).jpeg";
import lookPinkDress from "@/images/WhatsApp Image 2026-04-22 at 12.47.21 (3).jpeg";
import lookRose from "@/images/WhatsApp Image 2026-04-22 at 12.47.21.jpeg";

export type FeaturedPiece = {
  name: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
};

export const brand = {
  name: "Brilho da Ana",
  eyebrow: "Brilho da Ana",
  headline: "Looks fáceis para dias reais.",
  subheadline:
    "Moda feminina leve, bonita e pronta para acompanhar sua rotina.",
  statement:
    "A Brilho da Ana é uma loja de moda feminina para quem quer se vestir bem sem complicar a rotina.",
  mission:
    "Peças atuais, atendimento direto e escolhas bonitas para você comprar com confiança.",
};

export const links = {
  whatsapp:
    "https://wa.me/5519982628023?text=Ol%C3%A1,%20quero%20conhecer%20as%20pe%C3%A7as%20da%20Brilho%20da%20Ana",
  catalog: "#pecas",
  instagram: "https://instagram.com/brilhodaana",
};

export const differentials = [
  {
    icon: "sparkle",
    title: "Escolha sem complicar",
    description:
      "Peças fáceis de combinar para resolver o look em poucos minutos.",
  },
  {
    icon: "shield",
    title: "Caimento bonito",
    description:
      "Modelagens confortáveis para você se sentir bem no dia a dia.",
  },
  {
    icon: "heart",
    title: "Atendimento direto",
    description:
      "Tire dúvidas sobre tamanho, disponibilidade e compra pelo WhatsApp.",
  },
];

export const featuredPieces: FeaturedPiece[] = [
  {
    name: "Top leve",
    subtitle: "Para o dia a dia",
    description: "Visual fácil para dias quentes.",
    image: lookBeige,
  },
  {
    name: "Vestido azul",
    subtitle: "Estampa fresh",
    description: "Leve, colorido e pronto para sair.",
    image: lookBlue,
  },
  {
    name: "Vestido terracota",
    subtitle: "Conforto feminino",
    description: "Movimento bonito com toque natural.",
    image: lookTerracotta,
  },
  {
    name: "Vestido listrado",
    subtitle: "Leveza urbana",
    description: "Uma peça única para resolver o look.",
    image: lookStriped,
  },
  {
    name: "Conjunto neutro",
    subtitle: "Praticidade",
    description: "Moderno, confortável e fácil de usar.",
    image: lookNeutral,
  },
  {
    name: "Saia estampada",
    subtitle: "Cor no look",
    description: "Uma produção leve com personalidade.",
    image: lookPinkSkirt,
  },
  {
    name: "Look verde",
    subtitle: "Verão marcante",
    description: "Fresco, solar e cheio de presença.",
    image: lookGreen,
  },
  {
    name: "Short claro",
    subtitle: "Base versátil",
    description: "Combina com tudo e deixa o visual leve.",
    image: lookShorts,
  },
  {
    name: "Vestido rosa",
    subtitle: "Delicado",
    description: "Feminino sem esforço para dias especiais.",
    image: lookPinkDress,
  },
  {
    name: "Conjunto rose",
    subtitle: "Conforto",
    description: "Uma escolha prática para entrar no clima.",
    image: lookRose,
  },
];

export const testimonials = [
  {
    quote:
      "Encontrei peças lindas e fáceis de combinar.",
    author: "Marina, cliente",
  },
  {
    quote: "Os modelos têm estilo, caimento bom e preço justo.",
    author: "Carolina, cliente",
  },
  {
    quote:
      "O atendimento me ajudou a escolher sem dúvida.",
    author: "Renata, cliente",
  },
];

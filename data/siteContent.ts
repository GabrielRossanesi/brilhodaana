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

export type HeroSlide = {
  image: StaticImageData;
  alt: string;
  position: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: lookGreen,
    alt: "Look verde da Brilho da Ana",
    position: "50% 16%",
  },
  {
    image: lookBlue,
    alt: "Vestido azul estampado da Brilho da Ana",
    position: "50% 0%",
  },
  {
    image: lookBeige,
    alt: "Top claro com short da Brilho da Ana",
    position: "50% 2%",
  },
  {
    image: lookStriped,
    alt: "Vestido listrado rose da Brilho da Ana",
    position: "50% 0%",
  },
  {
    image: lookPinkDress,
    alt: "Vestido rosa leve da Brilho da Ana",
    position: "50% 4%",
  },
];

export type FeaturedPiece = {
  name: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
};

export const brand = {
  name: "Brilho da Ana",
  eyebrow: "Brilho da Ana",
  headline: "Seu look, sem esforço.",
  subheadline:
    "Moda feminina leve para se sentir pronta.",
  statement:
    "A Brilho da Ana é uma loja de moda feminina para quem quer se vestir bem sem complicar a rotina.",
  mission:
    "Looks atuais, atendimento direto e escolhas bonitas para você comprar com confiança.",
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
    title: "Combina sem pensar muito",
    description:
      "Modelos leves para resolver a produção sem perder personalidade.",
  },
  {
    icon: "shield",
    title: "Caimento para a rotina",
    description:
      "Peças confortáveis para circular pelo dia com segurança e presença.",
  },
  {
    icon: "heart",
    title: "Compra rápida pelo WhatsApp",
    description:
      "Pergunte tamanho, disponibilidade e escolha seu look em uma conversa simples.",
  },
];

export const featuredPieces: FeaturedPiece[] = [
  {
    name: "Top solar",
    subtitle: "Base fresh",
    description: "Leve, claro e fácil de combinar.",
    image: lookBeige,
  },
  {
    name: "Vestido mar azul",
    subtitle: "Impacto leve",
    description: "Estampa marcante com movimento bonito.",
    image: lookBlue,
  },
  {
    name: "Vestido terra",
    subtitle: "Tom quente",
    description: "Presença suave para sair sem exagero.",
    image: lookTerracotta,
  },
  {
    name: "Vestido listras rose",
    subtitle: "Doce e atual",
    description: "Uma peça única com ar delicado.",
    image: lookStriped,
  },
  {
    name: "Conjunto urbano",
    subtitle: "Neutro chic",
    description: "Conforto com visual mais alinhado.",
    image: lookNeutral,
  },
  {
    name: "Saia floral pink",
    subtitle: "Cor que anima",
    description: "Para deixar o look leve e expressivo.",
    image: lookPinkSkirt,
  },
  {
    name: "Verde desejo",
    subtitle: "Presença imediata",
    description: "A cor que transforma a produção.",
    image: lookGreen,
  },
  {
    name: "Short claro",
    subtitle: "Base esperta",
    description: "Prático para compor vários momentos.",
    image: lookShorts,
  },
  {
    name: "Vestido rosa leve",
    subtitle: "Feminino fácil",
    description: "Delicado na medida para dias especiais.",
    image: lookPinkDress,
  },
  {
    name: "Conjunto rose",
    subtitle: "Mood confortável",
    description: "Maciez visual para entrar no clima.",
    image: lookRose,
  },
];

export const testimonials = [
  {
    quote:
      "Escolhi pelo WhatsApp e já consegui imaginar o look completo.",
    author: "Marina, cliente",
  },
  {
    quote: "As peças têm presença, mas continuam fáceis de usar no dia a dia.",
    author: "Carolina, cliente",
  },
  {
    quote:
      "O atendimento ajudou no tamanho e deixou a compra bem tranquila.",
    author: "Renata, cliente",
  },
];

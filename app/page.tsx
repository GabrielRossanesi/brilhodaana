import Image from "next/image";
import { IconBadge } from "@/components/IconBadge";
import { LogoMark } from "@/components/LogoMark";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  brand,
  differentials,
  featuredPieces,
  heroStats,
  links,
  processSteps,
  testimonials,
} from "@/data/siteContent";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="topo">
        <div className="hero__backdrop" aria-hidden="true" />
        <header className="site-header">
          <a href="#topo" className="brand-link" aria-label={brand.name}>
            <LogoMark />
          </a>
          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#diferenciais">Diferenciais</a>
            <a href="#marca">A marca</a>
            <a href="#pecas">Peças</a>
            <a href="#contato">Contato</a>
          </nav>
          <a
            className="button button--ghost"
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </header>

        <div className="hero__content">
          <Reveal className="hero__copy">
            <span className="eyebrow">{brand.eyebrow}</span>
            <h1>{brand.headline}</h1>
            <p>{brand.subheadline}</p>

            <div className="hero__actions">
              <a className="button" href={links.catalog}>
                Ver peças
              </a>
              <a className="button button--ghost button--light" href={links.about}>
                Conhecer a marca
              </a>
            </div>

            <div className="hero__stats" aria-label="Diferenciais da experiência">
              {heroStats.map((item) => (
                <div key={item.value} className="hero__stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero__visual" delay={140}>
            <div className="hero__image-frame">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                alt="Moda feminina em proposta editorial e sofisticada"
                width={860}
                height={1100}
                priority
              />
            </div>
            <div className="hero__note">
              <span>Seleção com olhar refinado</span>
              <p>
                Peças com presença, caimento bonito e uma curadoria que valoriza
                estilo real.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast" id="diferenciais">
        <div className="section__inner">
          <Reveal>
            <SectionHeading
              eyebrow="Mais do que seminovo"
              title="Uma seleção pensada para vestir bem, durar e representar você."
              description="A proposta da marca vai além da roupa usada: aqui, cada peça entra por afinidade estética, qualidade real e potencial de compor um closet com personalidade."
            />
          </Reveal>

          <div className="feature-grid">
            {differentials.map((item, index) => (
              <Reveal key={item.title} className="feature-card" delay={index * 90}>
                <IconBadge
                  type={item.icon as "sparkle" | "shield" | "tag" | "heart"}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="marca">
        <div className="section__inner story-grid">
          <Reveal className="story-grid__intro">
            <SectionHeading
              eyebrow="Sobre a marca"
              title="Nova vida para peças bonitas, com curadoria, delicadeza e consumo inteligente."
              description={`${brand.statement} ${brand.mission}`}
            />
          </Reveal>

          <Reveal className="story-grid__aside" delay={120}>
            <div className="story-panel">
              <span className="story-panel__label">Essência da Brilho da Ana</span>
              <p>
                Feminilidade sem excesso, elegância sem rigidez e acesso sem
                perder o encanto.
              </p>
              <a href={links.whatsapp} target="_blank" rel="noreferrer">
                Conversar sobre uma peça
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="como-funciona">
        <div className="section__inner process-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Como funciona"
              title="Uma jornada simples, refinada e pensada para deixar a compra leve."
              description="Do olhar curatorial ao atendimento final, cada etapa ajuda a traduzir confiança e praticidade em uma experiência boutique."
            />
          </Reveal>

          <div className="process-list">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} className="process-item" delay={index * 100}>
                <span className="process-item__index">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pecas">
        <div className="section__inner pieces-layout">
          <Reveal className="pieces-layout__intro">
            <SectionHeading
              eyebrow="Destaques"
              title="Uma vitrine com atmosfera de boutique, pronta para evoluir para um catálogo vivo."
              description="Os exemplos abaixo mostram como a marca pode apresentar as peças com desejo, clareza e atendimento orientado para conversão."
            />
            <a
              className="button"
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Pedir seleção no WhatsApp
            </a>
          </Reveal>

          <div className="pieces-grid">
            {featuredPieces.map((piece, index) => (
              <Reveal key={piece.name} className="piece-card" delay={index * 90}>
                <div className="piece-card__image">
                  <Image src={piece.image} alt={piece.name} width={800} height={1000} />
                </div>
                <div className="piece-card__body">
                  <span>{piece.subtitle}</span>
                  <h3>{piece.name}</h3>
                  <p>{piece.description}</p>
                  <a href={links.whatsapp} target="_blank" rel="noreferrer">
                    Tenho interesse
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast" id="confianca">
        <div className="section__inner testimonials-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Confiança"
              title="Depoimentos que reforçam o cuidado por trás de cada escolha."
              description="Textos curtos, naturais e femininos ajudam a sustentar a percepção de capricho, proximidade e credibilidade."
            />
          </Reveal>

          <div className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.author}
                className="testimonial-item"
                delay={index * 100}
              >
                <p>"{testimonial.quote}"</p>
                <span>{testimonial.author}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta" id="contato">
        <div className="section__inner">
          <Reveal className="cta-panel">
            <span className="eyebrow">Chamada final</span>
            <h2>Descubra peças que combinam com você.</h2>
            <p>
              Uma curadoria com estilo, autenticidade e preço acessível para
              mulheres que gostam de escolher bem.
            </p>
            <div className="hero__actions">
              <a
                className="button button--dark"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
              <a className="button button--ghost" href={links.catalog}>
                Ver vitrine
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <LogoMark muted />
          <p>Curadoria feminina com beleza real, autenticidade e boas escolhas.</p>
          <div className="site-footer__links">
            <a href={links.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
          <span>Copyright 2026 Brilho da Ana. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";
import { IconBadge } from "@/components/IconBadge";
import { LogoMark } from "@/components/LogoMark";
import { MobileMenu } from "@/components/MobileMenu";
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
            className="button button--ghost site-header__cta"
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <MobileMenu />
        </header>

        <div className="hero__content">
          <Reveal className="hero__copy">
            <span className="eyebrow">{brand.eyebrow}</span>
            <h1>{brand.headline}</h1>
            <p>{brand.subheadline}</p>

            <div className="hero__actions">
              <a className="button" href={links.catalog}>
                Ver novidades
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
                src="https://images.unsplash.com/photo-1770657249870-626b05295f9c?auto=format&fit=crop&w=1200&q=80"
                alt="Look feminino leve em composição de verão"
                width={860}
                height={1100}
                priority
              />
            </div>
            <div className="hero__note">
              <span>Estilo para a rotina</span>
              <p>
                Peças versáteis para montar looks leves, bonitos e prontos para
                acompanhar seus planos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast" id="diferenciais">
        <div className="section__inner">
          <Reveal>
            <SectionHeading
              eyebrow="Moda feminina"
              title="Looks versáteis para facilitar o seu dia a dia."
              description="Combine peças leves, bonitas e fáceis de usar sem complicar a rotina."
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
              title="Uma loja feminina para vestir sua rotina com leveza e personalidade."
              description={`${brand.statement} ${brand.mission}`}
            />
          </Reveal>

          <Reveal className="story-grid__aside" delay={120}>
            <div className="story-panel">
              <span className="story-panel__label">Essência da Brilho da Ana</span>
              <p>
                Moda feminina leve, prática e cheia de personalidade para
                escolher sem pressa.
              </p>
              <a href={links.whatsapp} target="_blank" rel="noreferrer">
                Conversar sobre peças
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="como-funciona">
        <div className="section__inner process-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Como comprar"
              title="Escolha seu look e fale com a gente pelo WhatsApp."
              description="A experiência é direta para você ver as novidades, tirar dúvidas e finalizar com tranquilidade."
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

      <section className="section section--pieces" id="pecas">
        <div className="section__inner pieces-layout">
          <Reveal className="pieces-layout__intro">
            <SectionHeading
              eyebrow="Vitrine"
              title="Peças versáteis para montar looks sem esforço."
              description="Destaques para o dia a dia, lazer e momentos de verão, com estilo leve e fácil de combinar."
            />
            <a
              className="button"
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Ver novidades no WhatsApp
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
              title="Comprar moda feminina pode ser simples, leve e seguro."
              description="Atendimento próximo para orientar tamanho, caimento, combinações e disponibilidade."
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
            <h2>Pronta para deixar seus looks mais fáceis?</h2>
            <p>
              Conheça as novidades da Brilho da Ana e escolha peças que combinam
              com sua rotina.
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
                Ver novidades
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <LogoMark muted />
          <p>Moda feminina leve, prática e cheia de personalidade.</p>
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

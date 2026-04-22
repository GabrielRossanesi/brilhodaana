import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LogoMark } from "@/components/LogoMark";
import { MobileMenu } from "@/components/MobileMenu";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  brand,
  differentials,
  featuredPieces,
  heroSlides,
  links,
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
            <a href="#pecas">Peças</a>
            <a href="#confianca">Confiança</a>
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
              <a
                className="button"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Quero ver no WhatsApp
              </a>
              <a className="button button--ghost button--light" href={links.catalog}>
                Explorar looks
              </a>
            </div>
          </Reveal>

          <Reveal className="hero__visual" delay={140}>
            <HeroSlideshow slides={heroSlides} />
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast" id="diferenciais">
        <div className="section__inner">
          <Reveal>
            <SectionHeading
              eyebrow="Por que funciona"
              title="Bonito sem complicar."
              description="A ideia é simples: peças atuais, fáceis de vestir e prontas para acompanhar sua rotina."
            />
          </Reveal>

          <div className="feature-grid">
            {differentials.map((item, index) => (
              <Reveal key={item.title} className="feature-card" delay={index * 90}>
                <span className="feature-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
              title="Looks com presença."
              description="Arraste, sinta o clima de cada peça e escolha a que combina com seu momento."
            />
            <a
              className="button"
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Ver novidades
            </a>
          </Reveal>

          <Reveal className="pieces-layout__carousel" delay={120}>
            <ProductCarousel items={featuredPieces} ctaHref={links.whatsapp} />
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast" id="confianca">
        <div className="section__inner testimonials-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Confiança"
              title="Compra segura."
              description={`${brand.statement} ${brand.mission}`}
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
            <span className="eyebrow">WhatsApp</span>
            <h2>Pronta para escolher o seu?</h2>
            <p>
              Chame a Brilho da Ana e receba ajuda direta para encontrar o
              look que combina com você agora.
            </p>
            <div className="hero__actions">
              <a
                className="button button--dark"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <a className="button button--ghost" href={links.catalog}>
                Rever vitrine
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <LogoMark muted />
          <p>Moda feminina leve e prática.</p>
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

      <a
        className="sticky-whatsapp"
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        Falar no WhatsApp
      </a>
    </main>
  );
}

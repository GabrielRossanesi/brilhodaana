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
            <a href="#pecas">Biquínis</a>
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
                Ver biquínis
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
                alt="Biquíni selecionado em composição de moda praia"
                width={860}
                height={1100}
                priority
              />
            </div>
            <div className="hero__note">
              <span>Carro-chefe da marca</span>
              <p>
                Biquínis pouco usados, bem cuidados e escolhidos por caimento,
                estilo e presença de verão.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast" id="diferenciais">
        <div className="section__inner">
          <Reveal>
            <SectionHeading
              eyebrow="Curadoria de moda praia"
              title="Biquínis com olhar de boutique, avaliados peça por peça."
              description="A seleção prioriza caimento, estado de conservação, acabamento e combinações que deixam a compra mais simples."
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
              title="Uma curadoria feminina para renovar o verão com beleza, cuidado e acesso."
              description={`${brand.statement} ${brand.mission}`}
            />
          </Reveal>

          <Reveal className="story-grid__aside" delay={120}>
            <div className="story-panel">
              <span className="story-panel__label">Essência da Brilho da Ana</span>
              <p>
                Moda praia com leveza, garimpo inteligente e atendimento próximo
                para escolher sem pressa.
              </p>
              <a href={links.whatsapp} target="_blank" rel="noreferrer">
                Conversar sobre biquínis
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
              title="Da seleção ao WhatsApp, uma compra leve e direta."
              description="A jornada foi pensada para mostrar os biquínis com clareza e facilitar o atendimento individual."
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
              title="Biquínis e achados de praia para escolher pelo WhatsApp."
              description="A área de destaques agora apresenta categorias de moda praia, sem nomes soltos de roupas que não representam o carro-chefe da cliente."
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
              title="Compra de moda praia também precisa de cuidado e orientação."
              description="Depoimentos curtos reforçam conservação, caimento, atendimento e a sensação de comprar com segurança."
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
            <h2>Veja os biquínis disponíveis antes da próxima viagem.</h2>
            <p>
              Uma curadoria de moda praia com estilo, atendimento direto e preço
              mais leve para escolher bem.
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
          <p>Curadoria feminina de biquínis, achados de praia e boas escolhas.</p>
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

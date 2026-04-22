"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { FeaturedPiece } from "@/data/siteContent";

type ProductCarouselProps = {
  items: FeaturedPiece[];
  ctaHref: string;
};

export function ProductCarousel({ items, ctaHref }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function updateActiveSlide() {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }

  function scrollToSlide(index: number) {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;

    if (!track || !slide) {
      return;
    }

    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <div className="product-carousel">
      <div
        ref={trackRef}
        className="product-carousel__track"
        aria-label="Vitrine de looks"
        onScroll={updateActiveSlide}
      >
        {items.map((piece, index) => (
          <article
            className={`product-slide${index === activeIndex ? " is-active" : ""}`}
            key={piece.name}
          >
            <div className="product-slide__image">
              <Image
                src={piece.image}
                alt={piece.name}
                sizes="(max-width: 719px) 85vw, (max-width: 1199px) 44vw, 360px"
                placeholder="blur"
              />
            </div>
            <div className="product-slide__body">
              <div className="product-slide__meta">
                <span>{piece.subtitle}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
              <h3>{piece.name}</h3>
              <p>{piece.description}</p>
              <a href={ctaHref} target="_blank" rel="noreferrer">
                Quero esse estilo
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="product-carousel__progress" aria-label="Slides da vitrine">
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </span>
        {items.map((item, index) => (
          <button
            type="button"
            aria-label={`Ver ${item.name}`}
            aria-current={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            key={item.name}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

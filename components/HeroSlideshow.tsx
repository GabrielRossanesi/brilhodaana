"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import type { HeroSlide } from "@/data/siteContent";

type HeroSlideshowProps = {
  slides: HeroSlide[];
};

export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (shouldReduceMotion || slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero__image-frame hero-slideshow" aria-label="Looks da semana">
      {slides.map((slide, index) => (
        <Image
          key={slide.alt}
          src={slide.image}
          alt={slide.alt}
          sizes="(max-width: 719px) 100vw, 560px"
          placeholder="blur"
          priority={index === 0}
          loading={index === 0 ? undefined : "eager"}
          className={`hero-slideshow__image${
            index === activeIndex ? " is-active" : ""
          }`}
          style={
            {
              "--hero-position-desktop": slide.position,
              "--hero-position-mobile": slide.mobilePosition,
            } as CSSProperties
          }
        />
      ))}
      <span className="hero__image-label">Looks da semana</span>
    </div>
  );
}

"use client";

import { useState } from "react";
import { links } from "@/data/siteContent";

const navItems = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#marca", label: "A marca" },
  { href: "#pecas", label: "Peças" },
  { href: "#contato", label: "Contato" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className={`mobile-menu${isOpen ? " is-open" : ""}`}>
      <button
        className="mobile-menu__trigger"
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className="mobile-menu__panel" id="mobile-menu-panel">
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="button mobile-menu__cta"
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

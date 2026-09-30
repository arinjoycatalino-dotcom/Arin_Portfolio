"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MenuIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);

  const updatePill = useCallback(() => {
    if (!navRef.current) return;

    const activeItem = navRef.current.querySelector(".nav-link.active");
    if (!activeItem) {
      setPillStyle((current) => ({ ...current, opacity: 0 }));
      return;
    }

    setPillStyle({
      left: activeItem.offsetLeft,
      width: activeItem.offsetWidth,
      opacity: 1
    });
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    updatePill();

    const observer = new ResizeObserver(updatePill);
    observer.observe(navRef.current);
    return () => observer.disconnect();
  }, [pathname, updatePill]);

  return (
    <header className="site-header floating-gooey-header">
      <svg className="gooey-filter" aria-hidden="true">
        <defs>
          <filter id="gooey-nav">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Arin Catalino home">
          <span className="brand-mark">AC</span>
          <span className="brand-name">Arin</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <MenuIcon open={open} />
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} ref={navRef} aria-label="Main navigation">
          <div
            className="gooey-pill-indicator"
            aria-hidden="true"
            style={{
              transform: `translateX(${pillStyle.left}px)`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity
            }}
          >
            <i />
            <i />
          </div>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const NAV_LINK_CLASS =
  "font-headline font-semibold tracking-tight text-stone-600 dark:text-stone-400 dark:hover:text-green-400 transition-colors hover:text-primary";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const items = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/our-story", label: "Our Story" },
      { href: "/our-programs", label: "Our Programs" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  const onNavigate = () => setIsMobileOpen(false);
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-green-900 dark:text-green-500 tracking-tighter"
          onClick={onNavigate}
        >
          Bright Hope
        </Link>

        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={NAV_LINK_CLASS}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-sm"
            onClick={onNavigate}
          >
            Get Support
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-on-surface"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <span className="material-symbols-outlined" data-icon="menu">
              menu
            </span>
          </button>
        </div>
      </div>

      {isMobileOpen ? (
        <div className="md:hidden border-t border-outline-variant/30 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={NAV_LINK_CLASS}
                onClick={onNavigate}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-bold shadow-sm inline-flex items-center justify-center"
              onClick={onNavigate}
            >
              Get Support
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}


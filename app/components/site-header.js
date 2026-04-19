"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const NAV_LINK_CLASS =
  "font-headline font-semibold tracking-tight text-stone-700 hover:text-primary transition-colors";

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
    <nav
      className="fixed inset-x-0 top-0 z-50 isolate bg-white pt-[env(safe-area-inset-top)] [transform:translateZ(0)]"
      aria-label="Primary"
    >
      <div className="flex h-[4.25rem] shrink-0 items-center justify-between px-8 md:h-[4.5rem] max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex shrink-0 items-center leading-none"
          onClick={onNavigate}
          aria-label="Bright Hope Support Services home"
        >
          <Image
            src="/bhsslogo.png"
            alt=""
            width={280}
            height={88}
            priority
            className="block h-9 w-auto bg-transparent object-contain object-left md:h-10 [&_img]:block"
          />
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
            className="md:hidden p-2 text-stone-700"
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
        <div className="md:hidden border-t border-stone-200 bg-white">
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


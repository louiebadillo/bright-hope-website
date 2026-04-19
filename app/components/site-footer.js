import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low pt-20 pb-10 font-body">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex max-w-[min(100%,320px)]"
              aria-label="Bright Hope Support Services home"
            >
              <Image
                src="/bhsslogo2.png"
                alt=""
                width={320}
                height={160}
                className="h-auto w-full object-contain object-left"
              />
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Guided by dignity and respect, we support children, youth, and
              families through critical moments of transition and change.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
                  href="/our-programs"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
                  href="/our-story"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
                  href="/our-programs"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-secondary text-base"
                  data-icon="call"
                >
                  call
                </span>
                <span>403-807-6088</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-secondary text-base"
                  data-icon="alternate_email"
                >
                  alternate_email
                </span>
                <span>info@brighthopess.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-secondary text-base"
                  data-icon="location_on"
                >
                  location_on
                </span>
                <span>Calgary, Alberta</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 text-center">
          <p className="text-xs text-on-surface-variant">
            © 2024 Bright Hope Support Services. All rights reserved. Founded on
            connection and compassion.
          </p>
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low pt-20 pb-10 font-body">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-on-surface">Bright Hope</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Guided by dignity and respect, we support children, youth, and
              families through critical moments of transition and change.
            </p>
            <div className="flex gap-4">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined" data-icon="share">
                  share
                </span>
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined" data-icon="mail">
                  mail
                </span>
              </a>
            </div>
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
                <a
                  className="text-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all"
                  href="#"
                >
                  Privacy Policy
                </a>
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

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
              Stay Updated
            </h4>
            <p className="text-sm text-on-surface-variant">
              Subscribe for community news and program updates.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-surface-container-highest border-none rounded-lg w-full px-4 text-sm focus:ring-2 focus:ring-primary"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-secondary text-white p-2 rounded-lg hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-base" data-icon="send">
                  send
                </span>
              </button>
            </div>
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


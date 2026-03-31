"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function useCards() {
  return useMemo(
    () => [
      {
        id: "card-bright-start",
        title: "Bright Start Early Childhood Program",
        badge: "Ages 0 to 6",
        badgeClassName: "bg-primary-container text-on-primary-container",
        image:
          "/photos/brighthope9.jpg",
        summary:
          "Our early intervention program focuses on foundational development during the most critical years. We provide a nurturing environment where children can explore, learn, and grow through play-based activities and professional developmental support.",
        detailsTitle: "Program Highlights",
        detailsIcon: "task_alt",
        detailsIconClassName: "text-primary",
        bulletColorClassName: "bg-primary",
        bullets: [
          "24/7 Professional supervision",
          "Developmental & behavioral assessments",
          "Gentle routines and structured play",
          "Supervised family visits & connection",
        ],
        actionColorClassName: "text-primary",
        actionTextMore: "Show More",
      },
      {
        id: "card-independent",
        title: "Semi-Independent Living",
        badge: "Ages 18 to 24",
        badgeClassName: "bg-secondary-container text-on-secondary-container",
        image:
          "/photos/brighthope1.jpg",
        summary:
          "Bridging the gap between supported care and total independence. We provide a safe housing environment where young adults can practice life skills under gentle guidance while maintaining their autonomy.",
        detailsTitle: "Support & Skills",
        detailsIcon: "home",
        detailsIconClassName: "text-secondary",
        bulletColorClassName: "bg-secondary",
        bullets: [
          "24/7 on-call support",
          "Stable accommodation assistance",
          "Budgeting and financial literacy",
          "Life skills & home maintenance",
          "Financial assistance navigation",
          "Mentorship & career planning",
        ],
        actionColorClassName: "text-secondary",
        actionTextMore: "Expand Program",
      },
      {
        id: "card-strong-roots",
        title: "Strong Roots Program",
        badge: "Community Core",
        badgeClassName: "bg-tertiary-container text-on-tertiary-container",
        image:
          "/photos/brighthope12.jpg",
        summary:
          "Our premier program focused on cultural identity and emotional resilience. Strong Roots helps individuals reconnect with their heritage while building modern coping strategies for a thriving future.",
        detailsTitle: "Holistic Care",
        detailsIcon: null,
        detailsIconClassName: null,
        bulletColorClassName: null,
        bullets: [],
        actionColorClassName: "text-tertiary",
        actionTextMore: "View Full Details",
      },
      {
        id: "card-dds",
        title: "Persons with Developmental Disabilities Program (DDS)",
        badge: "Tailored Support",
        badgeClassName: "bg-tertiary text-on-tertiary",
        image: "/photos/brighthope10.jpg",
        summary:
          "Tailored support for individuals with developmental disabilities, focused on achieving independence and building skills for daily life.",
        detailsTitle: "Program Highlights",
        detailsIcon: "accessible",
        detailsIconClassName: "text-tertiary",
        bulletColorClassName: "bg-tertiary",
        bullets: [
          "24/7 support, case management, and crisis intervention",
          "Individualized life skills coaching",
          "Support with personal care, communication, and social interaction",
          "Community-based activities and inclusion",
          "Coordination with PDD professionals and health teams",
          "Supported employment and day programming options",
        ],
        actionColorClassName: "text-tertiary",
        actionTextMore: "Expand Program",
      },
    ],
    [],
  );
}

export function ProgramsContent() {
  const cards = useCards();
  const [expandedIds, setExpandedIds] = useState(() => new Set());
  const [isWorkshopListExpanded, setIsWorkshopListExpanded] = useState(false);

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <main className="bg-surface font-body text-on-surface selection:bg-primary-container pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-secondary-container/10 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-secondary font-label uppercase tracking-widest text-xs font-bold">
            Compassionate Care
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-tertiary tracking-tight mb-6 max-w-4xl">
          Programs Built on <span className="text-primary italic">Connection</span>{" "}
          and Growth.
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Empowering individuals through culturally safe, trauma-informed support
          designed to nurture potential and foster independence at every stage of
          life.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-8">
          {cards.map((card) => (
            <ProgramCard
              key={card.id}
              card={card}
              isExpanded={expandedIds.has(card.id)}
              onToggle={() => toggleExpanded(card.id)}
            />
          ))}

          <section className="py-12 border-t border-outline-variant/20">
            <h3 className="font-headline text-2xl font-bold text-tertiary mb-10 text-center">
              Our Core Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Pillar icon="healing" title="Trauma-Informed">
                We prioritize safety, trust, and empowerment in every step.
              </Pillar>
              <Pillar icon="groups" title="Community Driven">
                Building networks of support that last a lifetime.
              </Pillar>
              <Pillar icon="auto_awesome" title="Individual Centered">
                Care plans as unique as the people we serve.
              </Pillar>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 sticky top-32 space-y-8">
          <div className="bg-surface-container-lowest rounded-lg p-8 shadow-sm border border-outline-variant/20">
            <h3 className="font-headline text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" data-icon="school">
                school
              </span>
              Training &amp; Workshops
            </h3>

            <div className="space-y-6">
              <WorkshopTeaser
                title="Cultural Competency for Carers"
                body="A deep dive into providing safe environments for diverse youth."
              />
              <WorkshopTeaser
                title="Resilience Building Workshop"
                body="Practical tools for managing stress and building emotional strength."
              />
              <WorkshopTeaser
                title="First Aid & Youth Wellness"
                body="Emergency response training specifically for support environments."
              />
            </div>

            <div
              className={`mt-6 space-y-4 border-t border-outline-variant/10 pt-6 ${
                isWorkshopListExpanded ? "max-h-[1200px]" : "max-h-0"
              } overflow-hidden transition-[max-height] duration-700 ease-in-out`}
            >
              <h5 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                All Workshop Topics
              </h5>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Traditional Parenting Guidance",
                  "Family Circle",
                  "Life skills training",
                  "Family and community engagement",
                  "Trauma informed workshops",
                  "Domestic violence",
                  "Anger management",
                  "Blanket ceremony",
                  "Grief and loss",
                  "Building healthy relationships",
                  "100% accountability",
                  "Disabilities",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {t}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>
                    Youth workshops: transitioning out of the system, transition to
                    adulthood, challenges with drugs, alcohol, and sexual exploitation,
                    and navigating lifestyle between urban living and indigenous
                    community life.
                  </span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="w-full mt-6 py-3 rounded-xl bg-surface-container-low text-on-surface font-bold hover:bg-surface-container-high transition-colors text-sm flex items-center justify-center gap-2"
              onClick={() => setIsWorkshopListExpanded((v) => !v)}
            >
              <span>{isWorkshopListExpanded ? "Show Less" : "View All Workshops"}</span>
              <span className="material-symbols-outlined text-sm" data-icon="unfold_more">
                unfold_more
              </span>
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-8 shadow-sm border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 radiance-gradient opacity-10 blur-3xl -mr-16 -mt-16" />
            <h3 className="font-headline text-2xl font-bold text-tertiary mb-2">
              Program Inquiry
            </h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Fill out the form below and our team will be in touch with more
              information.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 px-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                  placeholder="John Doe"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 px-1">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                    placeholder="hello@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 px-1">
                    Phone
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                    placeholder="0400 000 000"
                    type="tel"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 px-1">
                  Program of Interest
                </label>
                <select className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm text-on-surface">
                  <option disabled value="">
                    Select a program
                  </option>
                  <option value="bright-start">Bright Start Early Childhood</option>
                  <option value="semi-independent">Semi-Independent Living</option>
                  <option value="strong-roots">Strong Roots Program</option>
                  <option value="workshops">Training &amp; Workshops</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 px-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm placeholder:text-stone-400"
                  placeholder="How can we help you?"
                  rows={3}
                />
              </div>

              <button
                className="w-full radiance-gradient text-white py-4 rounded-xl font-headline font-extrabold tracking-tight hover:shadow-lg hover:scale-[1.02] transition-all duration-300 mt-2"
                type="submit"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-outline-variant/10 flex items-center gap-3 text-sm text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-primary" data-icon="phone_in_talk">
                phone_in_talk
              </span>
              <span>Or call us: 1800 BRIGHT HOPE</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function ProgramCard({ card, isExpanded, onToggle }) {
  return (
    <section
      className={`program-card group bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/20 ${
        isExpanded ? "expanded" : ""
      }`}
      id={card.id}
    >
      {card.isRadianceHero ? (
        <div className="relative h-64 overflow-hidden radiance-gradient flex items-center justify-center">
          <span
            className="material-symbols-outlined text-white text-8xl opacity-20"
            data-icon="forest"
          >
            forest
          </span>
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <h3 className="font-headline text-3xl font-extrabold text-white tracking-tight">
              Cultural Identity &amp; Resilience
            </h3>
          </div>
          <div className="absolute top-4 left-4">
            <span
              className={`${card.badgeClassName} px-3 py-1 rounded-full font-label text-xs font-bold shadow-md uppercase tracking-wider`}
            >
              {card.badge}
            </span>
          </div>
        </div>
      ) : (
        <div className="relative h-64 overflow-hidden">
          <Image
            alt={card.title}
            src={card.image}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`${card.badgeClassName} px-3 py-1 rounded-full font-label text-xs font-bold shadow-md uppercase tracking-wider`}
            >
              {card.badge}
            </span>
          </div>
        </div>
      )}

      <div className="p-8">
        <h2 className="font-headline text-2xl font-bold text-tertiary mb-3">
          {card.title}
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">{card.summary}</p>

        <div className="program-card-details">
          {card.id === "card-strong-roots" ? (
            <div className="pt-4 border-t border-outline-variant/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-on-surface text-sm uppercase tracking-wider">
                    Holistic Care
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-tertiary text-lg shrink-0"
                        data-icon="verified_user"
                      >
                        verified_user
                      </span>
                      Culturally safe support networks
                    </li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-tertiary text-lg shrink-0"
                        data-icon="family_restroom"
                      >
                        family_restroom
                      </span>
                      Parenting guidance &amp; reunification
                    </li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-tertiary text-lg shrink-0"
                        data-icon="psychology"
                      >
                        psychology
                      </span>
                      Wellness coaching &amp; crisis intervention
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-on-surface text-sm uppercase tracking-wider">
                    Specialized Streams
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-tertiary text-lg shrink-0"
                        data-icon="female"
                      >
                        female
                      </span>
                      Young Mothers specialized program
                    </li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-tertiary text-lg shrink-0"
                        data-icon="apartment"
                      >
                        apartment
                      </span>
                      Intensive live-in program options
                    </li>
                  </ul>
                </div>
              </div>

              <button className="w-full mb-6 bg-tertiary text-on-tertiary py-3 rounded-xl font-bold hover:bg-tertiary/90 transition-colors">
                Enroll in Strong Roots
              </button>
            </div>
          ) : (
            <div className="pt-4 border-t border-outline-variant/10">
              <h4 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-xl ${card.detailsIconClassName ?? ""}`}
                  data-icon={card.detailsIcon ?? "task_alt"}
                >
                  {card.detailsIcon ?? "task_alt"}
                </span>
                {card.detailsTitle}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${card.bulletColorClassName}`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          type="button"
          className={`flex items-center gap-2 font-bold font-label text-sm uppercase tracking-widest hover:gap-3 transition-all ${card.actionColorClassName}`}
          onClick={onToggle}
        >
          <span>{isExpanded ? "Show Less" : card.actionTextMore}</span>
          <span
            className="material-symbols-outlined expand-icon transition-transform"
            data-icon="expand_more"
          >
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
}

function Pillar({ icon, title, children }) {
  return (
    <div>
      <span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon={icon}>
        {icon}
      </span>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-on-surface-variant">{children}</p>
    </div>
  );
}

function WorkshopTeaser({ title, body }) {
  return (
    <div className="group cursor-pointer">
      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant line-clamp-2">{body}</p>
    </div>
  );
}


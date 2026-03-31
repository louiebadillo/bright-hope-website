"use client";

import { useState } from "react";

const WORKSHOPS = [
  {
    id: "01",
    title: "Traditional Parenting",
    subtitle: "Honoring ancestral wisdom in child-rearing.",
    content:
      "Our Traditional Parenting workshop focuses on reconnecting families with ancestral child-rearing practices. We explore cultural stories, values, and traditional methods that foster healthy attachment, respect, and a strong sense of identity within the family unit.",
    delay: "100",
  },
  {
    id: "02",
    title: "Family Circle",
    subtitle: "Conflict resolution and communication skills.",
    content:
      "The Family Circle workshop provides a safe space for families to learn and practice effective communication and conflict resolution techniques. Using circle-based dialogue, we help participants build empathy, active listening skills, and collaborative problem-solving strategies.",
    delay: "200",
  },
  {
    id: "03",
    title: "Youth Workshops",
    subtitle: "Transitioning to adulthood and system navigation.",
    content:
      "Designed for youth aged 16-24, these sessions cover essential life skills including budgeting, housing applications, job readiness, and navigating social service systems. We empower youth with the practical tools and confidence needed for independent living.",
    delay: "300",
  },
  {
    id: "04",
    title: "Healing Practices",
    subtitle: "Blanket ceremonies, grief & loss support.",
    content:
      "These healing workshops incorporate traditional ceremonies like the Blanket Ceremony to address historical and personal trauma. We provide a supportive environment for processing grief, loss, and emotional challenges through a lens of resilience and cultural connection.",
    delay: "400",
  },
];

export function HomeWorkshops() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-4">
      {WORKSHOPS.map((w) => {
        const isOpen = openId === w.id;
        const contentId = `workshop-content-${w.id}`;
        return (
          <div
            key={w.id}
            className="w-full text-left bg-surface-container-lowest p-6 rounded-lg hover:bg-primary-container/5 transition-all border border-transparent hover:border-primary-container/20 group"
            data-aos="fade-up"
            data-aos-delay={w.delay}
          >
            <button
              type="button"
              className="w-full text-left"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenId((prev) => (prev === w.id ? null : w.id))}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-headline font-black text-outline-variant group-hover:text-primary transition-colors">
                    {w.id}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-on-surface">
                      {w.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      {w.subtitle}
                    </p>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-outline transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  data-icon="expand_more"
                >
                  expand_more
                </span>
              </div>
            </button>

            <div
              id={contentId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                <div className="pt-4 text-on-surface-variant text-sm leading-relaxed">
                  {w.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


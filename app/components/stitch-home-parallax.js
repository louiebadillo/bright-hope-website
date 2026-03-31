"use client";

import { useEffect } from "react";

export function StitchHomeParallax() {
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImg = document.getElementById("hero-image");
      const heroShape = document.getElementById("hero-bg-shape");

      if (heroImg) {
        heroImg.style.setProperty("--parallax-y", `${scrolled * 0.1}px`);
      }
      if (heroShape) {
        heroShape.style.setProperty("--parallax-y", `${scrolled * -0.05}px`);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}


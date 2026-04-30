"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

const SCROLL_BY = 420; // image 400 + gap
const ADVANCE_INTERVAL_MS = 4000;

export default function ProjectsCarousel({ items }: { items: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -SCROLL_BY,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({
      left: SCROLL_BY,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const node = containerRef.current;
      if (!node) return;
      const maxScroll = node.scrollWidth - node.clientWidth;
      const atEnd = node.scrollLeft >= maxScroll - 1;
      node.scrollTo({
        left: atEnd ? 0 : node.scrollLeft + SCROLL_BY,
        behavior: "smooth",
      });
    }, ADVANCE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-end gap-2 mb-4">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={scrollLeft}
          className="h-9 px-3 rounded-full border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.03] dark:hover:bg-white/[.06]"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={scrollRight}
          className="h-9 px-3 rounded-full border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.03] dark:hover:bg-white/[.06]"
        >
          →
        </button>
      </div>
      <div
        ref={containerRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-6 sm:gap-8 scroll-pl-6 sm:scroll-pl-8 snap-x snap-mandatory">
          {items.map((project, idx) => (
            <article
              key={`${project.title}-${idx}`}
              className="snap-start flex-shrink-0 w-[400px] flex"
            >
              <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-black/[.08] dark:border-white/[.145]">
                <div className="bg-black/[.04] dark:bg-white/[.04]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-[400px] h-[400px] object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-foreground/80 mb-2 line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href={project.href ? project.href : `/${project.id}`}
                    target={project.href ? "_blank" : undefined}
                    aria-label={`Learn more about ${project.title}`}
                    rel={project.href ? "noopener noreferrer" : undefined}
                    className="text-sm hover:underline hover:underline-offset-4 mt-auto"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

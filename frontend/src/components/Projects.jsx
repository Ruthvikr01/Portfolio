import React, { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "../mock/data";

const sizeMap = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-1",
  wide: "md:col-span-3 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
};

const Projects = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#fbfbfd]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Reveal>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
                Selected Work
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] max-w-3xl">
                Projects, shipped with care.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <a
              href="https://github.com/Ruthvikr01"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors"
            >
              View all on GitHub
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={120 + i * 80} className={sizeMap[p.size]}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [hover, setHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const isDark = project.theme === "dark";
  const isLarge = project.size === "large";
  const isWide = project.size === "wide";

  const glowStyle =
    isDark && (project.glowA || project.glowB)
      ? {
          backgroundImage: `radial-gradient(circle at 18% 18%, ${
            project.glowA || "transparent"
          }, transparent 45%), radial-gradient(circle at 85% 85%, ${
            project.glowB || "transparent"
          }, transparent 50%)`,
        }
      : {};

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  // Open the repo when clicking anywhere on the card (except inner links)
  const onCardClick = () => {
    if (isTouch) return;
    window.open(project.repo, "_blank", "noopener,noreferrer");
  };
  const onCardKey = (e) => {
    if (isTouch) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick();
    }
  };

  return (
    <div
      role={isTouch ? undefined : "link"}
      tabIndex={isTouch ? undefined : 0}
      onClick={isTouch ? undefined : onCardClick}
      onKeyDown={isTouch ? undefined : onCardKey}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative h-full w-full rounded-3xl overflow-hidden border outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/50 ${
        isDark ? "border-white/10" : "border-black/5"
      } group block transition-shadow ${
        hover
          ? isDark
            ? "shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            : "shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          : "shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
      } ${isTouch ? "cursor-default" : "cursor-pointer"}`}
    >
      {/* Base color gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} transition-transform duration-700 ease-out ${
          hover ? "scale-[1.04]" : "scale-100"
        }`}
      />

      {/* Glow overlays for dark themes */}
      {isDark && (
        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-700 ${
            hover ? "opacity-100" : "opacity-80"
          }`}
          style={glowStyle}
        />
      )}

      {/* Subtle Apple-style sheen on the featured card */}
      {isLarge && isDark && (
        <div
          aria-hidden
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
            hover ? "opacity-100" : "opacity-60"
          }`}
          style={{
            background:
              "linear-gradient(135deg, transparent 38%, rgba(255,255,255,0.05) 50%, transparent 62%)",
          }}
        />
      )}

      {/* Subtle grain noise */}
      <div
        aria-hidden
        className={`absolute inset-0 mix-blend-overlay pointer-events-none ${
          isDark ? "opacity-[0.08]" : "opacity-[0.05]"
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div
        className={`relative h-full w-full p-6 sm:p-8 flex ${
          isWide
            ? "flex-row items-center justify-between gap-8"
            : "flex-col justify-between"
        } ${isDark ? "text-white" : "text-[#1d1d1f]"}`}
      >
        {/* Header row (non-wide) */}
        {!isWide && (
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-[11px] uppercase tracking-[0.18em] ${
                  isDark ? "text-white/65" : "text-[#1d1d1f]/55"
                }`}
              >
                {project.period}
              </span>
              {project.isLive && <LivePill isDark={isDark} />}
            </div>
            <span
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform ${
                hover ? "-translate-y-0.5 translate-x-0.5" : ""
              } ${
                isDark
                  ? "bg-white/10 border border-white/15 backdrop-blur"
                  : "bg-white border border-black/10"
              }`}
            >
              <ArrowUpRight size={15} />
            </span>
          </div>
        )}

        {/* Body */}
        <div
          className={`${isWide ? "flex-1 min-w-0" : ""} flex flex-col min-h-0`}
        >
          {isWide && (
            <div className="mb-3 flex items-center gap-2 flex-wrap">
              <span
                className={`text-[11px] uppercase tracking-[0.18em] ${
                  isDark ? "text-white/65" : "text-[#1d1d1f]/55"
                }`}
              >
                {project.period}
              </span>
              {project.isLive && <LivePill isDark={isDark} />}
            </div>
          )}
          <h3
            className={`font-semibold tracking-[-0.02em] leading-[1.05] ${
              isLarge
                ? "text-[28px] sm:text-[36px] md:text-[44px]"
                : isWide
                ? "text-[24px] sm:text-[30px]"
                : "text-[22px] sm:text-[26px]"
            }`}
          >
            {project.title}
          </h3>
          <div
            className={`mt-2 pr-1 max-h-[110px] sm:max-h-none overflow-y-auto ${
              isLarge ? "max-w-md" : isWide ? "max-w-xl" : "max-w-xs"
            }`}
          >
            <p
              className={`text-[14px] sm:text-[15px] leading-[1.55] ${
                isDark ? "text-white/75" : "text-[#1d1d1f]/70"
              }`}
            >
              {isLarge || isWide ? project.description : project.short}
            </p>
          </div>

          {isLarge && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className={`text-[11px] px-2.5 py-1 rounded-full ${
                    isDark
                      ? "bg-white/10 text-white/90 border border-white/15 backdrop-blur"
                      : "bg-white text-[#1d1d1f]/80 border border-black/10"
                  }`}
                >
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div
            className={`${isLarge ? "mt-5" : "mt-4"} flex flex-wrap items-center gap-2`}
          >
            {project.stack.slice(0, 5).map((s) => (
              <span
                key={s}
                className={`text-[11px] px-2 py-0.5 rounded-md ${
                  isDark
                    ? "bg-white/5 text-white/75 border border-white/10"
                    : "bg-black/[0.04] text-[#1d1d1f]/70 border border-black/5"
                }`}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Action row: Repo + Live demo */}
          <div
            className={`mt-auto ${isLarge ? "pt-5" : "pt-3"} flex flex-wrap items-center gap-2`}
          >
            <CardLink
              href={project.repo}
              isDark={isDark}
              icon={<Github size={12} />}
              label="Repo"
            />
            {project.liveUrl && (
              <CardLink
                href={project.liveUrl}
                isDark={isDark}
                icon={<ExternalLink size={12} />}
                label="Live demo"
                primary
              />
            )}
          </div>
        </div>

        {/* Wide layout: arrow on the right */}
        {isWide && (
          <span
            className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform ${
              hover ? "-translate-y-0.5 translate-x-0.5" : ""
            } ${
              isDark
                ? "bg-white/10 border border-white/15 backdrop-blur"
                : "bg-white border border-black/10"
            }`}
          >
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>
    </div>
  );
};

const LivePill = ({ isDark }) => (
  <span
    className={`inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full ${
      isDark
        ? "bg-emerald-400/15 text-emerald-300 border border-emerald-300/25"
        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
    }`}
  >
    <span className="relative inline-flex w-1.5 h-1.5">
      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
    </span>
    Live
  </span>
);

const CardLink = ({ href, icon, label, isDark, primary }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    onClick={(e) => e.stopPropagation()}
    className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${
      primary
        ? isDark
          ? "bg-white text-[#1d1d1f] hover:bg-white/90"
          : "bg-[#1d1d1f] text-white hover:bg-black"
        : isDark
        ? "bg-white/10 text-white/85 border border-white/15 hover:bg-white/15"
        : "bg-white text-[#1d1d1f]/80 border border-black/10 hover:border-black/20"
    }`}
  >
    {icon} {label}
  </a>
);

export default Projects;

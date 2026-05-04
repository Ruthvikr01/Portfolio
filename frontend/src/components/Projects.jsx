import React, { useState } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../mock/data";

const sizeMap = {
  large: "md:col-span-2 md:row-span-2 min-h-[420px]",
  medium: "md:col-span-1 md:row-span-1 min-h-[260px]",
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
  const isDark =
    project.id === "route-navigator" || project.id === "malware-detection";
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative h-full w-full rounded-3xl overflow-hidden border ${
        isDark ? "border-white/10" : "border-black/5"
      } group block`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} transition-transform duration-700 ease-out ${
          hover ? "scale-[1.04]" : "scale-100"
        }`}
      />
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(0,113,227,0.35), transparent 40%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.08), transparent 35%)",
          }}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div
        className={`relative h-full w-full p-6 sm:p-8 flex flex-col justify-between ${
          isDark ? "text-white" : "text-[#1d1d1f]"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className={`text-[11px] uppercase tracking-[0.18em] ${
              isDark ? "text-white/60" : "text-[#1d1d1f]/55"
            }`}
          >
            {project.period}
          </span>
          <span
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform ${
              hover ? "-translate-y-0.5 translate-x-0.5" : ""
            } ${
              isDark
                ? "bg-white/10 border border-white/15"
                : "bg-white border border-black/10"
            }`}
          >
            <ArrowUpRight size={15} />
          </span>
        </div>

        <div>
          <h3
            className={`font-semibold tracking-[-0.02em] leading-[1.05] ${
              project.size === "large"
                ? "text-[28px] sm:text-[34px] md:text-[40px]"
                : "text-[22px] sm:text-[26px]"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-2 text-[14px] sm:text-[15px] leading-[1.55] ${
              isDark ? "text-white/75" : "text-[#1d1d1f]/70"
            } ${project.size === "large" ? "max-w-md" : "max-w-xs"}`}
          >
            {project.size === "large" ? project.description : project.short}
          </p>

          {project.size === "large" && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className={`text-[11px] px-2.5 py-1 rounded-full ${
                    isDark
                      ? "bg-white/10 text-white/85 border border-white/10"
                      : "bg-white text-[#1d1d1f]/80 border border-black/10"
                  }`}
                >
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className={`text-[11px] px-2 py-0.5 rounded-md ${
                  isDark
                    ? "bg-white/5 text-white/70 border border-white/10"
                    : "bg-black/[0.04] text-[#1d1d1f]/70 border border-black/5"
                }`}
              >
                {s}
              </span>
            ))}
            <span
              className={`ml-1 inline-flex items-center gap-1 text-[11px] ${
                isDark ? "text-white/55" : "text-[#1d1d1f]/50"
              }`}
            >
              <Github size={11} /> Repo
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Projects;

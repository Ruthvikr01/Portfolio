import React from "react";
import Reveal from "./Reveal";
import { skillGroups } from "../mock/data";

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
            Toolbox
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] max-w-3xl">
            Tech I reach for.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={100 + i * 70}>
              <div className="h-full rounded-3xl bg-[#fbfbfd] border border-black/5 p-6 hover:border-black/10 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all">
                <h3 className="text-[14px] font-semibold tracking-tight text-[#1d1d1f]/90">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="text-[12px] px-3 py-1.5 rounded-full bg-white border border-black/5 text-[#1d1d1f]/80 hover:border-[#0071e3]/30 hover:text-[#1d1d1f] transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

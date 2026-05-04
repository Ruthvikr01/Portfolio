import React from "react";
import Reveal from "./Reveal";
import { Briefcase, ExternalLink } from "lucide-react";
import { experiences } from "../mock/data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
            Experience
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05]">
            Where I&rsquo;ve worked.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {experiences.map((e, idx) => (
            <Reveal key={e.company} delay={100 + idx * 80}>
              <article className="group rounded-3xl bg-[#fbfbfd] border border-black/5 p-6 sm:p-8 md:p-10 hover:bg-white hover:border-black/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1d1d1f] text-white flex items-center justify-center shrink-0">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                        {e.role}{" "}
                        <span className="text-[#1d1d1f]/50 font-normal">
                          · {e.company}
                        </span>
                      </h3>
                      <p className="mt-1 text-[13px] text-[#1d1d1f]/60">
                        {e.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[#1d1d1f]/60 bg-white border border-black/5 px-3 py-1.5 rounded-full">
                      {e.period}
                    </span>
                    {e.certificate && (
                      <a
                        href={e.certificate}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#0071e3] hover:underline"
                      >
                        Certificate <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[15px] leading-[1.6] text-[#1d1d1f]/80 pl-4 relative"
                    >
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[12px] px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#1d1d1f]/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

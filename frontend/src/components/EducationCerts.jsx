import React from "react";
import Reveal from "./Reveal";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "../mock/data";

const EducationCerts = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#fbfbfd]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
        {/* Education */}
        <div>
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
              Education
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[34px] sm:text-[40px] leading-[1.05]">
              Academic foundations.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-5">
            {education.map((ed, i) => (
              <Reveal key={ed.school} delay={120 + i * 80}>
                <div className="rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1d1d1f] text-white flex items-center justify-center shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                          {ed.school}
                        </h3>
                        <span className="text-[12px] text-[#1d1d1f]/60">
                          {ed.period}
                        </span>
                      </div>
                      <p className="mt-1 text-[14px] text-[#1d1d1f]/75">
                        {ed.degree}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="text-[12px] px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f]/80">
                          {ed.grade}
                        </span>
                        <span className="text-[12px] text-[#1d1d1f]/55">
                          {ed.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
              Certifications
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[34px] sm:text-[40px] leading-[1.05]">
              Continuously learning.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={120 + i * 50}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-white border border-black/5 p-5 hover:border-black/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] text-[#1d1d1f] flex items-center justify-center shrink-0">
                      <Award size={16} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-medium tracking-[-0.01em] text-[#1d1d1f] truncate">
                        {c.name}
                      </h4>
                      <p className="text-[12px] text-[#1d1d1f]/55 truncate">
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-[#1d1d1f]/40 group-hover:text-[#0071e3] transition-colors shrink-0"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCerts;

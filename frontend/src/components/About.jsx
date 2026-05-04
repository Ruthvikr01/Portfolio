import React from "react";
import Reveal from "./Reveal";
import { profile, stats } from "../mock/data";

const About = () => {
  return (
    <section id="about" className="relative bg-[#fbfbfd] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
            About
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] max-w-4xl">
            Engineering with intent.
            <span className="text-[#1d1d1f]/50">
              {" "}
              Performance, clarity, and craft in every line.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-[17px] leading-[1.7] text-[#1d1d1f]/80">
            <Reveal delay={120}>
              <p>{profile.summary}</p>
            </Reveal>
            <Reveal delay={180}>
              <p>{profile.passions}</p>
            </Reveal>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={200 + i * 60}>
                <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
                  <div className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[12px] text-[#1d1d1f]/60 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

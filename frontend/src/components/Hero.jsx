import React, { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Github, Linkedin, Code2, Trophy } from "lucide-react";
import { profile } from "../mock/data";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const orbRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Soft ambient orb */}
      <div
        ref={orbRef}
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,113,227,0.18), rgba(0,113,227,0.04) 60%, transparent 75%)",
          transition: "transform 200ms ease-out",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[12px] text-[#1d1d1f]/70 bg-white/70 backdrop-blur border border-black/5 px-3 py-1 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Open to Software Engineering roles · {profile.location}
          </div>
        </div>

        <h1
          className={`mt-8 font-semibold tracking-[-0.04em] text-[#1d1d1f] text-[44px] leading-[1.02] sm:text-[68px] md:text-[88px] lg:text-[104px] transition-all duration-700 delay-75 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hi, I&rsquo;m {profile.firstName}.
          <br />
          <span className="bg-gradient-to-r from-[#1d1d1f] via-[#1d1d1f]/80 to-[#0071e3] bg-clip-text text-transparent">
            I build things that scale.
          </span>
        </h1>

        <p
          className={`mt-7 max-w-2xl text-[18px] sm:text-[20px] leading-relaxed text-[#1d1d1f]/70 transition-all duration-700 delay-150 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A Computer Science graduate student crafting{" "}
          <span className="text-[#1d1d1f]">high-performance backends</span>,
          data-intensive applications and elegant algorithmic solutions.
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center gap-3 transition-all duration-700 delay-200 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 bg-[#1d1d1f] hover:bg-black text-white text-[14px] font-medium px-5 py-3 rounded-full transition-colors"
          >
            See my work
            <ArrowDownRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <div className="ml-1 flex items-center gap-1">
            <SocialIcon
              href={profile.socials.github}
              label="GitHub"
              icon={<Github size={16} />}
            />
            <SocialIcon
              href={profile.socials.linkedin}
              label="LinkedIn"
              icon={<Linkedin size={16} />}
            />
            <SocialIcon
              href={profile.socials.leetcode}
              label="LeetCode"
              icon={<Code2 size={16} />}
            />
            <SocialIcon
              href={profile.socials.codechef}
              label="CodeChef"
              icon={<Trophy size={16} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={label}
    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white border border-black/10 text-[#1d1d1f]/70 hover:text-[#1d1d1f] hover:border-black/20 hover:bg-[#f5f5f7] transition-colors"
  >
    {icon}
  </a>
);

export default Hero;

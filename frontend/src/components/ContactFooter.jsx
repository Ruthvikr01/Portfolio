import React from "react";
import Reveal from "./Reveal";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Code2,
  Trophy,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { profile } from "../mock/data";

const ContactFooter = () => {
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Portfolio inquiry"
  )}`;

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#0071e3] font-medium">
              Contact
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-semibold tracking-[-0.03em] text-[#1d1d1f] text-[40px] sm:text-[56px] md:text-[72px] leading-[1.02] max-w-4xl">
              Let&rsquo;s build something
              <span className="text-[#1d1d1f]/45"> remarkable</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-3">
              <Reveal delay={120}>
                <ContactRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
              </Reveal>
              <Reveal delay={170}>
                <ContactRow
                  icon={<Phone size={16} />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s|\(|\)|-/g, "")}`}
                />
              </Reveal>
              <Reveal delay={220}>
                <ContactRow
                  icon={<MapPin size={16} />}
                  label="Location"
                  value={profile.location}
                />
              </Reveal>

              <Reveal delay={270}>
                <div className="mt-6 flex flex-wrap gap-2">
                  <SocialPill
                    href={profile.socials.github}
                    icon={<Github size={14} />}
                    label="GitHub"
                  />
                  <SocialPill
                    href={profile.socials.linkedin}
                    icon={<Linkedin size={14} />}
                    label="LinkedIn"
                  />
                  <SocialPill
                    href={profile.socials.leetcode}
                    icon={<Code2 size={14} />}
                    label="LeetCode"
                  />
                  <SocialPill
                    href={profile.socials.codechef}
                    icon={<Trophy size={14} />}
                    label="CodeChef"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:col-span-3">
              <div className="rounded-3xl bg-[#fbfbfd] border border-black/5 p-6 sm:p-8 space-y-4">
                <p className="text-[15px] text-[#1d1d1f]/70">
                  Prefer email? Click below and your mail app will open with a
                  pre-filled subject.
                </p>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 bg-[#1d1d1f] hover:bg-black text-white text-[14px] font-medium px-5 py-3 rounded-full transition-colors"
                >
                  Email me <Send size={15} />
                </a>
                <p className="text-[12px] text-[#1d1d1f]/50">
                  Or write directly to {profile.email}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12px] text-[#1d1d1f]/55">
            © {new Date().getFullYear()} {profile.name}. Crafted with care.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-[#1d1d1f]/55">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#1d1d1f] inline-flex items-center gap-1 transition-colors"
            >
              GitHub <ArrowUpRight size={11} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#1d1d1f] inline-flex items-center gap-1 transition-colors"
            >
              LinkedIn <ArrowUpRight size={11} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#1d1d1f] inline-flex items-center gap-1 transition-colors"
            >
              Email <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

const ContactRow = ({ icon, label, value, href }) => {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl bg-[#fbfbfd] border border-black/5 px-5 py-4 hover:border-black/10 hover:bg-white transition-all">
      <div className="w-9 h-9 rounded-xl bg-white border border-black/5 text-[#1d1d1f] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#1d1d1f]/50 font-medium">
          {label}
        </p>
        <p className="text-[15px] text-[#1d1d1f] truncate">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block group">
      {inner}
    </a>
  ) : (
    inner
  );
};

const SocialPill = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-1.5 text-[12px] px-3.5 py-1.5 rounded-full bg-[#fbfbfd] border border-black/5 text-[#1d1d1f]/80 hover:text-[#1d1d1f] hover:border-black/15 transition-colors"
  >
    {icon} {label}
  </a>
);

export default ContactFooter;

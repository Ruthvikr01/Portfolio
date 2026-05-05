import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../mock/data";

const ContactFooter = () => {
  return (
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
  );
};

export default ContactFooter;

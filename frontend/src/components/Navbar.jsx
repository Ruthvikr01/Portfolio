import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../mock/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "#top")}
          className="text-[15px] font-semibold tracking-tight"
        >
          {profile.firstName}.
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden md:inline-flex items-center text-[12px] font-medium text-white bg-[#1d1d1f] hover:bg-black px-3.5 py-1.5 rounded-full transition-colors"
        >
          Get in touch
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-[#1d1d1f]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="block text-[14px] text-[#1d1d1f]/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="inline-flex items-center text-[13px] font-medium text-white bg-[#1d1d1f] px-4 py-2 rounded-full"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiTigerHead } from "react-icons/gi";
import { BsList, BsX } from "react-icons/bs";
import { NAV_LINKS, BRAND } from "../constants/siteData";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTrialModal } from "../hooks/useTrialModal";
import { cn } from "../utils/cn";
import { scrollToSection } from "../utils/scroll";
import Button from "./Button";

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openTrial } = useTrialModal();

  const handleDesktopNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
  };

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    // wait for the mobile menu's collapse animation to finish — starting the
    // smooth scroll while it's still animating causes Chromium to cancel it
    scrollToSection(href.replace("#", ""), 350);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-60 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : "bg-transparent"
          )}
        >
          <a href="#home" onClick={(e) => handleDesktopNavClick(e, "#home")} className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-bg shadow-[0_0_20px_rgba(250,204,21,0.4)]">
              <GiTigerHead className="text-2xl" />
            </span>
            <span className="font-display text-xl uppercase tracking-wide sm:text-2xl">
              {BRAND.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleDesktopNavClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                    isActive ? "text-primary" : "text-white/75 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button size="sm" onClick={() => openTrial()}>
              Book Free Trial
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <BsX className="text-2xl" /> : <BsList className="text-2xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden px-5 lg:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                    active === link.href.replace("#", "")
                      ? "bg-primary/10 text-primary"
                      : "text-white/80 hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  setMenuOpen(false);
                  openTrial();
                }}
              >
                Book Free Trial
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

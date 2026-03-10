"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "À Propos", href: "/a-propos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparent = !scrolled && isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_oklch(0.92_0.01_80)]"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo light={transparent} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-neutral-700 hover:text-primary-900 hover:bg-neutral-100"
                    )}
                  >
                    {item.label}
                    <svg
                      className={cn("h-3 w-3 transition-transform duration-200", servicesOpen && "rotate-180")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-68"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-neutral-200/60 p-2">
                          {services.map((svc) => (
                            <Link
                              key={svc.id}
                              href={`/services/${svc.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-50 group transition-colors"
                            >
                              <span className="text-accent-500 shrink-0">›</span>
                              <span className="text-sm font-medium text-neutral-800 group-hover:text-primary-900">
                                {svc.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    transparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-neutral-700 hover:text-primary-900 hover:bg-neutral-100",
                    pathname === item.href && !transparent && "text-primary-900 bg-neutral-100",
                    pathname === item.href && transparent && "text-white bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors"
            >
              Devis Gratuit
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                transparent ? "text-white hover:bg-white/10" : "text-neutral-700 hover:bg-neutral-100"
              )}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary-900 hover:bg-neutral-50 transition-colors",
                      pathname === item.href && "text-primary-900 bg-neutral-50"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-3 mt-1 border-l-2 border-neutral-100 pl-3 space-y-1">
                      {services.map((svc) => (
                        <Link
                          key={svc.id}
                          href={`/services/${svc.slug}`}
                          className="block py-2 text-sm text-neutral-700 hover:text-primary-800 transition-colors"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors"
                >
                  Demander un Devis Gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

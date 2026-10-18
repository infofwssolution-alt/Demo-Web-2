"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, HOSPITAL_CONTACT } from "@/data/hospital-data";
import { Eye, Menu, X, ChevronDown, Phone, Clock, Calendar } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#00123A] text-slate-300 text-xs hidden lg:block border-b border-blue-950/60">
        <div className="max-w-[1240px] mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#0f57fb]" />
              <span>OPD Hours: 9:30 AM – 12:00 PM & 5:00 PM – 7:30 PM</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#0f57fb]" />
              <span>Emergency Retina: (021) 34531810</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">187-B, P.E.C.H.S Block 2, Karachi</span>
            <button
              onClick={onOpenBooking}
              className="text-[#BFD1FF] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Consult an Ophthalmologist
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100"
            : "bg-white py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#00123A] to-[#0f57fb] flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-[#00123A] font-heading">
                  FMC
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-blue-50 text-[#0f57fb] font-bold tracking-wide">
                  FAROOQUI MEDICAL CENTRE
                </span>
              </div>
              <span className="text-[11px] text-slate-500 tracking-wider uppercase font-semibold">
                Advanced Ophthalmology & Surgery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[15px] font-medium text-[#313c4d] hover:text-[#0f57fb] transition-colors py-2"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2 w-72 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="text-sm font-semibold text-[#00123A] group-hover/item:text-[#0f57fb] transition-colors">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-[#0f57fb] hover:bg-[#21252f] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment now →</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="p-2 rounded-lg bg-[#0f57fb] text-white text-xs font-semibold px-3 py-2 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-slate-200 text-[#00123A] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0f57fb] flex items-center justify-center text-white">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[#00123A] tracking-tight leading-tight">FMC</span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">Farooqui Medical Centre</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-slate-50 pb-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-semibold text-[#00123A] hover:text-[#0f57fb] py-1"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-slate-600 hover:text-[#0f57fb] py-0.5"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-md bg-[#0f57fb] text-white font-semibold text-center text-sm shadow-md"
              >
                Book Appointment now →
              </button>
              <a
                href="tel:02134531810"
                className="w-full py-2.5 rounded-md border border-slate-200 text-[#00123A] font-medium text-center text-sm flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#0f57fb]" />
                <span>Call Hotline (021) 34531810</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

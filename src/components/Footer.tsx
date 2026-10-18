"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HOSPITAL_CONTACT } from "@/data/hospital-data";
import { Eye, MapPin, Phone, Clock, ArrowUp, Mail, ChevronRight, Globe, Share2 } from "lucide-react";

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-[#484c50] pt-16 sm:pt-20 pb-10 border-t border-slate-200" id="contact">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-100">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00123A] to-[#0f57fb] flex items-center justify-center text-white shadow-md">
                <Eye className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#00123A] font-heading">
                  FMC
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  Farooqui Medical Centre
                </span>
              </div>
            </Link>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0f57fb] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#00123A]">Address</div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">
                    {HOSPITAL_CONTACT.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0f57fb] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#00123A]">Call Us</div>
                  <div className="space-y-1 mt-1">
                    {HOSPITAL_CONTACT.hotlines.map((h) => (
                      <div key={h.number}>
                        <a
                          href={`tel:${h.tel}`}
                          className="text-[#243673] hover:text-[#0f57fb] font-semibold transition-colors block"
                        >
                          {h.number} <span className="text-xs text-slate-400 font-normal">({h.label})</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0f57fb] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#00123A]">Direct Email</div>
                  <a
                    href={`mailto:${HOSPITAL_CONTACT.email}`}
                    className="text-[#243673] hover:text-[#0f57fb] font-medium transition-colors"
                  >
                    {HOSPITAL_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Hospital Operating Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#00123A] border-b border-slate-100 pb-3">
              Hospital Timings
            </h3>

            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="font-bold text-[#00123A] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0f57fb]" />
                  <span>Morning OPD Session</span>
                </div>
                <div className="text-xs text-slate-600 font-semibold pl-6">
                  {HOSPITAL_CONTACT.timings.morning.time}
                </div>
                <div className="text-xs text-slate-500 pl-6 underline">
                  {HOSPITAL_CONTACT.timings.morning.days}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="font-bold text-[#00123A] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0f57fb]" />
                  <span>Evening OPD Session</span>
                </div>
                <div className="text-xs text-slate-600 font-semibold pl-6">
                  {HOSPITAL_CONTACT.timings.evening.time}
                </div>
                <div className="text-xs text-slate-500 pl-6 underline">
                  {HOSPITAL_CONTACT.timings.evening.days}
                </div>
              </div>

              <div className="text-xs font-semibold text-rose-600 bg-rose-50 px-3.5 py-2 rounded-lg border border-rose-100 flex items-center gap-2">
                <span>Sunday: Closed for routine consultations (24/7 Vitreoretinal Emergency on call)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-bold text-[#00123A] uppercase tracking-wider mb-2.5">
                Connect With Our Specialists
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0f57fb] hover:text-white text-[#243673] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0f57fb] hover:text-white text-[#243673] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0f57fb] hover:text-white text-[#243673] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Location Map Embed */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#00123A] border-b border-slate-100 pb-3">
              Hospital Location
            </h3>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-100 relative">
              <iframe
                title="FMC (Farooqui Medical Centre) Location"
                src={HOSPITAL_CONTACT.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0f57fb]" />
              <span>Easy highway access via Shahrah-e-Quaideen, P.E.C.H.S Karachi</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Educational Study Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 FMC (Farooqui Medical Centre). Educational UI study project reverse-engineered from dyzeyehospital.com.
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#0f57fb] transition-colors">About Institute</a>
            <a href="#facilities" className="hover:text-[#0f57fb] transition-colors">Facilities</a>
            <a href="#surgeries" className="hover:text-[#0f57fb] transition-colors">Surgeries</a>
            <a href="#contact" className="hover:text-[#0f57fb] transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#00123A] hover:bg-[#0f57fb] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};

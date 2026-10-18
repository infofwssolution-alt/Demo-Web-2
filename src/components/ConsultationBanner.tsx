"use client";

import React from "react";
import { HOSPITAL_CONTACT } from "@/data/hospital-data";
import { PhoneCall, Calendar, ShieldCheck, Sparkles } from "lucide-react";

interface ConsultationBannerProps {
  onOpenBooking: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#00123A] via-[#0d2a6b] to-[#0f57fb] text-white py-16 sm:py-20">
      {/* Decorative ambient background mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Headline & Narrative */}
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-blue-200 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Prioritize Your Vision Today</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Looking For An Expert Consultation?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-light">
              Book an appointment now with one of our board-certified ophthalmic surgeons and receive rapid, personalized care.
            </p>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:02134531810"
              className="w-full sm:w-auto px-8 py-4 rounded-[4px] bg-white text-[#00123A] hover:bg-slate-100 font-bold text-base tracking-wide transition-all duration-200 shadow-xl inline-flex items-center justify-center gap-3 active:scale-95"
            >
              <PhoneCall className="w-5 h-5 text-[#0f57fb]" />
              <span>(021) 34531810</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-[4px] bg-[#0f57fb] hover:bg-[#21252f] text-white border border-white/20 font-bold text-base tracking-wide transition-all duration-200 shadow-xl inline-flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

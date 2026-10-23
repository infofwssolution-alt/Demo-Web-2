"use client";

import React from "react";
import { CLINICAL_STATS } from "@/data/hospital-data";
import { CheckCircle2, UserCheck, Shield, Clock, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation & Surgeon Accreditation Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 group">
              {/* Clinical aesthetic placeholder illustration */}
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#00123A] via-[#052141] to-[#0f57fb]/80 flex flex-col justify-between p-8 text-white relative">
                {/* Background decorative mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#BFD1FF]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
                    Ophthalmic Board Certified
                  </span>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs font-medium text-slate-200">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Lead Consultant: Dr. Kashif Farooqui</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white leading-snug">
                    Pioneering Micro-Incision Eye Surgery & Vitreo-Retinal Care
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-left">
                    Fellow of the Royal College of Surgeons (FRCS Glasgow) with two decades of clinical leadership in complex posterior segment trauma and cataract surgery.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-extrabold text-[#00123A]">&lt; 15 Mins</div>
                  <div className="text-xs text-slate-500 font-medium">Avg. OPD Wait Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Differentiators */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-block">
              <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                About FMC (Farooqui Medical Centre)
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading leading-tight tracking-tight">
              One of the leading surgical eye institutes in Karachi
            </h2>

            <p className="text-base sm:text-lg text-[#484c50] leading-relaxed text-left">
              FMC (Farooqui Medical Centre), led by Dr. Kashif Farooqui, provides the latest in micro-incision cataract surgery and advanced retina treatments. Delivering advanced ophthalmic care has yielded exceptionally high satisfaction rates for thousands of patients.
            </p>

            <p className="text-base text-[#484c50] leading-relaxed">
              As opposed to congested tertiary facilities, our patients experience remarkably prompt consultations with minimal waiting times. Every individual receives dedicated one-on-one specialist attention, customized surgical planning, and compassionate post-operative recovery support.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Personalized expert consultations",
                "Advanced vitreoretinal surgical suites",
                "Prompt diagnostic evaluations",
                "State-of-the-art diagnostic machinery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#00123A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0f57fb] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl bg-[#0f57fb] hover:bg-[#21252f] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-blue-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Read More & Consult</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#facilities"
                className="px-6 py-3.5 rounded-xl border border-slate-200 hover:border-[#0f57fb] text-[#00123A] font-semibold text-sm transition-colors inline-flex items-center"
              >
                Explore Facilities
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Statistics Bar */}
        <div className="mt-20 pt-12 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {CLINICAL_STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f57fb] font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#00123A]">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

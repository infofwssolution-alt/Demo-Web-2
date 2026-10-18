"use client";

import React, { useState } from "react";
import { SURGERIES_DATA, SurgeryItem } from "@/data/hospital-data";
import { Eye, ShieldAlert, Sparkles, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";

interface SurgeriesSectionProps {
  onOpenBooking: () => void;
}

export const SurgeriesSection: React.FC<SurgeriesSectionProps> = ({ onOpenBooking }) => {
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryItem | null>(null);

  const getVisualHeader = (id: string) => {
    switch (id) {
      case "surg-1":
        return {
          gradient: "from-blue-900 via-indigo-950 to-slate-950",
          caption: "Keratoconus - Corneal Thinning & Irregular Curvature",
          badge: "Corneal Cross-Linking (CXL)",
        };
      case "surg-2":
        return {
          gradient: "from-emerald-950 via-teal-950 to-[#00123A]",
          caption: "Neovascular Glaucoma & Optic Nerve Cupping",
          badge: "Laser Iridotomy & Shunts",
        };
      case "surg-3":
        return {
          gradient: "from-[#00123A] via-sky-950 to-slate-950",
          caption: "Cataracts - Clouded Natural Crystalline Lens",
          badge: "Day-Care Phacoemulsification",
        };
      default:
        return {
          gradient: "from-[#00123A] to-blue-900",
          caption: "Ophthalmic Surgery",
          badge: "Micro-Incision",
        };
    }
  };

  return (
    <section className="py-24 bg-[#FBFCFF] border-t border-slate-100" id="surgeries">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Specialized Procedures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading tracking-tight">
            Our Surgeries
          </h2>
          <p className="text-base text-[#484c50] leading-relaxed">
            From sutureless micro-incision cataract extractions to advanced vitreoretinal repairs, our operating suites are built for clinical excellence.
          </p>
        </div>

        {/* 3-Card Surgery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SURGERIES_DATA.map((surgery) => {
            const visual = getVisualHeader(surgery.id);
            return (
              <div
                key={surgery.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Header with Caption */}
                  <div className={`h-48 w-full bg-gradient-to-tr ${visual.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-[11px] font-semibold text-white tracking-wide border border-white/20">
                        {visual.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="text-xs text-blue-200 font-medium">Medical Condition</div>
                      <div className="text-sm font-bold text-white tracking-tight leading-snug">
                        {surgery.condition}
                      </div>
                    </div>
                  </div>

                  {/* Caption underneath visual */}
                  <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-100 text-[11px] text-slate-500 font-medium italic flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#0f57fb]" />
                    <span>{visual.caption}</span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-2xl font-bold font-heading text-[#00123A] group-hover:text-[#0f57fb] transition-colors">
                      {surgery.title}
                    </h3>

                    <p className="text-sm text-[#484c50] leading-relaxed">
                      {surgery.description}
                    </p>

                    {/* Symptoms Checklist */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-xs font-bold text-[#00123A] uppercase tracking-wider">
                        Common Indicators:
                      </div>
                      {surgery.symptoms.map((symptom) => (
                        <div key={symptom} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0f57fb] shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedSurgery(surgery)}
                    className="w-full py-3 rounded-lg bg-slate-50 hover:bg-[#0f57fb] hover:text-white text-[#00123A] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200/60 cursor-pointer"
                  >
                    <span>Procedure Details & Treatment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-[4px] bg-[#0f57fb] hover:bg-[#21252f] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-blue-500/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>All Surgeries & Case Studies →</span>
          </button>
        </div>
      </div>

      {/* Surgery Detail Modal */}
      {selectedSurgery && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-[#0f57fb] uppercase tracking-wider">
                  Clinical Surgical Protocol
                </span>
                <h3 className="text-2xl font-bold text-[#00123A] font-heading mt-1">
                  {selectedSurgery.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSurgery(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100/80 space-y-1">
              <div className="text-xs font-bold text-[#243673]">Recommended Surgical Intervention:</div>
              <div className="text-sm font-semibold text-[#00123A]">{selectedSurgery.treatment}</div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-[#00123A] uppercase tracking-wider">Clinical Description:</div>
              <p className="text-sm text-[#484c50] leading-relaxed">{selectedSurgery.description}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSurgery(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedSurgery(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-lg bg-[#0f57fb] hover:bg-[#21252f] text-white text-sm font-semibold shadow-md"
              >
                Book Surgical Evaluation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

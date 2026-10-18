"use client";

import React, { useState } from "react";
import { PROCEDURES_DATA, ProcedureDetail } from "@/data/hospital-data";
import { Clock, ShieldCheck, Activity, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProceduresRevampedProps {
  onOpenBookingWithProcedure: (procedureName: string) => void;
}

export const ProceduresRevamped: React.FC<ProceduresRevampedProps> = ({
  onOpenBookingWithProcedure,
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Procedures" },
    { id: "cataract", label: "Cataract (MICS)" },
    { id: "retina", label: "Vitreo-Retina" },
    { id: "glaucoma", label: "Glaucoma Care" },
    { id: "cornea", label: "Cornea & Keratoconus" },
  ];

  const filteredProcedures =
    activeTab === "all"
      ? PROCEDURES_DATA
      : PROCEDURES_DATA.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 bg-[#FBFCFF] border-y border-slate-200/80" id="surgeries">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Surgical & Clinical Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading tracking-tight">
            Advanced Ophthalmic Surgeries
          </h2>
          <p className="text-base text-[#484c50] leading-relaxed">
            International gold-standard procedures engineered for minimal tissue trauma, zero injections, and rapid visual rehabilitation.
          </p>
        </div>

        {/* Animated Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                  isActive ? "text-white" : "text-[#313c4d] hover:text-[#00123A]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProcedureTab"
                    className="absolute inset-0 rounded-full bg-[#0f57fb] shadow-md shadow-blue-500/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProcedures.map((proc) => (
              <motion.div
                key={proc.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group text-left"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f57fb] bg-blue-50 px-2.5 py-0.5 rounded-md">
                        {proc.condition}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-[#00123A] mt-2 group-hover:text-[#0f57fb] transition-colors leading-snug">
                        {proc.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#243673] mt-1">
                        {proc.tagline}
                      </p>
                    </div>

                    <div className="text-right shrink-0 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100">
                      <div className="text-xs font-bold text-emerald-700">{proc.successRate}</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Success Rate</div>
                    </div>
                  </div>

                  <p className="text-sm text-[#484c50] leading-relaxed min-h-[48px]">
                    {proc.description}
                  </p>

                  {/* Surgical Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5 text-left">
                      <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0f57fb]" />
                        <span>Duration</span>
                      </div>
                      <div className="text-xs font-bold text-[#00123A]">{proc.duration}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5 text-left">
                      <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Anesthesia</span>
                      </div>
                      <div className="text-xs font-bold text-[#00123A]">{proc.anesthesia}</div>
                    </div>

                    <div className="col-span-2 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60 space-y-0.5 text-left">
                      <div className="text-[11px] text-[#243673] font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0f57fb]" />
                        <span>Recovery Timeline & System</span>
                      </div>
                      <div className="text-xs font-bold text-[#00123A]">{proc.recovery}</div>
                      <div className="text-[10px] text-slate-500">Platform: {proc.techUsed}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Daycare procedure • No overnight stay needed
                  </div>
                  <button
                    onClick={() => onOpenBookingWithProcedure(proc.title)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0f57fb] hover:bg-[#21252f] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
                  >
                    <span>Schedule Evaluation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

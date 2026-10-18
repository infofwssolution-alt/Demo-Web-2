"use client";

import React from "react";
import { PATIENT_JOURNEY } from "@/data/hospital-data";
import { Scan, UserCheck, Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scan":
        return <Scan className="w-6 h-6 text-[#0f57fb]" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#0f57fb]" />;
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-[#0f57fb]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#0f57fb]" />;
      default:
        return <Scan className="w-6 h-6 text-[#0f57fb]" />;
    }
  };

  return (
    <section className="py-24 bg-white" id="journey">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Clinical Care Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading tracking-tight">
            The Patient Care Journey
          </h2>
          <p className="text-base text-[#484c50] leading-relaxed">
            From the moment you enter our outpatient reception to your next-day visual restoration, experience a completely structured clinical workflow.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_JOURNEY.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between text-left"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0f57fb] transition-colors duration-300 [&_svg]:group-hover:text-white">
                    {getIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono group-hover:text-[#0f57fb] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#00123A] group-hover:text-[#0f57fb] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#484c50] mt-2.5 leading-relaxed min-h-[56px]">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-[#0f57fb] flex items-center gap-1">
                <span>Phase {idx + 1} of 4</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#00123A] to-[#0d2a6b] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-heading">
              Ready for an immediate ophthalmic evaluation?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Walk-in or pre-booked consultation available daily with minimal waiting queue.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-md bg-[#0f57fb] hover:bg-white hover:text-[#00123A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer shadow-lg active:scale-95"
          >
            Book Your Diagnostic Scan →
          </button>
        </div>
      </div>
    </section>
  );
};

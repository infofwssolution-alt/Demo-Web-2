"use client";

import React, { useState } from "react";
import { Eye, ShieldCheck, ArrowRight, Activity, Calendar, Award, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroRevampedProps {
  onOpenBooking: () => void;
  onOpenBookingWithSpecialty?: (spec: string) => void;
}

export const HeroRevamped: React.FC<HeroRevampedProps> = ({
  onOpenBooking,
  onOpenBookingWithSpecialty,
}) => {
  const [activeDiagnosticScan, setActiveDiagnosticScan] = useState<string>("retina");

  const symptoms = [
    { label: "Clouded Lens / Glare", specialty: "Micro-Incision Cataract (MICS)" },
    { label: "Flashes & Sudden Floaters", specialty: "Vitreo-Retina & Macular Diagnostics" },
    { label: "High Eye Pressure", specialty: "Glaucoma Assessment & Pressure Control" },
    { label: "Ghosting & Astigmatism", specialty: "Cornea & Keratoconus Collagen Cross-Linking (CXL)" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[640px] lg:min-h-[720px] flex items-center border-b border-blue-950/80">
      {/* Background Precision Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1f3d_1px,transparent_1px),linear-gradient(to_bottom,#0f1f3d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      {/* Luminous Medical Gradient Aura */}
      <div className="absolute -top-40 right-0 w-[550px] h-[550px] rounded-full bg-[#0f57fb]/20 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[550px] h-[550px] rounded-full bg-blue-700/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authoritative Clinical Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-200 text-xs font-semibold tracking-wide">
              <Award className="w-4 h-4 text-[#BFD1FF]" />
              <span>FRCS (Glasgow) Fellowed • Vitreo-Retinal Center of Excellence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
              Pioneering Microsurgery & Advanced Retina Care
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Led by Dr. Kashif Farooqui (FRCS Glasgow), FMC (Farooqui Medical Centre) delivers sutureless micro-incision cataract extractions and complex retinal interventions. Experience precision diagnostics with an average outpatient check-in of under 12 minutes.
            </p>

            {/* Symptom Quick Consultation Picker */}
            <div className="pt-1 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Filter by Primary Eye Symptom:
              </div>
              <div className="flex flex-wrap gap-2">
                {symptoms.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => {
                      if (onOpenBookingWithSpecialty) {
                        onOpenBookingWithSpecialty(s.specialty);
                      } else {
                        onOpenBooking();
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-[#0f57fb] hover:border-[#0f57fb] text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{s.label}</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-xl bg-[#0f57fb] hover:bg-white hover:text-[#00123A] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-blue-600/30 inline-flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#vision-simulator"
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm tracking-wide backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#BFD1FF]" />
                <span>Launch Vision Simulator</span>
              </a>
            </div>

            {/* Clinical Trust Checkpoints */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Stitches or Injections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Same-Day Daycare Discharge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cashless Insurance Tie-Ups</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Diagnostic Scanner Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-slate-300 tracking-wider">
                    ZEISS BIOMICROSCOPY SCANNER
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  REAL-TIME READOUT
                </span>
              </div>

              {/* Interactive Eye Cross Section Visualizer */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#000B1E] via-[#051c42] to-slate-950 p-6 flex flex-col justify-between overflow-hidden border border-slate-800/80">
                <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                
                {/* Visual Scanner Line Animation */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#0f57fb] to-transparent animate-[pulse_2s_infinite]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#0f57fb]" />
                    <span>Optical Coherence Diagnostics</span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    SIGNAL: 10/10
                  </span>
                </div>

                {/* Center Pupil Waveform */}
                <div className="relative z-10 text-center py-2">
                  <div className="inline-block relative">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#0f57fb] flex items-center justify-center animate-[spin_12s_linear_infinite]">
                      <div className="w-12 h-12 rounded-full border border-blue-400/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#0f57fb] shadow-[0_0_15px_#0f57fb]" />
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-300 mt-2 font-medium">
                    Fundus Macula Center Point: 0.00mm offset
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>IOP: 14.2 mmHg (Normal)</span>
                  <span>C/D Ratio: 0.3</span>
                </div>
              </div>

              {/* Diagnostic Readout Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-medium">Macular Thickness</div>
                  <div className="text-sm font-bold text-white font-mono">245 µm (Healthy)</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-medium">Corneal Endothelium</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">2,650 cells/mm²</div>
                </div>
              </div>

              {/* Surgeon Signature Strip */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Dr. Kashif Farooqui, MD, FRCS</div>
                  <div className="text-[11px] text-slate-400">Chief Vitreo-Retina Consultant</div>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  Consult Specialist
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

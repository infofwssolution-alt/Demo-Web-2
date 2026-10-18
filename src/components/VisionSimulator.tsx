"use client";

import React, { useState } from "react";
import { VISION_CONDITIONS, VisionCondition } from "@/data/hospital-data";
import { Eye, AlertTriangle, ArrowRight, CheckCircle, Sliders, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VisionSimulatorProps {
  onSelectConditionForBooking: (conditionName: string) => void;
}

export const VisionSimulator: React.FC<VisionSimulatorProps> = ({
  onSelectConditionForBooking,
}) => {
  const [activeConditionId, setActiveConditionId] = useState<string>("cataract");
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const condition =
    VISION_CONDITIONS.find((c) => c.id === activeConditionId) ||
    VISION_CONDITIONS[0];

  const getSimulatedStyle = (type: VisionCondition["effectType"]) => {
    switch (type) {
      case "cataract":
        return "filter blur-[3px] brightness-110 contrast-75 sepia-[0.35]";
      case "glaucoma":
        return "filter brightness-90";
      case "keratoconus":
        return "filter blur-[2px] contrast-125 [text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]";
      case "macular":
        return "filter contrast-90";
      default:
        return "";
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="vision-simulator">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-[#0f57fb]" />
            <span>Interactive Educational Diagnostic Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white">
            Interactive Vision Simulator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Experience how common ocular pathologies alter visual perception. Drag the central divider to compare clear 20/20 eyesight with simulated clinical symptoms.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {VISION_CONDITIONS.map((c) => {
            const isActive = c.id === activeConditionId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveConditionId(c.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#0f57fb] border-[#0f57fb] text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>{c.name}</span>
                {c.urgency === "Urgent" && (
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Simulator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          {/* Simulator Viewport (Left / Top) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl select-none group">
              {/* Layer 1: Simulated Impaired Vision (Underneath) */}
              <div className={`absolute inset-0 bg-[#020b18] flex flex-col justify-between p-6 sm:p-8 ${getSimulatedStyle(condition.effectType)}`}>
                <div className="flex items-center justify-between">
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Surgical Eye Clinic • Optometric Chart
                  </div>
                  <span className="px-3 py-1 rounded-md bg-rose-500/30 text-rose-300 text-xs font-bold border border-rose-400/40">
                    Simulated: {condition.name}
                  </span>
                </div>

                {/* Eye Chart Lines to highlight blur & distortion */}
                <div className="space-y-2 text-center py-4">
                  <div className="text-4xl sm:text-5xl font-mono font-extrabold tracking-[0.3em] text-white">
                    E D F C Z P
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold tracking-[0.25em] text-slate-300">
                    F E L O P Z D
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-medium tracking-[0.2em] text-slate-400">
                    D E F P O T E C
                  </div>
                  <div className="text-sm sm:text-base font-mono text-slate-500 tracking-[0.15em]">
                    L E F O D P C T 20/20
                  </div>
                </div>

                {/* Simulated Pathological Glaucoma / Macular Overlay */}
                {condition.effectType === "glaucoma" && (
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.92)_70%)]" />
                )}

                {condition.effectType === "macular" && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-slate-950/90 blur-xl border border-slate-900" />
                  </div>
                )}

                <div className="text-xs text-rose-300 font-medium">
                  {condition.subtitle}
                </div>
              </div>

              {/* Layer 2: Clear 20/20 Vision (Clipped on top based on sliderPosition) */}
              <div
                className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-6 sm:p-8 pointer-events-none border-r-2 border-emerald-400"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Surgical Eye Clinic • Optometric Chart
                  </div>
                  <span className="px-3 py-1 rounded-md bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-400/40">
                    Clear 20/20 Vision (Treated)
                  </span>
                </div>

                <div className="space-y-2 text-center py-4">
                  <div className="text-4xl sm:text-5xl font-mono font-extrabold tracking-[0.3em] text-emerald-400 drop-shadow">
                    E D F C Z P
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold tracking-[0.25em] text-white">
                    F E L O P Z D
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-medium tracking-[0.2em] text-slate-200">
                    D E F P O T E C
                  </div>
                  <div className="text-sm sm:text-base font-mono text-slate-400 tracking-[0.15em]">
                    L E F O D P C T 20/20
                  </div>
                </div>

                <div className="text-xs text-emerald-400 font-semibold">
                  100% Optical Clarity Post-Intervention
                </div>
              </div>

              {/* Slider Scrub Control Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 w-full h-full cursor-ew-resize z-30"
                aria-label="Vision Comparison Slider"
              />

              {/* Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl text-xs font-bold">
                  ↔
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 text-xs text-slate-400 font-medium">
              <span>← Drag left: View Impaired Sight</span>
              <span>Drag right: View Restored 20/20 Sight →</span>
            </div>
          </div>

          {/* Condition Diagnostic Details (Right / Bottom) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={condition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0f57fb] uppercase tracking-wider">
                      Pathological Breakdown
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        condition.urgency === "Urgent"
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {condition.urgency} Evaluation Recommended
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    {condition.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {condition.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {condition.description}
                </p>

                {/* Primary Symptoms */}
                <div className="space-y-2 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Key Clinical Manifestations:</span>
                  </div>
                  {condition.symptoms.map((symptom) => (
                    <div key={symptom} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0f57fb] shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Surgical Pathway */}
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60">
                  <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider">
                    Recommended Surgical Intervention:
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {condition.recommendedSurgery}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectConditionForBooking(condition.name)}
                    className="w-full py-3.5 rounded-lg bg-[#0f57fb] hover:bg-white hover:text-[#00123A] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Evaluation for {condition.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

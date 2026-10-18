"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, ShieldAlert, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EmergencyDockProps {
  onOpenBooking: () => void;
}

export const EmergencyDock: React.FC<EmergencyDockProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-5 right-5 sm:right-8 z-40 max-w-md w-[calc(100%-2.5rem)] sm:w-auto"
        >
          <div className="bg-[#000B1E]/95 backdrop-blur-md border border-blue-900/80 rounded-2xl shadow-2xl p-3.5 sm:p-4 text-white flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Urgent Eye Consultation</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-slate-300">
                  Walk-in OPD Active • Zero Queues
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-[#0f57fb] hover:bg-white hover:text-[#00123A] text-white text-xs font-bold transition-all duration-200 cursor-pointer shadow-md active:scale-95"
              >
                Book Slot
              </button>
              <button
                onClick={() => setIsDismissed(true)}
                aria-label="Dismiss quick dock"
                className="p-1.5 rounded-md text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

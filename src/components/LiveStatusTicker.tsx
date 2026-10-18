"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Clock, Phone, AlertCircle } from "lucide-react";

export const LiveStatusTicker: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#000B1E] text-slate-300 border-b border-blue-950/80 text-[11px] font-medium tracking-wide">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Real-time clinical status badges */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Surgical Suites 1–4: STERILE & ACTIVE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Activity className="w-3.5 h-3.5 text-[#0f57fb]" />
            <span>Retina Emergency Triage: <strong className="text-slate-200">ON-CALL (24/7)</strong></span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#BFD1FF]" />
            <span>Avg. Check-in Wait: <strong className="text-emerald-400">&lt; 12 Mins</strong></span>
          </div>
        </div>

        {/* Right: Hospital live time & urgent dialer */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <span>Karachi Clinic Time:</span>
            <span className="font-mono text-white font-semibold">{time || "Live"}</span>
          </div>
          <a
            href="tel:02134531810"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-white font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency: (021) 34531810</span>
          </a>
        </div>
      </div>
    </div>
  );
};

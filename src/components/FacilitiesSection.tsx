"use client";

import React from "react";
import { FACILITIES_DATA } from "@/data/hospital-data";
import { HeartHandshake, Activity, Pill, Check, ArrowRight } from "lucide-react";

interface FacilitiesSectionProps {
  onOpenBooking: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-8 h-8 text-[#0f57fb]" />;
      case "Activity":
        return <Activity className="w-8 h-8 text-[#0f57fb]" />;
      case "Pill":
        return <Pill className="w-8 h-8 text-[#0f57fb]" />;
      default:
        return <Activity className="w-8 h-8 text-[#0f57fb]" />;
    }
  };

  return (
    <section className="py-24 bg-white" id="facilities">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Clinical Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading tracking-tight">
            Our Facilities
          </h2>
          <p className="text-base text-[#484c50] leading-relaxed">
            Engineered with strict hygienic standards, comfortable waiting lounges, and state-of-the-art diagnostic suites to guarantee a seamless patient experience.
          </p>
        </div>

        {/* 3-Column Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Visual Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-[#0f57fb] transition-colors duration-300 [&_svg]:group-hover:text-white">
                  {getIcon(facility.icon)}
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#00123A] group-hover:text-[#0f57fb] transition-colors leading-snug">
                  {facility.title}
                </h3>

                <p className="text-xs font-semibold text-[#243673] uppercase tracking-wider mt-1 mb-4">
                  {facility.tagline}
                </p>

                <p className="text-sm text-[#484c50] leading-relaxed mb-6 min-h-[72px]">
                  {facility.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {facility.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-[#0f57fb] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={onOpenBooking}
                  className="text-sm font-bold text-[#0f57fb] group-hover:text-[#21252f] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Facilities Center Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-[4px] bg-[#0f57fb] hover:bg-[#21252f] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-blue-500/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>All Facilities & Tours →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

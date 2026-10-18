"use client";

import React, { useState } from "react";
import { PATIENT_REVIEWS } from "@/data/hospital-data";
import { Star, Quote, Play, CheckCircle2, ArrowRight } from "lucide-react";

export const PatientReviews: React.FC = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const activeReview = PATIENT_REVIEWS[activeReviewIdx];

  return (
    <section className="py-20 lg:py-28 bg-white" id="reviews">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Patient Testimonial Video Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[4/3] w-full bg-gradient-to-tr from-[#00123A] via-[#0d285a] to-[#0f57fb]/70 p-6 flex flex-col justify-between text-white relative">
                <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
                
                {/* Header Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-blue-200 border border-white/15">
                    Verified Video Testimonial
                  </span>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Center Play Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center py-4">
                  <div className="w-16 h-16 rounded-full bg-white text-[#00123A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current translate-x-0.5 text-[#0f57fb]" />
                  </div>
                  <div className="mt-3 text-xs font-semibold text-white/90">
                    Watch Recovery Interview
                  </div>
                </div>

                {/* Patient Signature Strip */}
                <div className="relative z-10 bg-black/40 backdrop-blur-md -mx-6 -mb-6 p-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{activeReview.patientName}</div>
                    <div className="text-xs text-blue-200">{activeReview.conditionTreated}</div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Patient</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Switcher Tabs */}
            <div className="flex items-center gap-2 mt-4 justify-center sm:justify-start">
              {PATIENT_REVIEWS.map((rev, idx) => (
                <button
                  key={rev.id}
                  onClick={() => setActiveReviewIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeReviewIdx === idx
                      ? "bg-[#0f57fb] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {rev.patientName.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Review Narrative & Authentic Experience */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-block">
              <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Patient Feedback
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading leading-tight tracking-tight">
              {activeReview.patientName}
            </h2>

            {/* Glowing Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-amber-400">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                (5.0 / 5.0 Clinical Rating)
              </span>
            </div>

            {/* Blockquote with primary accent border */}
            <div className="relative p-6 rounded-2xl bg-blue-50/40 border-l-4 border-[#0f57fb] border border-blue-100/50">
              <Quote className="w-8 h-8 text-[#0f57fb]/30 absolute top-4 right-4" />
              <p className="text-base sm:text-lg font-bold text-[#00123A] leading-relaxed italic">
                “{activeReview.quoteHighlight}”
              </p>
            </div>

            <p className="text-base text-[#484c50] leading-relaxed">
              {activeReview.reviewText}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-[4px] bg-[#0f57fb] hover:bg-[#21252f] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md inline-flex items-center gap-2"
              >
                <span>More Patient Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

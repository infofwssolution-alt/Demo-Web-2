"use client";

import React, { useState } from "react";
import { FAQ_DATA, FAQItem } from "@/data/hospital-data";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqAccordionProps {
  onOpenBooking: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string>("faq-1");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const categories = ["All", "Cataract", "Retina", "General", "Safety"];

  const filteredFaqs =
    categoryFilter === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((f) => f.category === categoryFilter);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: FAQ Header & Support Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-block">
              <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Patient Inquiries
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading tracking-tight leading-tight">
              Frequently Asked Clinical Questions
            </h2>

            <p className="text-base text-[#484c50] leading-relaxed">
              Transparent answers regarding procedural safety, topical drop anesthesia, recovery timeframes, and post-operative spectacle independence.
            </p>

            {/* Direct Assistance Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0f57fb] text-white flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#00123A]">Have a specific eye concern?</div>
                  <div className="text-xs text-slate-500">Speak directly with an ophthalmic coordinator</div>
                </div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                Our surgical counselors are available during hospital OPD hours to explain pricing, insurance cashless panels, and pre-op fasting rules.
              </div>
              <div className="pt-1">
                <a
                  href="tel:02134531810"
                  className="w-full py-2.5 rounded-lg bg-white border border-slate-200 text-[#00123A] hover:border-[#0f57fb] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Call Hotline: (021) 34531810</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    categoryFilter === cat
                      ? "bg-[#0f57fb] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#0f57fb]/40 bg-blue-50/20 shadow-md"
                        : "border-slate-200/90 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#00123A] font-heading">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0f57fb] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 text-sm text-[#484c50] leading-relaxed border-t border-blue-100/50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Play, X, Eye, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";

export const VideoSpotlight: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 lg:py-24 bg-[#FBFCFF] border-y border-slate-100" id="video-guide">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Video Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 aspect-video group cursor-pointer"
                 onClick={() => setIsPlaying(true)}>
              {/* Video Thumbnail Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00123A] via-[#052141] to-blue-900 opacity-90 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Subtle clinical design lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0f57fb] group-hover:bg-[#21252f] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </div>
                <div className="mt-4 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/20">
                  Click to Watch: Common Eye Health Mistakes (7:42)
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#BFD1FF]" />
                  <span>Educational Eye Health Series</span>
                </span>
                <span className="text-slate-400">Consultant: Dr. Kashif Farooqui</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Pitfalls */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block">
              <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Educational Video Series
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00123A] font-heading leading-tight tracking-tight">
              Common Eye Health Mistakes
            </h2>

            <p className="text-base sm:text-lg text-[#484c50] leading-relaxed text-left">
              Dr. Kashif Farooqui explains the most frequent errors people make with their daily vision care, shedding light on the hidden culprits behind progressive weak sight, premature eyestrain, and recurrent headaches in middle-aged individuals.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Self-prescribing over-the-counter reading glasses",
                  desc: "Generic magnifiers do not account for astigmatism or unequal refractive power between eyes.",
                },
                {
                  title: "Ignoring early eye floaters or light flashes",
                  desc: "New onset floaters can signal vitreal traction or peripheral retinal tears requiring laser sealing.",
                },
                {
                  title: "Skipping dilated annual glaucoma screenings",
                  desc: "Elevated intraocular pressure destroys nerve fibers without causing pain or early warning signs.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0f57fb] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#00123A]">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsPlaying(true)}
                className="px-7 py-3.5 rounded-[4px] bg-[#0f57fb] hover:bg-[#21252f] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Watch Full Video</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#0f57fb]" />
                <span className="font-bold text-white text-sm sm:text-base">
                  Dr. Kashif Farooqui: Common Mistakes in Eye Care
                </span>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Embed / Accessible Video Player */}
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/PK5vrMIWgtY?autoplay=1"
                title="Common Eye Health Mistakes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
              <span>Educational Clinical Guidance • FMC (Farooqui Medical Centre)</span>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-white hover:text-[#0f57fb] font-semibold"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

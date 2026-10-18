"use client";

import React from "react";
import { DOCTORS_DATA, DoctorProfile } from "@/data/hospital-data";
import { Award, Calendar, CheckCircle2, Stethoscope, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface DoctorRosterProps {
  onSelectDoctorForBooking: (doctorName: string) => void;
}

export const DoctorRoster: React.FC<DoctorRosterProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section className="py-24 bg-white" id="surgeons">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#0f57fb] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Medical Faculty & Consultants
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00123A] font-heading tracking-tight">
            Board-Certified Ophthalmic Specialists
          </h2>
          <p className="text-base text-[#484c50] leading-relaxed">
            Our surgical directors hold prestigious UK and European fellowship credentials, ensuring every case is guided by decades of microsurgical leadership.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Doctor Visual Header Banner */}
                  <div className="h-44 bg-gradient-to-tr from-[#00123A] via-[#0b2457] to-[#0f57fb] p-6 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-[11px] font-semibold text-blue-200 border border-white/20">
                        {doctor.experience} Experience
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <Stethoscope className="w-4 h-4 text-[#BFD1FF]" />
                      </div>
                    </div>

                    <div className="relative z-10 text-left">
                      <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider line-clamp-1">
                        {doctor.specialty}
                      </div>
                      <div className="text-xl font-bold text-white font-heading mt-0.5">
                        {doctor.name}
                      </div>
                    </div>
                  </div>

                  {/* Subtitle & Surgery Volume */}
                  <div className="p-6 sm:p-7 space-y-4 text-left">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Completed Surgeries:</span>
                      <span className="font-extrabold text-[#0f57fb] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {doctor.surgeriesCompleted}
                      </span>
                    </div>

                    {/* Qualifications */}
                    <div>
                      <div className="text-xs font-bold text-[#00123A] uppercase tracking-wider mb-2">
                        Accreditations & Degrees:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.qualifications.map((q) => (
                          <span
                            key={q}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                          >
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Biography */}
                    <p className="text-xs text-slate-600 leading-relaxed min-h-[56px]">
                      {doctor.description}
                    </p>

                    {/* Availability */}
                    <div className="pt-2 flex items-center gap-2 text-xs text-[#00123A] font-semibold bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Clock className="w-4 h-4 text-[#0f57fb] shrink-0" />
                      <span>OPD: {doctor.availability}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectDoctorForBooking(doctor.name)}
                    className="w-full py-3.5 rounded-lg bg-[#0f57fb] hover:bg-[#21252f] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book with {doctor.name}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

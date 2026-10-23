"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, User, Phone, Sparkles, UploadCloud, FileText, Trash2 } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty,
  initialDoctor,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialization: "General Comprehensive Eye Checkup",
    preferredTime: "Morning OPD (09:30 AM – 12:00 PM)",
    notes: "",
  });

  const [attachedFiles, setAttachedFiles] = useState<{ name: string; size: string }[]>([]);
  const [isDragOverFileZone, setIsDragOverFileZone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialSpecialty) {
      setFormData((prev) => ({
        ...prev,
        specialization: initialSpecialty,
        notes: initialDoctor ? `Preferred Consultant: ${initialDoctor}` : prev.notes,
      }));
    } else if (initialDoctor) {
      setFormData((prev) => ({
        ...prev,
        notes: `Preferred Consultant: ${initialDoctor}`,
      }));
    }
  }, [initialSpecialty, initialDoctor, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#000B1E] text-white p-6 sm:p-7 flex items-center justify-between border-b border-blue-900/60">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Rapid Clinical Appointment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Schedule Specialist Consultation
            </h3>
            <p className="text-xs text-slate-300">
              Dr. Kashif Farooqui Eye Hospital • FMC (Farooqui Medical Centre)
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
              </div>
              <h4 className="text-2xl font-bold text-[#00123A] font-heading">
                Appointment Requested!
              </h4>
              <p className="text-sm text-[#484c50] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#00123A]">{formData.name}</span>. Our clinical coordinator will call you at{" "}
                <span className="font-semibold text-[#00123A]">{formData.phone}</span> within 2 hours to confirm your OPD examination slot.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 text-left space-y-1">
                <div><span className="font-bold">Department:</span> {formData.specialization}</div>
                <div><span className="font-bold">Slot:</span> {formData.preferredTime}</div>
                <div><span className="font-bold">Clinic Desk:</span> (021) 34531810</div>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#0f57fb] hover:bg-[#21252f] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  Done & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#00123A] uppercase tracking-wider mb-1.5 text-left">
                  Patient Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. William Afzal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#00123A] placeholder:text-slate-400 focus:border-[#0f57fb] focus:ring-2 focus:ring-[#0f57fb]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#00123A] uppercase tracking-wider mb-1.5 text-left">
                  Contact Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0311-2845342 or (021) 34531810"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm text-[#00123A] placeholder:text-slate-400 focus:border-[#0f57fb] focus:ring-2 focus:ring-[#0f57fb]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#00123A] uppercase tracking-wider mb-1.5 text-left">
                  Clinical Specialty / Department
                </label>
                <select
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#00123A] focus:border-[#0f57fb] focus:ring-2 focus:ring-[#0f57fb]/20 outline-none transition-all bg-white"
                >
                  <option>General Comprehensive Eye Checkup</option>
                  <option>Vitreo-Retina & Macular Diagnostics</option>
                  <option>Micro-Incision Cataract (MICS)</option>
                  <option>Glaucoma Assessment & Pressure Control</option>
                  <option>Cornea & Keratoconus Collagen Cross-Linking (CXL)</option>
                  <option>Pediatric & Refractive Eye Examination</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#00123A] uppercase tracking-wider mb-1.5 text-left">
                  Preferred OPD Session
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 has-[:checked]:border-[#0f57fb] has-[:checked]:bg-blue-50/50 transition-all">
                    <input
                      type="radio"
                      name="preferredTime"
                      checked={formData.preferredTime.includes("Morning")}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          preferredTime: "Morning OPD (09:30 AM – 12:00 PM)",
                        })
                      }
                      className="text-[#0f57fb]"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-[#00123A]">Morning OPD</div>
                      <div className="text-slate-500 text-[11px]">9:30 AM – 12:00 PM</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 has-[:checked]:border-[#0f57fb] has-[:checked]:bg-blue-50/50 transition-all">
                    <input
                      type="radio"
                      name="preferredTime"
                      checked={formData.preferredTime.includes("Evening")}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          preferredTime: "Evening OPD (05:00 PM – 07:30 PM)",
                        })
                      }
                      className="text-[#0f57fb]"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-[#00123A]">Evening OPD</div>
                      <div className="text-slate-500 text-[11px]">5:00 PM – 7:30 PM</div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#00123A] uppercase tracking-wider mb-1.5 text-left">
                  Notes / Specific Consultant (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. blurred vision, floaters, Dr. Kashif Farooqui referral"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#00123A] placeholder:text-slate-400 focus:border-[#0f57fb] focus:ring-2 focus:ring-[#0f57fb]/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Drag & Drop Prescription / Medical Reports Zone */}
              <div>
                <label className="block text-xs font-semibold text-[#00123A] uppercase tracking-wider mb-1.5 text-left">
                  Attach Prior OCT Scan or Prescription (Drag & Drop)
                </label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOverFileZone(true);
                  }}
                  onDragLeave={() => setIsDragOverFileZone(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragOverFileZone(false);
                    const files = Array.from(e.dataTransfer.files);
                    if (files.length > 0) {
                      const newFiles = files.map((f) => ({
                        name: f.name,
                        size: `${(f.size / 1024).toFixed(1)} KB`,
                      }));
                      setAttachedFiles((prev) => [...prev, ...newFiles]);
                    }
                  }}
                  className={`p-4 rounded-xl border-2 border-dashed transition-all text-center cursor-pointer ${
                    isDragOverFileZone
                      ? "border-[#0f57fb] bg-blue-50/80 scale-[1.01]"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100/70"
                  }`}
                  onClick={() => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = ".pdf,.jpg,.jpeg,.png";
                    input.multiple = true;
                    input.onchange = (e: any) => {
                      const files = Array.from(e.target.files as FileList);
                      if (files.length > 0) {
                        const newFiles = files.map((f) => ({
                          name: f.name,
                          size: `${(f.size / 1024).toFixed(1)} KB`,
                        }));
                        setAttachedFiles((prev) => [...prev, ...newFiles]);
                      }
                    };
                    input.click();
                  }}
                >
                  <UploadCloud className="w-6 h-6 text-[#0f57fb] mx-auto mb-1" />
                  <div className="text-xs font-semibold text-[#00123A]">
                    {isDragOverFileZone ? "Drop your medical files here" : "Drag & Drop Scans / Reports here"}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    or click to browse from device (PDF, JPG, PNG)
                  </div>
                </div>

                {/* Attached Files List */}
                {attachedFiles.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {attachedFiles.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg bg-blue-50/80 border border-blue-100 text-xs text-[#00123A]"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-3.5 h-3.5 text-[#0f57fb] shrink-0" />
                          <span className="font-semibold truncate">{file.name}</span>
                          <span className="text-[10px] text-slate-500">({file.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAttachedFiles((prev) => prev.filter((_, idx) => idx !== i));
                          }}
                          className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0f57fb] hover:bg-[#21252f] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Booking →</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                Educational mock appointment form • All clinical data simulated locally.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

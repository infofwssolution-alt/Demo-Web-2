"use client";

import React, { useState, useEffect } from "react";
import {
  GripVertical,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  RotateCcw,
  Check,
  Sparkles,
  SlidersHorizontal,
  X,
  Layers,
  ChevronRight,
  Info,
} from "lucide-react";

export interface SectionItem {
  id: string;
  name: string;
  category: string;
  description: string;
  visible: boolean;
}

export const DEFAULT_SECTIONS: SectionItem[] = [
  {
    id: "hero",
    name: "Hero & Diagnostic Scanner",
    category: "Introduction",
    description: "Cinematic ophthalmic hero, Zeiss biomicrosurgical scanner & symptom quick triage",
    visible: true,
  },
  {
    id: "vision-simulator",
    name: "Interactive Vision Simulator",
    category: "Diagnostic Tool",
    description: "Pathological 20/20 slider comparison for Cataract, Glaucoma, Keratoconus & Macular",
    visible: true,
  },
  {
    id: "about",
    name: "About Clinical Excellence",
    category: "Institution",
    description: "Consultant accreditation, wait time benchmarks (< 15 mins) & verified stats",
    visible: true,
  },
  {
    id: "surgeons",
    name: "Specialist Surgeons Roster",
    category: "Medical Faculty",
    description: "FRCS UK & European fellowed consultants with 15,000+ completed surgeries",
    visible: true,
  },
  {
    id: "procedures",
    name: "Categorized Eye Surgeries",
    category: "Surgical Suites",
    description: "MICS Cataract, Vitreo-Retina PPV, Glaucoma SLT & Corneal Cross-Linking (CXL)",
    visible: true,
  },
  {
    id: "journey",
    name: "Patient Care Journey",
    category: "Care Pathway",
    description: "4-step pathway from digital ocular scan to same-day 24h recovery",
    visible: true,
  },
  {
    id: "facilities",
    name: "Sterile Clinical Facilities",
    category: "Infrastructure",
    description: "Laminar airflow OR suites, spectral OCT diagnostics & in-house dispensing pharmacy",
    visible: true,
  },
  {
    id: "video-guide",
    name: "Educational Video Spotlight",
    category: "Patient Education",
    description: "Dr. Kashif Farooqui guide on avoiding irreversible vision mistakes",
    visible: true,
  },
  {
    id: "reviews",
    name: "Patient Recovery Reviews",
    category: "Testimonials",
    description: "5.0-star verified surgical patient interviews and testimonials",
    visible: true,
  },
  {
    id: "faq",
    name: "Clinical Questions & Answers",
    category: "Patient Guidance",
    description: "Topical drop anesthesia, painless recovery, and emergency detachment triage",
    visible: true,
  },
  {
    id: "consultation-banner",
    name: "Consultation Hotline Banner",
    category: "Quick Action",
    description: "High-contrast hotline access and rapid appointment scheduler",
    visible: true,
  },
];

const STORAGE_KEY = "fmc_web_section_layout_v1";

interface DragDropLayoutManagerProps {
  sections: SectionItem[];
  setSections: React.Dispatch<React.SetStateAction<SectionItem[]>>;
  isDragMode: boolean;
  setIsDragMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DragDropLayoutManager: React.FC<DragDropLayoutManagerProps> = ({
  sections,
  setSections,
  isDragMode,
  setIsDragMode,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show transient toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Reorder logic
  const reorderSections = (sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;

    setSections((prev) => {
      const sourceIndex = prev.findIndex((s) => s.id === sourceId);
      const targetIndex = prev.findIndex((s) => s.id === targetId);
      if (sourceIndex === -1 || targetIndex === -1) return prev;

      const updated = [...prev];
      const [moved] = updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, moved);

      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });

    const targetSection = sections.find((s) => s.id === sourceId);
    showToast(`"${targetSection?.name || 'Section'}" moved successfully!`);
  };

  const moveUp = (id: string) => {
    const idx = sections.findIndex((s) => s.id === id);
    if (idx <= 0) return;
    const prevId = sections[idx - 1].id;
    reorderSections(id, prevId);
  };

  const moveDown = (id: string) => {
    const idx = sections.findIndex((s) => s.id === id);
    if (idx === -1 || idx >= sections.length - 1) return;
    const nextId = sections[idx + 1].id;
    reorderSections(id, nextId);
  };

  const toggleVisibility = (id: string) => {
    setSections((prev) => {
      const updated = prev.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s));
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
    const s = sections.find((item) => item.id === id);
    showToast(`"${s?.name}" ${s?.visible ? "hidden" : "visible"}`);
  };

  const resetToDefault = () => {
    setSections(DEFAULT_SECTIONS);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
    showToast("Restored original website layout!");
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#00123A] text-white px-5 py-2.5 rounded-full shadow-2xl border border-blue-500/40 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Drag & Drop Control Toolbar */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsDragMode(!isDragMode)}
          aria-label="Toggle Drag & Drop Layout Mode"
          className={`px-4 py-3 rounded-xl shadow-2xl border text-xs font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer backdrop-blur-md active:scale-95 ${
            isDragMode
              ? "bg-[#0f57fb] text-white border-blue-400 shadow-blue-500/30 ring-4 ring-blue-500/20"
              : "bg-[#000B1E]/95 text-slate-200 hover:text-white border-blue-900/60 hover:bg-[#00123A]"
          }`}
        >
          <GripVertical className="w-4 h-4" />
          <span>{isDragMode ? "Drag & Drop Mode: ACTIVE" : "Customize Layout"}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>

        <button
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open Section Organizer Drawer"
          className="p-3 rounded-xl bg-white text-[#00123A] border border-slate-200 shadow-xl hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95"
          title="Open Whole Web Layout Organizer"
        >
          <Layers className="w-4 h-4 text-[#0f57fb]" />
        </button>

        {isDragMode && (
          <button
            onClick={resetToDefault}
            aria-label="Reset layout to default"
            className="p-3 rounded-xl bg-white text-slate-600 border border-slate-200 shadow-xl hover:text-rose-600 hover:border-rose-200 transition-all cursor-pointer flex items-center justify-center"
            title="Reset to default order"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Top Banner Warning When Drag Mode is Active */}
      {isDragMode && (
        <div className="sticky top-[73px] z-30 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-2.5 px-4 shadow-lg border-b border-blue-400/40 animate-in slide-in-from-top duration-200">
          <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-white/20">
                <GripVertical className="w-4 h-4" />
              </span>
              <span className="font-bold">Drag & Drop Mode Active:</span>
              <span className="text-blue-100 hidden sm:inline">
                Grab any section header handle to reorder the entire website in real-time.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="underline hover:text-blue-100 font-semibold cursor-pointer"
              >
                Open Mini Organizer
              </button>
              <button
                onClick={resetToDefault}
                className="px-2.5 py-1 rounded bg-white/15 hover:bg-white/25 text-white font-semibold transition-colors cursor-pointer"
              >
                Reset Default
              </button>
              <button
                onClick={() => setIsDragMode(false)}
                className="px-3 py-1 rounded bg-white text-[#00123A] font-bold hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-out Reorder Canvas / Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 bg-[#000B1E] text-white flex items-center justify-between border-b border-blue-900/60">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0f57fb] flex items-center justify-center text-white shadow-md">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading">
                    Whole Web Layout Customizer
                  </h3>
                  <p className="text-[11px] text-blue-200">
                    Drag and drop section cards to reorder the website
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instruction Tip */}
            <div className="px-5 py-3 bg-blue-50/80 border-b border-blue-100 text-xs text-[#243673] flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#0f57fb]" />
              <span>
                Drag sections to reorder, use arrows for 1-click moves, or toggle the eye icon to hide/show sections.
              </span>
            </div>

            {/* Draggable Section List in Drawer */}
            <div className="flex-1 overflow-y-auto p-5 space-y-2.5">
              {sections.map((section, idx) => {
                const isDragging = draggedId === section.id;
                const isOver = dragOverId === section.id;

                return (
                  <div
                    key={section.id}
                    draggable
                    onDragStart={() => setDraggedId(section.id)}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOverId(section.id);
                    }}
                    onDragLeave={() => {
                      if (dragOverId === section.id) setDragOverId(null);
                    }}
                    onDrop={() => {
                      if (draggedId) {
                        reorderSections(draggedId, section.id);
                        setDraggedId(null);
                        setDragOverId(null);
                      }
                    }}
                    onDragEnd={() => {
                      setDraggedId(null);
                      setDragOverId(null);
                    }}
                    className={`rounded-xl border p-3 transition-all duration-200 select-none cursor-grab active:cursor-grabbing ${
                      isDragging
                        ? "opacity-40 scale-95 border-dashed border-[#0f57fb]"
                        : isOver
                        ? "border-[#0f57fb] bg-blue-50/80 shadow-md ring-2 ring-blue-500/20 translate-x-1"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="text-slate-400 hover:text-[#0f57fb]">
                          <GripVertical className="w-4 h-4" />
                        </div>
                        <div className="w-6 h-6 rounded-md bg-slate-100 text-[#00123A] text-xs font-bold font-mono flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-[#00123A] flex items-center gap-2">
                            <span>{section.name}</span>
                            {!section.visible && (
                              <span className="text-[10px] text-slate-400 uppercase font-semibold">(Hidden)</span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {section.category}
                          </div>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            moveUp(section.id);
                          }}
                          disabled={idx === 0}
                          aria-label="Move Section Up"
                          className="p-1 rounded text-slate-400 hover:text-[#0f57fb] disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            moveDown(section.id);
                          }}
                          disabled={idx === sections.length - 1}
                          aria-label="Move Section Down"
                          className="p-1 rounded text-slate-400 hover:text-[#0f57fb] disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleVisibility(section.id);
                          }}
                          aria-label={section.visible ? "Hide Section" : "Show Section"}
                          className={`p-1 rounded transition-colors cursor-pointer ${
                            section.visible ? "text-slate-400 hover:text-slate-700" : "text-amber-500"
                          }`}
                        >
                          {section.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={resetToDefault}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-white hover:text-rose-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>

                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    showToast("Layout saved to browser storage!");
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#0f57fb] hover:bg-[#21252f] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Save & Apply
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                Layout automatically syncs with the live web view.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

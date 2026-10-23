"use client";

import React, { useState } from "react";
import { GripVertical, ArrowUp, ArrowDown, Eye, EyeOff } from "lucide-react";
import { SectionItem } from "./DragDropLayoutManager";

interface DraggableSectionWrapperProps {
  section: SectionItem;
  index: number;
  totalSections: number;
  isDragMode: boolean;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onDropSection: (sourceId: string, targetId: string) => void;
  children: React.ReactNode;
}

export const DraggableSectionWrapper: React.FC<DraggableSectionWrapperProps> = ({
  section,
  index,
  totalSections,
  isDragMode,
  onMoveUp,
  onMoveDown,
  onToggleVisibility,
  onDropSection,
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  if (!section.visible && !isDragMode) {
    return null;
  }

  return (
    <div
      id={`section-wrapper-${section.id}`}
      draggable={isDragMode}
      onDragStart={(e) => {
        if (!isDragMode) return;
        setIsDragging(true);
        e.dataTransfer.setData("text/plain", section.id);
        e.dataTransfer.effectAllowed = "move";
      }}
      onDragOver={(e) => {
        if (!isDragMode) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        setIsDragOver(true);
      }}
      onDragLeave={() => {
        setIsDragOver(false);
      }}
      onDrop={(e) => {
        if (!isDragMode) return;
        e.preventDefault();
        setIsDragOver(false);
        const sourceId = e.dataTransfer.getData("text/plain");
        if (sourceId && sourceId !== section.id) {
          onDropSection(sourceId, section.id);
        }
      }}
      onDragEnd={() => {
        setIsDragging(false);
        setIsDragOver(false);
      }}
      className={`relative transition-all duration-300 ${
        isDragging
          ? "opacity-30 scale-[0.98] ring-4 ring-dashed ring-[#0f57fb]"
          : isDragOver
          ? "ring-4 ring-[#0f57fb] ring-offset-4 shadow-2xl"
          : ""
      } ${!section.visible ? "opacity-40 grayscale" : ""}`}
    >
      {/* Drop indicator banner when hovered during drag */}
      {isDragOver && (
        <div className="absolute -top-3 left-0 right-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="px-4 py-1 rounded-full bg-[#0f57fb] text-white text-xs font-bold shadow-lg shadow-blue-500/50 flex items-center gap-1.5 animate-bounce">
            <span>Drop here to place before &ldquo;{section.name}&rdquo;</span>
          </div>
        </div>
      )}

      {/* Persistent Section Drag Header in Drag Mode */}
      {isDragMode && (
        <div className="bg-[#000B1E] text-white border-y border-blue-900/80 px-4 sm:px-6 py-2.5 z-30 sticky top-[109px] backdrop-blur-md shadow-md flex items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-3">
            <div
              className="p-1.5 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-[#0f57fb] hover:text-white cursor-grab active:cursor-grabbing transition-colors"
              title="Drag this handle to reorder section"
            >
              <GripVertical className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-white/10 text-[#BFD1FF] text-xs font-mono font-bold flex items-center justify-center">
                #{index + 1}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {section.name}
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 hidden sm:inline">
                {section.category}
              </span>
              {!section.visible && (
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Hidden from visitors
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onMoveUp(section.id)}
              disabled={index === 0}
              aria-label="Move Section Up"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#0f57fb] text-white disabled:opacity-20 disabled:hover:bg-white/10 transition-colors cursor-pointer"
              title="Move section up"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            <button
              onClick={() => onMoveDown(section.id)}
              disabled={index === totalSections - 1}
              aria-label="Move Section Down"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#0f57fb] text-white disabled:opacity-20 disabled:hover:bg-white/10 transition-colors cursor-pointer"
              title="Move section down"
            >
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => onToggleVisibility(section.id)}
              aria-label={section.visible ? "Hide Section" : "Show Section"}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                section.visible
                  ? "bg-white/10 hover:bg-white/20 text-slate-300"
                  : "bg-amber-500/30 text-amber-300 border border-amber-400/40"
              }`}
              title={section.visible ? "Hide this section" : "Unhide this section"}
            >
              {section.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Render the actual section content */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

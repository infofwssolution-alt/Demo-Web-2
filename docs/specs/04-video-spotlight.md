# Section 04: Educational Video Spotlight ("Common Mistakes in Eye Care")

## Purpose
Replicates the video feature on the original site where the chief consultant educates viewers on digital eye strain, middle-aged refractive changes, and improper self-medication.

## DOM Structure & Semantic Layout
- `<section className="py-20 bg-[#FBFCFF] border-y border-[#BFD1FF]/30">`
  - `<div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">`
    - **Left Column**: Interactive 16:9 Video Showcase Component
      - Custom video player preview card with overlay play button, high-resolution medical consultation thumbnail, glowing play icon hover effect, and responsive aspect-ratio container (`aspect-video rounded-2xl overflow-hidden shadow-lg`).
      - Clicking opens an accessible video modal player.
    - **Right Column**: Narrative and Educational Context
      - Overline: `<span className="text-[#0f57fb] font-semibold text-sm tracking-wider uppercase">Educational Guidance</span>`
      - Heading: `<h2 className="text-3xl sm:text-4xl font-bold text-[#00123A] mt-2">Common Eye Care Mistakes</h2>`
      - Narrative: Dr. Vance explains the frequent missteps people make with screen time, OTC eye drops, and ignoring sudden visual floaters or blurred vision.
      - Bullet Highlights:
        - "Recognizing the signs of silent glaucoma progression"
        - "Why off-the-shelf reading glasses can mask underlying refractive errors"
        - "Digital 20-20-20 rule for reduced asthenopia"
      - Action Link: "Browse All Educational Videos →" button.

## Design Tokens (Tailwind v4 / OKLCH)
- **Background**: `bg-[#FBFCFF]`
- **Card Shadow**: `shadow-md hover:shadow-xl transition-shadow`
- **Play Button**: `w-16 h-16 rounded-full bg-[#0f57fb] text-white flex items-center justify-center hover:scale-110 transition-transform`

## Responsive Behavior
- **Desktop**: Side-by-side video on left, explanatory text on right.
- **Mobile/Tablet**: Stacks cleanly with video player spanning 100% width.

# Section 06: Our Surgeries & Specializations

## Purpose
Detail the specialized surgical procedures performed at the institute, educating patients on conditions such as Keratoconus, Neovascular Glaucoma, and Cataracts.

## DOM Structure & Semantic Layout
- `<section className="py-24 bg-[#FBFCFF]" id="surgeries">`
  - `<div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">`
    - **Header Block**:
      - Title: `<h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00123A]">Our Surgeries</h2>`
      - Subtext: "Comprehensive microsurgical eye procedures performed under advanced surgical microscopes with sterile HEPA laminar flow operating suites."
    - **3-Card Surgery Grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12`)**:
      - **Card 1: Cornea & Keratoconus**
        - Medical Illustration / Photo: Corneal topography & cross-linking visual.
        - Caption: "Keratoconus - Corneal Thinning & Structural Correction"
        - Heading: `Cornea & Ocular Surface`
        - Description: Treatment of corneal dystrophies, trauma, infections, and progressive thinning. Offering corneal collagen cross-linking (CXL) and partial-thickness keratoplasty.
        - Surgical Badge: "Cross-Linking & Grafting"
      - **Card 2: Glaucoma & Pressure Control**
        - Medical Illustration / Photo: Slit-lamp evaluation of trabecular meshwork.
        - Caption: "Neovascular Glaucoma & Trabecular Drainage"
        - Heading: `Glaucoma Management`
        - Description: Early diagnosis of elevated intraocular pressure, laser peripheral iridotomy, and trabeculectomy procedures to prevent optic nerve atrophy.
        - Surgical Badge: "MIGS & Laser Therapy"
      - **Card 3: Cataract & Premium IOLs**
        - Medical Illustration / Photo: Clouded lens examination and intraocular lens.
        - Caption: "Cataracts - Advanced Oculistic Examination"
        - Heading: `Micro-Incision Cataract Surgery`
        - Description: Sutureless phacoemulsification with toric, multifocal, and trifocal premium intraocular lenses restoring crystal-clear distance and near vision.
        - Surgical Badge: "Day-Care Phacoemulsification"
    - **Bottom CTA**:
      - "View All Surgeries & Consultations →" button.

## Design Tokens (Tailwind v4 / OKLCH)
- **Image Container**: `aspect-[16/10] overflow-hidden rounded-t-2xl relative`
- **Card**: `bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`
- **Heading**: `text-xl font-bold text-[#00123A]`
- **Button**: `bg-[#0f57fb] hover:bg-[#21252f] text-white`

## Responsive Behavior
- **>= 1024px**: 3 columns.
- **768px - 1023px**: 2 columns + 1 centered.
- **< 768px**: 1 column mobile stacked cards.

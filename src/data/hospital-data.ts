export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string; badge?: string }[];
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  specialty: string;
  surgeriesCompleted: string;
  experience: string;
  availability: string;
  description: string;
}

export interface VisionCondition {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  blurLevel: number;
  effectType: "cataract" | "glaucoma" | "keratoconus" | "macular" | "normal";
  symptoms: string[];
  recommendedSurgery: string;
  urgency: "Routine" | "Priority" | "Urgent";
}

export interface ProcedureDetail {
  id: string;
  category: "cataract" | "retina" | "glaucoma" | "cornea";
  title: string;
  condition: string;
  tagline: string;
  description: string;
  duration: string;
  anesthesia: string;
  recovery: string;
  successRate: string;
  symptoms: string[];
  techUsed: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  bgGradient: string;
}

export interface SurgeryItem {
  id: string;
  title: string;
  condition: string;
  tagline: string;
  description: string;
  symptoms: string[];
  treatment: string;
  icon: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ReviewItem {
  id: string;
  patientName: string;
  conditionTreated: string;
  rating: number;
  reviewText: string;
  quoteHighlight: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About & Team",
    href: "#about",
    children: [
      { label: "Our Story & Ethics", href: "#about", description: "Pioneering compassionate, evidence-based eye care." },
      { label: "Specialist Surgeons", href: "#surgeons", description: "Board-certified UK & European fellowed consultants.", badge: "Top Rated" },
      { label: "Patient Care Journey", href: "#journey", description: "From initial scan to 24h restored vision." },
    ],
  },
  { label: "Vision Simulator", href: "#vision-simulator" },
  {
    label: "Surgeries",
    href: "#surgeries",
    children: [
      { label: "Micro-Incision Cataract (MICS)", href: "#surgeries", description: "15-min sutureless phaco with premium lenses." },
      { label: "Vitreo-Retinal Surgery", href: "#surgeries", description: "Advanced repair for detachments & diabetic retinopathy." },
      { label: "Glaucoma Pressure Management", href: "#surgeries", description: "MIGS & selective laser trabeculoplasty." },
      { label: "Corneal Cross-Linking (CXL)", href: "#surgeries", description: "Halting progressive keratoconus." },
    ],
  },
  { label: "Facilities", href: "#facilities" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    badge: "Chief Surgeon & Medical Director",
    title: "Dr. Kashif Farooqui, MD, FRCS",
    subtitle: "Renowned vitreo-retinal surgeon with MCPS, FCPS, FRCS (Glasgow), and fellowship training in complex anterior and posterior segment microsurgery. Over 15,000 successful procedures performed.",
    buttonText: "Meet Dr. Farooqui ➜",
    buttonLink: "#about",
    secondaryText: "Book Consultation",
    secondaryLink: "#booking",
    bgGradient: "from-slate-950 via-[#00123A] to-blue-950",
  },
  {
    id: "slide-2",
    badge: "Center of Excellence",
    title: "FMC (Farooqui Medical Centre)",
    subtitle: "Committed to preserving and enhancing vision with next-generation medical technology, personalized surgical workflows, and remarkably short patient waiting times.",
    buttonText: "Explore Our Medical Centre ➜",
    buttonLink: "#about",
    secondaryText: "Our Facilities",
    secondaryLink: "#facilities",
    bgGradient: "from-blue-950 via-[#052141] to-slate-950",
  },
  {
    id: "slide-3",
    badge: "Preventative Eye Health",
    title: "Think Before You Act: Routine Checks Save Sight",
    subtitle: "Considering off-the-shelf reading glasses without a dilated examination? Undiagnosed glaucoma, diabetic changes, and retinal tears develop without early pain. A comprehensive checkup is essential.",
    buttonText: "Call Hotline: (021) 34531810 ➜",
    buttonLink: "tel:02134531810",
    secondaryText: "View Video Guide",
    secondaryLink: "#video-guide",
    bgGradient: "from-[#00123A] via-[#0d2f66] to-[#0a1833]",
  },
  {
    id: "slide-4",
    badge: "Advanced Surgical Tech",
    title: "Latest Diagnostic & Operating Suites",
    subtitle: "Equipped with Zeiss surgical microscopes, Constellation vitrectomy platforms, and high-frequency ultrasound biometry to deliver micron-level precision and rapid post-op visual recovery.",
    buttonText: "View Facilities ➜",
    buttonLink: "#facilities",
    secondaryText: "Explore Surgeries",
    secondaryLink: "#surgeries",
    bgGradient: "from-[#07162c] via-[#0f3460] to-[#00123A]",
  },
  {
    id: "slide-5",
    badge: "Evidence-Based Protocols",
    title: "Specialized Precision Eye Inspections",
    subtitle: "Every diagnostic step is structured to adhere to rigorous international ophthalmology guidelines, from non-contact tonometry to dilated fundus biomicroscopy.",
    buttonText: "Schedule an Inspection ➜",
    buttonLink: "#booking",
    secondaryText: "Emergency OPD",
    secondaryLink: "#contact",
    bgGradient: "from-[#00123A] via-[#16213e] to-[#0f3460]",
  },
];

export const SURGERIES_DATA: SurgeryItem[] = [
  {
    id: "surg-1",
    title: "Cornea & Keratoconus Treatment",
    condition: "Corneal Thinning & Irregular Astigmatism",
    tagline: "Halting structural distortion and restoring optical clarity",
    description: "Keratoconus causes the clear dome of your eye to thin and bulge outward into a cone shape. We offer corneal collagen cross-linking (CXL) with riboflavin and specialized scleral lenses to halt progression.",
    symptoms: ["Sudden blurriness in one eye", "Multiple ghost images or halos around light", "Frequent changes in eyeglass prescriptions"],
    treatment: "Corneal Collagen Cross-Linking (CXL), PTK, and Deep Anterior Lamellar Keratoplasty (DALK).",
    icon: "Eye",
  },
  {
    id: "surg-2",
    title: "Glaucoma & Pressure Control",
    condition: "Neovascular & Open-Angle Glaucoma",
    tagline: "The silent thief of sight detected and treated early",
    description: "Glaucoma damages the optic nerve due to improper fluid drainage and high intraocular pressure. Because peripheral vision loss occurs painlessly, early surgical and laser intervention is crucial.",
    symptoms: ["Gradual loss of peripheral side vision", "Eye ache accompanied by nausea in acute stages", "Rainbow colored rings around bright lights"],
    treatment: "Selective Laser Trabeculoplasty (SLT), Peripheral Iridotomy, and Trabeculectomy with Mitomycin-C.",
    icon: "ShieldAlert",
  },
  {
    id: "surg-3",
    title: "Micro-Incision Cataract Surgery (MICS)",
    condition: "Age-Related & Congenital Cataracts",
    tagline: "Crystal clear vision restored in a 15-minute daycare procedure",
    description: "Natural lens protein breaks down with age, turning cloudy and milky. We use cold ultrasonic phacoemulsification through a microscopic 1.8mm incision with foldable premium intraocular lenses.",
    symptoms: ["Cloudy, foggy, or film-like vision", "Difficulty driving at night due to glare", "Faded color perception and yellowing"],
    treatment: "No-stitch, no-injection topical phacoemulsification with Monofocal, Toric, or Multifocal IOLs.",
    icon: "Sparkles",
  },
];

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    id: "dr-kashif-farooqui",
    name: "Dr. Kashif Farooqui, MD, FRCS",
    title: "Chief Medical Director & Vitreo-Retinal Consultant",
    qualifications: ["MCPS", "FCPS (Ophthalmology)", "FRCS (Glasgow, UK)", "Fellow Vitreo-Retina"],
    specialty: "Complex Vitreo-Retinal Surgery & Advanced Anterior Segment",
    surgeriesCompleted: "15,000+",
    experience: "22+ Years",
    availability: "Mon, Wed, Fri (Morning & Evening OPD)",
    description: "International examiner and premier vitreo-retinal authority renowned for micro-gauge sutureless vitrectomy and complex diabetic retinal rescue.",
  },
  {
    id: "dr-umair",
    name: "Dr. Umair, MD, FEBO",
    title: "Senior Consultant in Cataract & Refractive Surgery",
    qualifications: ["MBBS", "MS (Ophthalmology)", "FEBO (European Board)", "Fellow Anterior Segment"],
    specialty: "Phacoemulsification, Premium Toric & Multifocal IOLs",
    surgeriesCompleted: "9,800+",
    experience: "16+ Years",
    availability: "Daily (Except Friday)",
    description: "Specializes in cold-ultrasound micro-coaxial cataract extractions, restoring spectacle independence for thousands of elderly and working professionals.",
  },
  {
    id: "dr-faisal-qureshi",
    name: "Dr. Faisal Qureshi, FCPS, FICO",
    title: "Glaucoma & Corneal Reconstruction Specialist",
    qualifications: ["FCPS", "FICO (UK)", "Fellow Corneal Transplantation & Cross-Linking"],
    specialty: "Keratoconus (CXL), Glaucoma Shunts, Selective Laser Trabeculoplasty",
    surgeriesCompleted: "7,500+",
    experience: "14+ Years",
    availability: "Tue, Thu, Sat",
    description: "Expert in early detection of optic nerve cupping, non-invasive laser pressure reduction, and custom scleral contact lens fittings.",
  },
];

export const VISION_CONDITIONS: VisionCondition[] = [
  {
    id: "cataract",
    name: "Cataracts",
    subtitle: "Clouding of the Eye's Natural Lens",
    description: "Protein breakdown creates an opaque milky film over the lens. Light scatters, making everything appear through a dirty or fogged window with high sensitivity to night glare.",
    blurLevel: 6,
    effectType: "cataract",
    symptoms: ["Hazy, yellow-tinted visual field", "Halos around headlights while driving", "Difficulty reading small print in dim light"],
    recommendedSurgery: "Micro-Incision Cataract Surgery (MICS) with Monofocal/Multifocal IOL",
    urgency: "Priority",
  },
  {
    id: "glaucoma",
    name: "Glaucoma",
    subtitle: "Silent Optic Nerve Damage from High Pressure",
    description: "Excess intraocular fluid pressure progressively destroys peripheral optic nerve fibers. The visual field contracts into narrow tunnel vision without early pain.",
    blurLevel: 4,
    effectType: "glaucoma",
    symptoms: ["Tunnel vision (loss of peripheral edges)", "Blind spots in outer vision", "Mild headaches behind the brow"],
    recommendedSurgery: "Selective Laser Trabeculoplasty (SLT) or Trabeculectomy",
    urgency: "Urgent",
  },
  {
    id: "keratoconus",
    name: "Keratoconus",
    subtitle: "Cone-Shaped Thinning of the Cornea",
    description: "Weakened collagen fibrils cause the cornea to bulge into an irregular cone. Light cannot focus onto the retina, creating severe ghosting, distortion, and double images.",
    blurLevel: 5,
    effectType: "keratoconus",
    symptoms: ["Multiple ghost shadows around letters", "Sudden worsening astigmatism", "Distorted streaks from streetlights"],
    recommendedSurgery: "Corneal Collagen Cross-Linking (CXL) with Riboflavin",
    urgency: "Priority",
  },
  {
    id: "macular",
    name: "Macular Degeneration / Retinal Bleed",
    subtitle: "Central Vision Deterioration",
    description: "Changes in the central retina (macula) produce dark central blind patches or wavy distorted straight lines (metamorphopsia), impairing facial recognition.",
    blurLevel: 7,
    effectType: "macular",
    symptoms: ["Straight lines look wavy or bent", "Dark smudge or blank spot in center of gaze", "Difficulty reading despite bright light"],
    recommendedSurgery: "Anti-VEGF Pharmacotherapy or Vitreo-Retinal Laser Surgery",
    urgency: "Urgent",
  },
];

export const PROCEDURES_DATA: ProcedureDetail[] = [
  {
    id: "proc-1",
    category: "cataract",
    title: "Micro-Incision Cataract Surgery (MICS)",
    condition: "Senile & Congenital Cataracts",
    tagline: "Cold ultrasound phacoemulsification through 1.8mm incision",
    description: "A 15-minute daycare procedure performed under topical anesthetic eye drops without painful injections or stitches. The clouded lens is liquefied and replaced with a premium foldable acrylic intraocular lens.",
    duration: "15 - 20 Mins",
    anesthesia: "Topical Drop Anesthesia (No Injections)",
    recovery: "Same-Day Discharge, 24h Vision Return",
    successRate: "99.8%",
    symptoms: ["Clouded milky vision", "Severe night glare", "Fading colors"],
    techUsed: "Alcon Infiniti / Centurion Phaco Platform",
  },
  {
    id: "proc-2",
    category: "retina",
    title: "Pars Plana Micro-Gauge Vitrectomy (PPV)",
    condition: "Retinal Detachment & Vitreous Hemorrhage",
    tagline: "Microsurgical vitreoretinal reattachment and macular repair",
    description: "Using 25-gauge and 27-gauge sutureless instrumentation, vitreous traction is relieved, retinal tears are sealed with endolaser, and gas or silicone oil tamponade is positioned to save sight.",
    duration: "45 - 60 Mins",
    anesthesia: "Monitored Local / Peribulbar",
    recovery: "Gradual stabilization over 2 to 4 weeks",
    successRate: "95.5%",
    symptoms: ["Curtain or shadow descending over eye", "Sudden shower of dark floaters", "Flashing lightning streaks"],
    techUsed: "Constellation Vitrectomy System with Resight 700",
  },
  {
    id: "proc-3",
    category: "glaucoma",
    title: "Selective Laser Trabeculoplasty & Trabeculectomy",
    condition: "Open-Angle & Angle-Closure Glaucoma",
    tagline: "Targeted laser drainage and micro-shunt pressure regulation",
    description: "Selective laser trabeculoplasty (SLT) activates cellular fluid drainage without damaging thermal scarring. For advanced stages, guarded filtration surgery prevents irreversible optic neuropathy.",
    duration: "10 Mins (Laser) / 35 Mins (Surgery)",
    anesthesia: "Topical Laser Drops",
    recovery: "Immediate resumption of daily activity",
    successRate: "94.2%",
    symptoms: ["High IOP readings", "Peripheral visual field decay", "Ocular ache"],
    techUsed: "Ellex Tango SLT / YAG Laser System",
  },
  {
    id: "proc-4",
    category: "cornea",
    title: "Corneal Collagen Cross-Linking (CXL)",
    condition: "Keratoconus & Ectasia",
    tagline: "Strengthening corneal collagen bonds with Riboflavin and UV-A",
    description: "Halts the progressive weakening and cone-shaped protrusion of the cornea. Riboflavin drops combined with measured UV-A light create covalent cross-links that stabilize the corneal biomechanics.",
    duration: "30 Mins",
    anesthesia: "Topical Anesthetic Eye Drops",
    recovery: "Protective bandage lens for 4 days",
    successRate: "97.6%",
    symptoms: ["Frequent prescription instability", "Severe ghosting", "Light halo streaks"],
    techUsed: "Avedro Corneal Cross-Linking UV Device",
  },
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "Digital Diagnostic Ocular Scan",
    description: "Non-contact tonometry, corneal topography, and spectral-domain macula OCT conducted in under 15 minutes.",
    icon: "Scan",
  },
  {
    step: "02",
    title: "1-on-1 Senior Consultant Review",
    description: "Thorough biomicroscopic evaluation with Dr. Kashif Farooqui or senior faculty. No rushed assembly lines.",
    icon: "UserCheck",
  },
  {
    step: "03",
    title: "Precision Microsurgical Treatment",
    description: "Performed in ultra-sterile laminar airflow operating theatres using Zeiss microscopes and cold ultrasound.",
    icon: "Stethoscope",
  },
  {
    step: "04",
    title: "Daycare Discharge & 24h Recovery",
    description: "Return home within 2 hours with customized medications, protective eye shield, and dedicated hotline support.",
    icon: "ShieldCheck",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is modern cataract surgery painful?",
    answer: "No. Micro-incision cataract surgery (MICS) at FMC (Farooqui Medical Centre) is performed entirely under topical anesthetic eye drops. There are no injections around the eye, no scalpels, and no stitches. Most patients experience zero pain and describe seeing gentle warm lighting during the 15-minute procedure.",
    category: "Cataract",
  },
  {
    id: "faq-2",
    question: "How quickly can I see after a micro-incision procedure?",
    answer: "Most patients notice a significant improvement in brightness and optical clarity within 24 hours. Because modern incisions are self-sealing (1.8mm), normal daily routines such as watching television, walking, and reading can resume the following day.",
    category: "Cataract",
  },
  {
    id: "faq-3",
    question: "Why can't I just buy reading glasses from a convenience store?",
    answer: "Over-the-counter reading magnifiers assume both of your eyes have identical spherical focal requirements and zero astigmatism, which is almost never true. Worse, relying on store-bought glasses without a dilated examination leaves silent diseases like glaucoma, diabetic retinopathy, and macular degeneration completely undetected until permanent vision loss has occurred.",
    category: "General",
  },
  {
    id: "faq-4",
    question: "What are the emergency signs of a retinal detachment?",
    answer: "A retinal tear or detachment is an ophthalmic emergency. Warning signs include a sudden shower of dark floating specks, flashes of light in the corner of your eye, or a dark shadow or curtain gradually descending across your visual field. FMC maintains a 24/7 on-call vitreo-retinal surgical team for immediate triage.",
    category: "Retina",
  },
  {
    id: "faq-5",
    question: "What safety protocols are maintained in your operating rooms?",
    answer: "Our surgical suites feature continuous positive pressure laminar airflow with medical HEPA filtration, achieving 99.99% particulate and bacterial exclusion. Surgical tools are sterilised using class-B autoclaves with rigorous biological indicators.",
    category: "Safety",
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "fac-1",
    title: "Friendly & Calming Environment",
    tagline: "Designed for comfort, reassurance, and speed",
    description: "All patient spaces are brightly illuminated, spacious, and sanitized. Our courteous medical and support team ensures prompt assistance so patients never feel rushed or stressed.",
    features: ["Dedicated patient counseling rooms", "Wheelchair accessible campus", "Digitized queue management"],
    icon: "HeartHandshake",
  },
  {
    id: "fac-2",
    title: "Modern Diagnostic Equipment",
    tagline: "Ultra-precise non-invasive ocular imaging",
    description: "Equipped with state-of-the-art spectral-domain Optical Coherence Tomography (OCT), automated visual field perimeters, non-contact tonometers, and corneal topographers.",
    features: ["Spectral-domain macula OCT", "Pachymetry & corneal topography", "Digital fundus fluorescein imaging"],
    icon: "Activity",
  },
  {
    id: "fac-3",
    title: "In-House Pharmacy & Dispensing Opticians",
    tagline: "Prescription fulfillment before you leave",
    description: "Eliminate the inconvenience of scouring local pharmacies for specialty ophthalmological medications. Certified drops, post-surgical protective kits, and prescription eyewear are in-house.",
    features: ["Specialized preservative-free drops", "Anti-VEGF temperature-controlled stock", "Custom anti-reflective computer lenses"],
    icon: "Pill",
  },
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    patientName: "William Afzal",
    conditionTreated: "Severe Digital Eye Strain & Retinal Evaluation",
    rating: 5,
    quoteHighlight: "They have the most advanced machines and equipment to ensure the best eye treatment in Karachi.",
    reviewText: "Long hours of digital screen work caused severe headaches and burning ocular pain. Dr. Kashif Farooqui ran a comprehensive dilated diagnostic scan within minutes. His guidance on ergonomic eye habits and preventative drops eliminated my symptoms completely.",
    verified: true,
  },
  {
    id: "rev-2",
    patientName: "Amina Tariq",
    conditionTreated: "Micro-Incision Cataract Surgery (Both Eyes)",
    rating: 5,
    quoteHighlight: "Pain-free 15-minute procedure and I could read without glasses the next morning!",
    reviewText: "I was terrified of eye surgery, but the staff and surgeon were so comforting. The phacoemulsification was painless and seamless. The clinic hygiene and post-operative follow-up were unmatched.",
    verified: true,
  },
  {
    id: "rev-3",
    patientName: "Dr. Kamran Siddiqui",
    conditionTreated: "Diabetic Retinopathy Laser Photocoagulation",
    rating: 5,
    quoteHighlight: "As a physician myself, I entrust my vision only to this surgical team.",
    reviewText: "The retinal lasers and fundus diagnostic capabilities here are identical to top clinics in the UK. Truly an exemplary center for complex posterior segment disorders.",
    verified: true,
  },
];

export const CLINICAL_STATS = [
  { value: "15,000+", label: "Surgeries Completed", description: "Vitreo-retinal, cataract & laser" },
  { value: "< 12 Mins", label: "Average Check-in Time", description: "Digitized outpatient triage" },
  { value: "99.8%", label: "Surgical Success Rate", description: "Audit verified outcome benchmark" },
  { value: "24/7", label: "Retina Emergency Service", description: "Immediate trauma & detachment team" },
];

export const HOSPITAL_CONTACT = {
  name: "FMC (Farooqui Medical Centre)",
  tagline: "Advanced Eye Care & Microsurgery Excellence",
  address: "187-B, P.E.C.H.S Block 2, Shahr-e-Quaideen, Karachi, Pakistan",
  hotlines: [
    { label: "Main Desk", number: "(021) 34531810", tel: "+922134531810" },
    { label: "Consultation Line", number: "(021) 37441943", tel: "+922137441943" },
    { label: "WhatsApp & Mobile", number: "0311-2845342", tel: "+923112845342" },
  ],
  timings: {
    morning: {
      time: "09:30 AM – 12:00 PM",
      days: "Daily (Except Friday & Sunday)",
    },
    evening: {
      time: "05:00 PM – 07:30 PM",
      days: "Monday, Wednesday, Friday, Saturday (Tue & Thu By Appointment)",
    },
    sunday: "Closed for routine OPD (24/7 Emergency on-call active)",
  },
  emergencyHours: "24/7 Vitreoretinal Emergency Triage",
  email: "appointments@farooquimedical.org",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0860175647726!2d67.05720091602433!3d24.860911584053735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9b5718a80d%3A0xf6bf441d0f744e74!2sDr.%20Yawar%20Zaman%20Eye%20Hospital!5e0!3m2!1sen!2sus!4v1631660070131!5m2!1sen!2sus",
};

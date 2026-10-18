"use client";

import React, { useState } from "react";
import { LiveStatusTicker } from "@/components/LiveStatusTicker";
import { Navbar } from "@/components/Navbar";
import { HeroRevamped } from "@/components/HeroRevamped";
import { VisionSimulator } from "@/components/VisionSimulator";
import { AboutSection } from "@/components/AboutSection";
import { DoctorRoster } from "@/components/DoctorRoster";
import { ProceduresRevamped } from "@/components/ProceduresRevamped";
import { PatientJourney } from "@/components/PatientJourney";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { VideoSpotlight } from "@/components/VideoSpotlight";
import { PatientReviews } from "@/components/PatientReviews";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ConsultationBanner } from "@/components/ConsultationBanner";
import { Footer } from "@/components/Footer";
import { EmergencyDock } from "@/components/EmergencyDock";
import { AppointmentModal } from "@/components/AppointmentModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");

  const handleOpenBooking = () => {
    setSelectedSpecialty("");
    setSelectedDoctor("");
    setIsBookingOpen(true);
  };

  const handleBookingWithSpecialty = (specialty: string) => {
    setSelectedSpecialty(specialty);
    setSelectedDoctor("");
    setIsBookingOpen(true);
  };

  const handleBookingWithDoctor = (doctor: string) => {
    setSelectedSpecialty("");
    setSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 01. Real-time Surgical Suites & Emergency Status Ticker */}
      <LiveStatusTicker />

      {/* 02. Glassmorphism Sticky Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 03. 21st-Century Cinematic Ophthalmic Hero with Diagnostic Scanner Card */}
      <HeroRevamped
        onOpenBooking={handleOpenBooking}
        onOpenBookingWithSpecialty={handleBookingWithSpecialty}
      />

      {/* 04. Interactive Eye Vision Simulator (Cataract, Glaucoma, Keratoconus, Macular) */}
      <VisionSimulator onSelectConditionForBooking={handleBookingWithSpecialty} />

      {/* 05. About Institute & Clinical Excellence with Wait-Time Callouts */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* 06. Board-Certified Specialist Faculty Roster */}
      <DoctorRoster onSelectDoctorForBooking={handleBookingWithDoctor} />

      {/* 07. Categorized Ophthalmic Surgeries with Animated Tabs & Success Metrics */}
      <ProceduresRevamped onOpenBookingWithProcedure={handleBookingWithSpecialty} />

      {/* 08. Patient Care Journey 4-Step Pathway */}
      <PatientJourney onOpenBooking={handleOpenBooking} />

      {/* 09. Specialized Clinical Facilities & Sterile OR Suites */}
      <FacilitiesSection onOpenBooking={handleOpenBooking} />

      {/* 10. Educational Video Spotlight: Common Eye Care Mistakes */}
      <VideoSpotlight />

      {/* 11. Verified Patient Reviews & Recovery Stories */}
      <PatientReviews />

      {/* 12. Clinical Questions & Answers (Interactive FAQ Accordion) */}
      <FaqAccordion onOpenBooking={handleOpenBooking} />

      {/* 13. High-Impact Consultation Hotline Banner */}
      <ConsultationBanner onOpenBooking={handleOpenBooking} />

      {/* 14. Hospital Timings, Contacts, Map & Comprehensive Footer */}
      <Footer />

      {/* 15. 21st-Century Floating Action Bar */}
      <EmergencyDock onOpenBooking={handleOpenBooking} />

      {/* 16. Accessible Appointment & Consultation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSpecialty={selectedSpecialty}
        initialDoctor={selectedDoctor}
      />
    </main>
  );
}

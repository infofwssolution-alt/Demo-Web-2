import type { Metadata, Viewport } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FMC (Farooqui Medical Centre) | Advanced Ophthalmology & Eye Surgery",
  description:
    "Leading ophthalmic institute led by Dr. Kashif Farooqui, providing modern micro-incision cataract surgery, vitreo-retina interventions, glaucoma care, and rapid outpatient eye diagnostics.",
  keywords: [
    "FMC",
    "Farooqui Medical Centre",
    "Dr. Kashif Farooqui",
    "Eye Hospital",
    "Ophthalmology",
    "Retina Surgery",
    "Cataract Surgery",
    "Glaucoma Treatment",
    "Karachi",
  ],
  authors: [{ name: "FMC (Farooqui Medical Centre) Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${nunitoSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#484c50] antialiased selection:bg-[#052141] selection:text-white">
        {children}
      </body>
    </html>
  );
}

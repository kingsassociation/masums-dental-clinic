"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Absolute Background Image */}
      <Image
        src="/hero-banner.png"
        alt="Dental Team"
        fill
        className="object-cover object-center md:object-right"
        priority
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6 md:space-y-8 py-12 md:py-20 lg:py-24">

          <h3 className="text-primary font-medium text-lg md:text-xl tracking-wide">
            Optimal Oral Health
          </h3>

          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Dental Care for <br />
            <span className="text-primary">Healthy Smiles</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
            Delivering world-class dental care and advanced oral surgery by the leading specialist Dr. Abdullah Al Masum (BDS, PGT).
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="/#appointments" className="w-full sm:w-auto">
              <button className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                <span>Book Appointment</span>
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full bg-white/80 backdrop-blur-sm border-2 border-slate-100 text-slate-700 hover:text-primary hover:border-primary/20 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <span>Explore Treatments</span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

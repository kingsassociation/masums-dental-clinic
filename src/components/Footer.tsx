"use client";

import { Facebook, Youtube, Linkedin, Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import XIcon from "./icons/XIcon";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] text-slate-600 pt-16 md:pt-20 pb-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image src="/logo.png" alt="Masum's Dental Clinic Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col -space-y-0.5 sm:-space-y-1">
                  <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                    Masum's
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-slate-400 uppercase leading-tight">
                    Dental Clinic
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-500">
              An Exclusive Dental Solution for your family. Delivering world-class dental care and surgery with precision and care.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com/" },
                { icon: Youtube, href: "https://youtube.com/" },
                { icon: Linkedin, href: "https://linkedin.com/" },
                { icon: XIcon, href: "https://twitter.com/" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { name: "Braces & Aligners", path: "/services/#braces" },
                { name: "Teeth Whitening", path: "/services/#whitening" },
                { name: "Dental Implant", path: "/services/#implant" },
                { name: "Dental Fillings", path: "/services/#fillings" },
                { name: "Wisdom Teeth", path: "/services/#surgery" },
                { name: "Molar Crown", path: "/services/#crowns" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <ChevronRight size={14} className="text-primary/50 group-hover:text-primary mr-2 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Open Hours */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Open Hours</h4>
            <ul className="space-y-4">
              <li className="flex flex-col space-y-1 border-b border-slate-200/60 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monday - Saturday:</span>
                <span className="text-sm font-semibold text-slate-700">10:00 am - 02:00 pm</span>
                <span className="text-sm font-semibold text-slate-700">04:00 pm - 10:00 pm</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sunday:</span>
                <span className="text-sm font-semibold text-slate-700">Closed</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm font-bold text-slate-900">Phone</span>
                  <span className="text-sm text-slate-500">01712-260461</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm font-bold text-slate-900">Location</span>
                  <span className="text-sm text-slate-500">Gafur Mansion, 1107/A Love Lane, Chattogram</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm font-bold text-slate-900">Email</span>
                  <span className="text-sm text-slate-500">info@masumsdental.com</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/60 flex flex-col items-center gap-4 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/login" className="hover:text-primary transition-colors">Dr. Portal</Link>
          </div>
          <p className="text-center w-full">Copyright © 2026 Masum's Dental Clinic. All Rights Reserved. <span className="block mt-2 md:inline md:mt-0 md:ml-1">Developed By <a href="https://www.felconis.com" className="text-primary hover:underline transition-colors" target="_blank" rel="noopener noreferrer">FELCONIS</a></span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

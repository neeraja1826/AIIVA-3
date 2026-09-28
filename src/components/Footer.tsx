import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Youtube, Linkedin } from 'lucide-react';
import { footerLinks } from '../data/navigation';
import { companyInfo } from '../data/company';

export function Footer() {
  return (
    <footer className="bg-ink text-cream border-t border-cream/10">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 md:px-10 lg:grid-cols-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/aiiva/media_1790578630874.png"
              alt="AIIVA Automation Logo"
              className="h-12 w-auto object-contain rounded-lg bg-white p-1"
            />
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-cream">AIIVA AUTOMATION</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-terracotta">PRIVATE LIMITED</p>
            </div>
          </div>
          
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            {companyInfo.tagline}
          </p>
          <p className="mt-2 font-display text-lg font-light italic text-cream/80">
            “{companyInfo.subTagline}”
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-cream/65">
            Hyderabad-based home & building automation company providing smart, reliable and affordable automation solutions.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream hover:bg-terracotta transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={companyInfo.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream hover:bg-terracotta transition-colors"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream hover:bg-terracotta transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="lg:col-span-2 lg:col-start-6" aria-label="Footer Navigation">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">Explore</p>
          <ul className="mt-5 space-y-2.5">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[14px] text-cream/75 underline-offset-4 transition-colors duration-200 hover:text-cream hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Leadership & Profile */}
        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">Directors</p>
          <div className="mt-5 space-y-4 text-[13px] text-cream/80">
            <div>
              <p className="font-semibold text-cream">Donepudi Krishna Sumanth</p>
              <p className="text-[11px] text-cream/55">Director — Marketing, Sales & Brand Building</p>
            </div>
            <div>
              <p className="font-semibold text-cream">Donepudi Srisha</p>
              <p className="text-[11px] text-cream/55">Director — Admin, Operations & Brand Building</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">Hyderabad Office</p>
          <div className="mt-5 space-y-3 text-[13px] text-cream/80">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
              <span>{companyInfo.contact.address}, {companyInfo.contact.landmark}, {companyInfo.contact.city} - {companyInfo.contact.pincode}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-terracotta" />
              <span>{companyInfo.contact.phones.join(' / ')}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-terracotta" />
              <a href={`mailto:${companyInfo.contact.email}`} className="hover:underline">
                {companyInfo.contact.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-terracotta" />
              <span>{companyInfo.contact.workingHours}</span>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-cream/10 bg-black/30">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-6 text-[12px] text-cream/60 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>© 2026 {companyInfo.legalName}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="text-terracotta font-medium">Smart Living Accessible To Everyone.</span>
            <span>•</span>
            <span>Hyderabad, Telangana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
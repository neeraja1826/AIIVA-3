import React, { useState } from 'react';
import { MessageSquare, Phone, X, Sparkles, Send } from 'lucide-react';
import { companyInfo } from '../data/company';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini Chat Box Modal */}
      {isOpen && (
        <div className="mb-3 w-[320px] rounded-3xl border border-ink/10 bg-cream p-5 shadow-2xl transition-all">
          <div className="flex items-center justify-between border-b border-ink/10 pb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/aiiva/media_1790578630874.png"
                  alt="AIIVA Logo"
                  className="h-8 w-8 object-contain rounded-full bg-sand p-1 border border-ink/10"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#25D366] ring-2 ring-cream" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ink leading-tight">AIIVA Automation</p>
                <p className="text-[11px] text-[#128C7E] font-medium">Online • Basheer Bagh, Hyd</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="grid h-7 w-7 place-items-center rounded-full text-ink/50 hover:bg-sand"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-3 text-[13px] text-ink/75 leading-relaxed bg-sand/40 p-3 rounded-2xl">
            👋 Hello! How can we assist you with your smart home or commercial automation in Hyderabad today?
          </p>

          <div className="mt-4 space-y-2">
            <a
              href="https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20would%20like%20to%20get%20a%20consultation%20and%20quotation."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+919000006000"
              className="flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-cream px-4 py-2 text-[12px] font-semibold text-ink hover:bg-sand"
            >
              <Phone className="h-3.5 w-3.5 text-terracotta" />
              Call +91 90000 06000
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
        className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="h-5 w-5 fill-current" />
        <span className="text-[12px] font-bold uppercase tracking-[0.14em] hidden sm:inline">
          Chat with AIIVA
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </button>
    </div>
  );
}

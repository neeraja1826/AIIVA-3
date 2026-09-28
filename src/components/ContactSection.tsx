import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { companyInfo } from '../data/company';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Apartment / Flat',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi AIIVA Automation, I am reaching out from your website contact form:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Property: ${formData.propertyType}
• Location: ${formData.location || 'Hyderabad'}
• Note: ${formData.message || 'I would like to book a site visit/consultation.'}`;

    const url = `https://wa.me/919000006000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-cream py-24 lg:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label>08 / Get in Touch</Label>
            <RevealText
              as="h2"
              text={'Visit Our Studio\nOr Schedule A\nSite Visit.'}
              accent={['Studio']}
              accentClassName="italic text-terracotta"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]"
            />
          </div>
          <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-5">
            Experience our smart touch glass switches, motorized curtains, and climate automation live at our Basheer Bagh studio, or request a free engineer site visit to your Hyderabad property.
          </p>
        </div>

        {/* Contact Information & Form Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          
          {/* Left Column: Office & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="rounded-3xl border border-ink/10 bg-sand/30 p-8 shadow-sm">
              <div className="flex items-center gap-3 text-terracotta">
                <MapPin className="h-6 w-6" />
                <h3 className="font-display text-xl font-medium text-ink">Head Office & Studio</h3>
              </div>
              <p className="mt-4 text-[16px] font-medium text-ink leading-relaxed">
                {companyInfo.contact.address}
              </p>
              <p className="text-[14px] text-ink/70">
                {companyInfo.contact.landmark}, {companyInfo.contact.city} - {companyInfo.contact.pincode}
              </p>
              
              <div className="mt-5 pt-4 border-t border-ink/10">
                <a
                  href="https://maps.google.com/?q=The+Legend+Palace+Colony+Basheer+Bagh+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-terracotta hover:underline"
                >
                  View on Google Maps
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="rounded-3xl border border-ink/10 bg-sand/30 p-8 shadow-sm">
              <div className="flex items-center gap-3 text-terracotta">
                <Phone className="h-6 w-6" />
                <h3 className="font-display text-xl font-medium text-ink">Call & WhatsApp</h3>
              </div>

              <div className="mt-4 space-y-3">
                {companyInfo.contact.phones.map((phone, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-[16px] font-medium text-ink hover:text-terracotta transition-colors"
                    >
                      {phone}
                    </a>
                    <a
                      href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#25D366]/15 px-3 py-1 text-[11px] font-semibold text-[#128C7E] hover:bg-[#25D366]/25 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between text-[13px] text-ink/70">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-terracotta" /> Working Hours:
                </span>
                <span className="font-medium text-ink">{companyInfo.contact.workingHours}</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-3xl border border-ink/10 bg-sand/30 p-8 shadow-sm">
              <div className="flex items-center gap-3 text-terracotta">
                <Mail className="h-6 w-6" />
                <h3 className="font-display text-xl font-medium text-ink">Email Inquiries</h3>
              </div>
              <p className="mt-3 text-[13px] text-ink/65">For architectural proposals, vendor partnerships & tenders:</p>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="mt-2 block text-[16px] font-semibold text-ink underline-offset-4 hover:underline hover:text-terracotta"
              >
                {companyInfo.contact.email}
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-ink/10 bg-cream p-8 md:p-12 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">Free Consultation</span>
              <h3 className="mt-1 font-display text-3xl font-light uppercase tracking-[-0.01em] text-ink">
                Schedule a Free Site Survey
              </h3>
              <p className="mt-2 text-[14px] text-ink/70">
                Fill in your details below and our Hyderabad engineering team will coordinate a personalized visit and demonstration.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-sand/50 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-terracotta" />
                  <h4 className="mt-4 font-display text-2xl font-light">Thank You!</h4>
                  <p className="mt-2 text-[14px] text-ink/70">
                    Your request has been routed to our team on WhatsApp. We will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full bg-ink px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Donepudi Krishna"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/20 px-4 py-3 text-[14px] text-ink placeholder-ink/35 focus:border-terracotta focus:bg-cream focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90000 06000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/20 px-4 py-3 text-[14px] text-ink placeholder-ink/35 focus:border-terracotta focus:bg-cream focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="youremail@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/20 px-4 py-3 text-[14px] text-ink placeholder-ink/35 focus:border-terracotta focus:bg-cream focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/20 px-4 py-3 text-[14px] text-ink focus:border-terracotta focus:bg-cream focus:outline-none"
                      >
                        <option value="2 BHK Apartment">2 BHK Apartment</option>
                        <option value="3 BHK Apartment">3 BHK Apartment</option>
                        <option value="4 BHK / Duplex">4 BHK / Duplex</option>
                        <option value="Independent Luxury Villa">Independent Luxury Villa</option>
                        <option value="Commercial Office / Boardroom">Commercial Office / Boardroom</option>
                        <option value="Other Project">Other Custom Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2">
                      Property Location (e.g. Jubilee Hills, Gachibowli, Kokapet)
                    </label>
                    <input
                      type="text"
                      placeholder="Hyderabad location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/20 px-4 py-3 text-[14px] text-ink placeholder-ink/35 focus:border-terracotta focus:bg-cream focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 mb-2">
                      Specific Requirements or Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your home, number of rooms, or specific features you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/20 px-4 py-3 text-[14px] text-ink placeholder-ink/35 focus:border-terracotta focus:bg-cream focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-cream shadow-md transition-all hover:bg-burgundy hover:shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                    Send Inquiry to Engineering Team
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

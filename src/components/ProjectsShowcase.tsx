import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, Quote, ArrowRight, Building, Home, Sparkles } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { completedProjects, type ProjectCaseStudy } from '../data/projects';
import { EASE } from '../utils/motion';

const filterTabs = ["All Projects", "Villa", "Residential", "Commercial"] as const;

export function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("All Projects");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy>(completedProjects[0]);

  const filtered = activeTab === "All Projects"
    ? completedProjects
    : completedProjects.filter(p => p.clientType === activeTab);

  return (
    <section id="projects" className="relative bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>04 / Case Studies & Projects</Label>
            <RevealText
              as="h2"
              text={'Proven In\nHyderabad’s\nFinest Homes.'}
              accent={['Hyderabad’s']}
              accentClassName="italic text-terracotta"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]"
            />
          </div>
          <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-4">
            From sprawling luxury villas in Jubilee Hills to high-rise duplexes in Banjara Hills and corporate headquarters in Financial District, explore how AIIVA transforms everyday spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-ink/10 pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                const first = tab === "All Projects" ? completedProjects[0] : completedProjects.find(p => p.clientType === tab);
                if (first) setSelectedProject(first);
              }}
              className={`rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-ink text-cream shadow-sm'
                  : 'bg-sand/60 text-ink/70 hover:bg-sand'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Selected Project Full Detailed Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-sand/30 p-6 md:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="grid gap-10 lg:grid-cols-12"
            >
              {/* Project Visuals & Client Quote */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 shadow-md">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 backdrop-blur-sm border border-ink/10 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                    {selectedProject.clientType} Project
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="mt-6 rounded-2xl bg-cream p-6 border border-ink/10 shadow-sm relative">
                    <Quote className="h-6 w-6 text-terracotta/40 absolute top-4 right-4" />
                    <p className="text-[14px] leading-relaxed italic text-ink/85 pr-4">
                      "{selectedProject.testimonial.quote}"
                    </p>
                    <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between">
                      <div>
                        <p className="text-[13px] font-semibold text-ink">{selectedProject.testimonial.clientName}</p>
                        <p className="text-[11px] text-ink/50">{selectedProject.testimonial.designation}</p>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-terracotta">
                        <Sparkles className="h-3 w-3" /> Verified Client
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Case Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-4 text-[12px] text-ink/60 mb-2">
                  <span className="flex items-center gap-1.5 font-semibold text-terracotta">
                    <MapPin className="h-4 w-4" /> {selectedProject.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> Completed {selectedProject.year}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-light uppercase tracking-[-0.02em] md:text-4xl text-ink">
                  {selectedProject.title}
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="rounded-xl bg-cream p-4 border border-ink/10">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">Client Requirement</h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
                      {selectedProject.requirement}
                    </p>
                  </div>

                  <div className="rounded-xl bg-cream p-4 border border-ink/10">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-deep">AIIVA Solution Provided</h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Products Deployed */}
                <div className="mt-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Products & Hardware Used</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.productsUsed.map((prod, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-sand/60 px-3 py-1.5 text-[12px] font-medium text-ink border border-ink/10"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-terracotta" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20saw%20your%20case%20study%20on%20${encodeURIComponent(selectedProject.title)}%20and%20would%20like%20a%20similar%20setup.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream shadow-md transition-colors hover:bg-terracotta"
                  >
                    Request Similar Project Consultation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Thumbnails Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((proj) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setSelectedProject(proj)}
              className={`rounded-2xl p-4 text-left border transition-all ${
                selectedProject.id === proj.id
                  ? 'border-terracotta bg-cream shadow-md ring-2 ring-terracotta/20'
                  : 'border-ink/10 bg-cream/60 hover:bg-cream'
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand mb-3">
                <img src={proj.image} alt={proj.title} className="h-full w-full object-cover" />
                <span className="absolute bottom-2 left-2 rounded-md bg-ink/80 px-2 py-0.5 text-[10px] font-semibold text-cream">
                  {proj.location.split(',')[0]}
                </span>
              </div>
              <h4 className="font-display text-base font-medium line-clamp-1">{proj.title}</h4>
              <p className="text-[12px] text-ink/60 mt-0.5 line-clamp-2">{proj.requirement}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

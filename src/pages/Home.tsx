import React, { useCallback, useState } from 'react';
import { Header } from '../components/Header';
import { MenuOverlay } from '../components/MenuOverlay';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { CompanyProfile } from '../components/CompanyProfile';
import { ServicesSection } from '../components/ServicesSection';
import { ProductsShowcase } from '../components/ProductsShowcase';
import { FloorPlan } from '../components/floorplan/FloorPlan';
import { DayJourney } from '../components/journey/DayJourney';
import { ControlInterface } from '../components/control/ControlInterface';
import { Collection } from '../components/Collection';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { CostEstimator } from '../components/CostEstimator';
import { HowItWorks } from '../components/HowItWorks';
import { Gallery } from '../components/Gallery';
import { Designed } from '../components/Designed';
import { ContactSection } from '../components/ContactSection';
import { FinalCta } from '../components/FinalCta';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="w-full bg-cream text-ink antialiased selection:bg-terracotta selection:text-cream">
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
      <main>
        <Hero />
        <Philosophy />
        <CompanyProfile />
        <ServicesSection />
        <ProductsShowcase />
        <FloorPlan />
        <DayJourney />
        <ControlInterface />
        <Collection />
        <ProjectsShowcase />
        <CostEstimator />
        <HowItWorks />
        <Gallery />
        <Designed />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
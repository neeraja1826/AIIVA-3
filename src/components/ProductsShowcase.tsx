import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Sliders, Box, Fan, Power, Grid, Eye } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { productsList, productCategories, type ProductItem } from '../data/products';
import { EASE } from '../utils/motion';

export function ProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(productsList[0]);

  const filteredProducts = activeCategory === "All Products"
    ? productsList
    : productsList.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="relative bg-sand/20 py-24 lg:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Section Title */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>03 / AIIVA Hardware Range (8 Models)</Label>
            <RevealText
              as="h2"
              text={'Tempered Glass.\nTouch Switchboards.\nStandard Gang Fit.'}
              accent={['Tempered Glass.']}
              accentClassName="italic text-terracotta"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]"
            />
          </div>
          <div className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-ink/70">
              AIIVA’s complete 8-model lineup of capacitive touch glass switchboards, fan speed controllers, and heavy-duty socket panels — engineered for standard 2M to 12M Indian electrical boxes.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
          <div className="flex flex-wrap gap-2">
            {productCategories.map((cat) => {
              const count = cat === "All Products" ? productsList.length : productsList.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    const first = cat === "All Products" ? productsList[0] : productsList.find(p => p.category === cat);
                    if (first) setSelectedProduct(first);
                  }}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-ink text-cream shadow-sm'
                      : 'bg-cream text-ink/70 hover:bg-sand border border-ink/10'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    activeCategory === cat ? 'bg-terracotta text-cream' : 'bg-sand text-ink/50'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-[12px] font-semibold text-terracotta">
            8 Certified Hardware Models
          </span>
        </div>

        {/* Featured Product Interactive Inspector */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center rounded-3xl border border-ink/10 bg-cream p-6 md:p-10 lg:p-12 shadow-sm">
          {/* Left Column: High-Res Image Display */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl bg-sand/30 p-8 flex items-center justify-center border border-ink/10 shadow-inner group overflow-hidden">
              {selectedProduct.badge && (
                <span className="absolute top-5 left-5 z-10 rounded-full bg-terracotta px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cream shadow-sm">
                  {selectedProduct.badge}
                </span>
              )}

              {selectedProduct.moduleSize && (
                <span className="absolute top-5 right-5 z-10 flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1 backdrop-blur-sm border border-ink/10 text-[11px] font-semibold text-ink">
                  <Box className="h-3.5 w-3.5 text-terracotta" />
                  {selectedProduct.moduleSize}
                </span>
              )}
              
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[340px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-ink/60 bg-cream/80 backdrop-blur-sm rounded-xl px-3.5 py-1.5 border border-ink/10">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-terracotta" /> 4mm Diamond Toughened Glass
                </span>
                <span className="font-semibold text-terracotta">100% Retrofit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Product Specifications & Highlights */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
              <span>{selectedProduct.category}</span>
              <span>•</span>
              <span>{selectedProduct.moduleSize}</span>
            </div>

            <h3 className="mt-2 font-display text-3xl font-light uppercase tracking-[-0.02em] md:text-4xl text-ink">
              {selectedProduct.name}
            </h3>
            
            <p className="mt-1 font-display text-lg italic text-ink/75">
              “{selectedProduct.tagline}”
            </p>
            
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80 font-normal">
              {selectedProduct.description}
            </p>

            {/* Features Checklist */}
            <div className="mt-6">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Engineered Highlights</h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {selectedProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 rounded-xl bg-sand/30 p-2.5 border border-ink/5">
                    <Check className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                    <span className="text-[12px] leading-snug text-ink/85">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Matrix */}
            <div className="mt-6 rounded-2xl bg-sand/40 p-4 border border-ink/10">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Technical Specifications</h4>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
                {Object.entries(selectedProduct.specs).map(([key, val]) => (
                  <div key={key} className="border-b border-ink/10 pb-1.5">
                    <dt className="font-semibold text-ink/60">{key}</dt>
                    <dd className="font-medium text-ink mt-0.5">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20am%20interested%20in%20pricing%20and%20specifications%20for%20the%20${encodeURIComponent(selectedProduct.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream shadow-md transition-colors hover:bg-terracotta"
              >
                Inquire on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#estimator"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-sand"
              >
                Calculate Full Package
              </a>
            </div>
          </div>
        </div>

        {/* Complete 8 Products Gallery Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
            <h4 className="font-display text-2xl font-light uppercase tracking-[-0.01em] text-ink">
              All 8 Hardware Models
            </h4>
            <span className="text-[12px] text-ink/60">Click any switchboard to inspect details</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productsList.map((prod, idx) => {
              const isSelected = selectedProduct.id === prod.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    const el = document.getElementById('products');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative rounded-3xl p-5 border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-terracotta bg-cream shadow-lg ring-2 ring-terracotta/20 scale-[1.02]'
                      : 'border-ink/10 bg-cream/80 hover:bg-cream hover:shadow-md hover:border-ink/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-sand px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-terracotta">
                      {prod.moduleSize}
                    </span>
                    <span className="text-[11px] font-bold text-ink/40">#{idx + 1}</span>
                  </div>

                  <div className="relative aspect-square w-full rounded-2xl bg-sand/30 p-4 flex items-center justify-center overflow-hidden mb-4 border border-ink/5">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-[140px] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h5 className="font-display text-base font-medium text-ink line-clamp-1 group-hover:text-terracotta transition-colors">
                    {prod.name}
                  </h5>
                  <p className="mt-1 text-[12px] text-ink/60 line-clamp-2 leading-snug">
                    {prod.tagline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-terracotta flex items-center gap-1">
                      <Eye className="h-3 w-3" /> View Specs
                    </span>
                    <span className="text-ink/40 font-medium">Retrofit</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Core Hardware Advantages */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all hover:border-terracotta/30">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-terracotta">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg font-medium">Standard Gang Fit</h4>
            <p className="mt-1 text-[13px] leading-relaxed text-ink/70">
              Fits 2M, 4M, 6M, 8M & 12M standard Indian electrical wall boxes with zero alterations.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all hover:border-terracotta/30">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-terracotta">
              <Fan className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg font-medium">Zero-Hum Fan Tech</h4>
            <p className="mt-1 text-[13px] leading-relaxed text-ink/70">
              Digital capacitor regulation prevents electrical buzzing in BLDC and induction ceiling fans.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all hover:border-terracotta/30">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-terracotta">
              <Power className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg font-medium">16A Heavy Sockets</h4>
            <p className="mt-1 text-[13px] leading-relaxed text-ink/70">
              Universal power sockets equipped with child-safety shutters for ACs, geysers, irons and chargers.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all hover:border-terracotta/30">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-terracotta">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg font-medium">2.5kV Surge Safe</h4>
            <p className="mt-1 text-[13px] leading-relaxed text-ink/70">
              Engineered with thermal overload cutoffs and surge suppression built for Indian power grids.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

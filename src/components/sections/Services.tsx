"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "strategy",
    label: "Strategy",
    tag: "01",
    heading: "We start with\npurpose, not pixels.",
    description:
      "Every great website begins with a clear strategy. We dive deep into your goals, audience, and competitive landscape to build a digital roadmap that drives real results.",
    features: ["Discovery workshops", "Competitor analysis", "User research", "Content strategy"],
    seed: "1011/1200/900",
  },
  {
    id: "design",
    label: "Design",
    tag: "02",
    heading: "Interfaces that\nfeel inevitable.",
    description:
      "Our designers craft pixel-perfect interfaces that balance beauty with function. From brand identity to complete UI systems, every detail is intentional.",
    features: ["Brand identity", "UI / UX design", "Design systems", "Prototypes"],
    seed: "42/1200/900",
  },
  {
    id: "development",
    label: "Development",
    tag: "03",
    heading: "Code built to\nlast and scale.",
    description:
      "We build with Next.js, React, and modern web tech to deliver lightning-fast, SEO-ready websites that scale alongside your business.",
    features: ["Next.js & React", "Custom CMS", "API integrations", "Performance"],
    seed: "180/1200/900",
  },
  {
    id: "launch",
    label: "Launch",
    tag: "04",
    heading: "From code to live —\nin confidence.",
    description:
      "We handle every detail of deployment: infrastructure, monitoring, analytics and ongoing support, so your launch lands perfectly.",
    features: ["Cloud deployment", "SEO & metadata", "Analytics setup", "Ongoing support"],
    seed: "250/1200/900",
  },
];

function ServiceImage({
  service,
  index,
  onVisible,
}: {
  service: (typeof services)[0];
  index: number;
  onVisible: (idx: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Fires when the middle band of the card crosses the viewport center
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) onVisible(index);
  }, [inView, index, onVisible]);

  return (
    <div ref={ref} className="min-h-screen flex items-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {/* Image card with 4:3 ratio */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.07]"
          style={{ aspectRatio: "4/3" }}>
          <Image
            src={`https://picsum.photos/${service.seed}`}
            alt={service.label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          {/* Browser chrome bar */}
          <div className="absolute top-4 left-4 right-4 h-7 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center px-3 gap-2 z-10">
            <div className="flex gap-1.5 flex-none">
              <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </div>
            <div className="flex-1 h-4 rounded-lg bg-white/[0.06] flex items-center px-2.5">
              <span className="text-white/25 text-[9px]">webzapro.com/{service.id}</span>
            </div>
          </div>
          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10">
            <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
              {service.tag} — {service.label}
            </div>
            <div className="text-white font-bold text-lg leading-tight">
              {service.heading.replace("\n", " ")}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  const handleVisible = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const current = services[active];

  return (
    <section id="services" className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-16 lg:gap-24">

          {/* ── LEFT: sticky panel ── */}
          <div className="w-[38%] flex-none hidden md:block">
            <div className="sticky top-0 h-screen flex flex-col justify-center py-24">

              {/* Section label */}
              <p className="text-white/30 text-xs uppercase tracking-widest mb-10">What we do</p>

              {/* Service name list — active is large + bright */}
              <div className="mb-10 space-y-1">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.id}
                    animate={{
                      color: active === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.18)",
                      fontSize: active === i ? "52px" : "32px",
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-black tracking-tight leading-[1] cursor-default"
                  >
                    {svc.label}
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.08] mb-8" />

              {/* Active service description + chips */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                    {current.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {current.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] text-white/45 border border-white/10 rounded-full px-3 py-1"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="flex items-center gap-2 mt-12">
                {services.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      width: active === i ? 22 : 5,
                      backgroundColor:
                        active === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.18)",
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-1 rounded-full"
                  />
                ))}
                <span className="text-white/25 text-xs ml-2">
                  {current.tag} / {services.length.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: scrolling image column ── */}
          <div className="flex-1">
            {services.map((svc, i) => (
              <ServiceImage
                key={svc.id}
                service={svc}
                index={i}
                onVisible={handleVisible}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

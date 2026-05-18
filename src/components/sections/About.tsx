"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects delivered", sub: "Across 12 industries" },
  { value: "35+", label: "Happy clients", sub: "From startups to enterprises" },
  { value: "5+", label: "Years of craft", sub: "Est. 2020" },
  { value: "100%", label: "Client satisfaction", sub: "We don't ship until it's right" },
];

const values = [
  { title: "Craft over commodity", body: "We obsess over details most agencies skip — typography, motion, micro-interactions." },
  { title: "Radical transparency", body: "No surprise invoices or scope creep. We agree on everything upfront." },
  { title: "Speed without sacrifice", body: "Fast delivery doesn't mean cutting corners — it means working smarter." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Top block */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-5">About us</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-8">
              A team obsessed
              <br />
              with craft.
            </h2>
            <p className="text-white/45 leading-relaxed text-lg mb-5">
              We&apos;re a focused studio of designers, developers, and strategists who believe the internet should be faster, more intentional, and more human.
            </p>
            <p className="text-white/30 leading-relaxed">
              Founded on the belief that every business deserves a world-class digital presence, WebzaPro has grown into a trusted partner for founders and brand leaders who understand that their website is their best salesperson.
            </p>
          </motion.div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-white/25 text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values row */}
        <div className="grid md:grid-cols-3 gap-3 pt-8 border-t border-white/[0.06]">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.55 }}
              className="rounded-2xl border border-white/[0.06] p-6 hover:border-white/15 transition-colors"
            >
              <div className="text-sm font-semibold text-white mb-2">{v.title}</div>
              <div className="text-white/40 text-sm leading-relaxed">{v.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

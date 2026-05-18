"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    logo: "L",
    logoGradient: "from-rose-400 to-pink-600",
    company: "Luminary",
    quote:
      "WebzaPro delivered a website that exceeded every expectation. Our conversions jumped 40% in the first month after launch — it's been transformational for the brand.",
    name: "Sarah Chen",
    role: "CEO, Luminary Beauty",
    projectGradient: "from-rose-500/60 via-pink-600/60 to-purple-700/60",
    imageSeed: "fashion-luxury-store",
  },
  {
    logo: "C",
    logoGradient: "from-blue-400 to-violet-600",
    company: "Comet AI",
    quote:
      "From strategy to launch, the process was seamless. They truly understood our product vision and translated it into a stunning, high-performance platform.",
    name: "Marcus Rivera",
    role: "Head of Growth, Comet AI",
    projectGradient: "from-blue-500/60 via-violet-600/60 to-indigo-700/60",
    imageSeed: "technology-interface-dark",
  },
  {
    logo: "S",
    logoGradient: "from-teal-400 to-emerald-600",
    company: "Sprout",
    quote:
      "The team at WebzaPro doesn't just build websites — they build businesses. Our new site has been our best marketing investment by a wide margin.",
    name: "Priya Nair",
    role: "Founder, Sprout Finance",
    projectGradient: "from-teal-500/60 via-emerald-600/60 to-green-700/60",
    imageSeed: "finance-clean-modern",
  },
  {
    logo: "N",
    logoGradient: "from-purple-400 to-fuchsia-600",
    company: "Nova Studios",
    quote:
      "Professional, creative, and incredibly fast. If you're serious about your online presence, WebzaPro is the only call you need to make.",
    name: "James Okafor",
    role: "Creative Director, Nova Studios",
    projectGradient: "from-fuchsia-600/60 via-purple-700/60 to-indigo-800/60",
    imageSeed: "creative-studio-abstract",
  },
];

const companyNames = testimonials.map((t) => t.company);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section ref={ref} className="py-32 px-6 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Client stories</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
            Trusted by
            <br />
            ambitious brands.
          </h2>
        </motion.div>

        {/* Cards layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="grid md:grid-cols-3 gap-3 mb-6"
        >
          {/* Decorative side card */}
          <div className="hidden md:flex rounded-2xl border border-white/[0.08] overflow-hidden flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 relative min-h-48"
              >
                <Image
                  src={`https://picsum.photos/seed/${current.imageSeed}/600/500`}
                  alt={current.company}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                {/* Color gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${current.projectGradient}`} />
                {/* Subtle browser chrome mock */}
                <div className="absolute top-3 left-3 right-3 h-5 rounded-md bg-black/30 backdrop-blur-sm border border-white/[0.08] flex items-center px-2 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="flex-1 h-2.5 rounded bg-white/[0.06]" />
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="p-5 border-t border-white/[0.06]">
              <div className="text-white/30 text-xs uppercase tracking-wider">Featured project</div>
              <div className="text-white/60 text-sm mt-1">{current.company}</div>
            </div>
          </div>

          {/* Main testimonial card */}
          <div className="md:col-span-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-10 flex flex-col justify-between min-h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full"
              >
                {/* Logo chip */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${current.logoGradient} flex items-center justify-center text-white font-black text-base mb-8`}
                >
                  {current.logo}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-semibold text-white leading-snug flex-1 mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-medium">{current.name}</div>
                    <div className="text-white/35 text-sm">{current.role}</div>
                  </div>
                  <button className="flex items-center gap-1.5 text-white/35 text-sm hover:text-white transition-colors group">
                    Read more
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          {/* Company tabs */}
          <div className="flex gap-5 flex-wrap">
            {companyNames.map((name, i) => (
              <button
                key={name}
                onClick={() => setActive(i)}
                className={`text-sm transition-colors duration-200 ${
                  active === i ? "text-white" : "text-white/25 hover:text-white/50"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-all"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-all"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Luminary",
    category: "E-Commerce",
    description: "Premium skincare brand with a fully custom storefront and smooth micro-interactions.",
    seed: "fashion-luxury-store",
    slug: "luminary",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    sizes: "(max-width: 768px) 100vw, 800px",
  },
  {
    title: "Comet AI",
    category: "SaaS Platform",
    description: "AI-powered analytics dashboard for high-growth B2B startups.",
    seed: "technology-interface-dark",
    slug: "comet-ai",
    span: "col-span-1",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 50vw, 400px",
  },
  {
    title: "Archform Studio",
    category: "Architecture",
    description: "Minimalist portfolio for an award-winning architecture firm.",
    seed: "architecture-minimal-space",
    slug: "archform",
    span: "col-span-1",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 50vw, 400px",
  },
  {
    title: "Sprout Finance",
    category: "FinTech",
    description: "Modern banking interface that makes personal finance genuinely enjoyable.",
    seed: "finance-clean-modern",
    slug: "sprout-finance",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    sizes: "(max-width: 768px) 100vw, 800px",
  },
  {
    title: "Nova Studios",
    category: "Creative Agency",
    description: "Bold, experimental portfolio for a digital creative collective.",
    seed: "creative-studio-abstract",
    slug: "nova-studios",
    span: "col-span-1",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 50vw, 400px",
  },
  {
    title: "Peaks Health",
    category: "Healthcare",
    description: "Patient-first telehealth platform with seamless, accessible UX.",
    seed: "medical-health-modern",
    slug: "peaks-health",
    span: "col-span-1",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 50vw, 400px",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-32 px-6 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Our work</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
              Work that
              <br />
              speaks for itself.
            </h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors group"
          >
            See all projects
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.a>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
            >
              <div className={`${project.aspect} relative bg-zinc-900`}>
                {/* Website screenshot image */}
                <Image
                  src={`https://picsum.photos/seed/${project.seed}/1200/800`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={project.sizes}
                />

                {/* Top dark gradient (for browser bar readability) */}
                <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/50 to-transparent z-10" />

                {/* Minimal browser chrome */}
                <div className="absolute top-3 left-3 right-3 z-20 h-6 rounded-lg bg-black/40 backdrop-blur-md border border-white/[0.08] flex items-center px-2.5 gap-2">
                  <div className="flex gap-1 flex-none">
                    <div className="w-2 h-2 rounded-full bg-white/15" />
                    <div className="w-2 h-2 rounded-full bg-white/15" />
                    <div className="w-2 h-2 rounded-full bg-white/15" />
                  </div>
                  <div className="flex-1 h-3.5 rounded-md bg-white/[0.06] flex items-center px-2">
                    <span className="text-white/25 text-[8px] truncate">
                      webzapro.com/work/{project.slug}
                    </span>
                  </div>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight size={12} className="text-white" />
                </div>

                {/* Bottom gradient + info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="text-white/50 text-[10px] uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <div className="text-white font-bold text-base">{project.title}</div>
                  <div className="text-white/40 text-xs mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

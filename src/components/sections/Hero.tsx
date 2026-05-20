/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SHOT = "https://api.microlink.io/?screenshot=true&meta=false&embed=screenshot.url&url=";

const row1 = [
  { site: "https://stripe.com",      label: "Stripe",     tag: "Payments",    w: "w-[280px]" },
  { site: "https://linear.app",      label: "Linear",     tag: "SaaS",        w: "w-[380px]" },
  { site: "https://vercel.com",      label: "Vercel",     tag: "Platform",    w: "w-[320px]" },
  { site: "https://notion.so",       label: "Notion",     tag: "Productivity",w: "w-[260px]" },
  { site: "https://supabase.com",    label: "Supabase",   tag: "Database",    w: "w-[420px]" },
  { site: "https://resend.com",      label: "Resend",     tag: "Email API",   w: "w-[300px]" },
  { site: "https://cal.com",         label: "Cal.com",    tag: "Scheduling",  w: "w-[350px]" },
  { site: "https://loom.com",        label: "Loom",       tag: "Video",       w: "w-[280px]" },
  { site: "https://mercury.com",     label: "Mercury",    tag: "Banking",     w: "w-[400px]" },
  { site: "https://cursor.com",      label: "Cursor",     tag: "Dev Tools",   w: "w-[320px]" },
];

const row2 = [
  { site: "https://webflow.com",     label: "Webflow",    tag: "No-Code",     w: "w-[360px]" },
  { site: "https://figma.com",       label: "Figma",      tag: "Design",      w: "w-[300px]" },
  { site: "https://railway.app",     label: "Railway",    tag: "Infra",       w: "w-[280px]" },
  { site: "https://airtable.com",    label: "Airtable",   tag: "Database",    w: "w-[420px]" },
  { site: "https://arc.net",         label: "Arc",        tag: "Browser",     w: "w-[320px]" },
  { site: "https://zed.dev",         label: "Zed",        tag: "Editor",      w: "w-[260px]" },
  { site: "https://clerk.com",       label: "Clerk",      tag: "Auth",        w: "w-[380px]" },
  { site: "https://descript.com",    label: "Descript",   tag: "Media",       w: "w-[300px]" },
  { site: "https://retool.com",      label: "Retool",     tag: "Tools",       w: "w-[350px]" },
  { site: "https://fly.io",          label: "Fly.io",     tag: "Platform",    w: "w-[280px]" },
];

function MarqueeCard({
  site,
  label,
  tag,
  w,
}: {
  site: string;
  label: string;
  tag: string;
  w: string;
}) {
  return (
    <div className={`flex-none ${w} h-[400px] mx-2 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/[0.07] hover:border-white/20 transition-colors duration-300 bg-zinc-900`}>
      {/* Screenshot */}
      <img
        src={`${SHOT}${encodeURIComponent(site)}`}
        alt={label}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Minimal browser bar at top */}
      <div className="absolute top-3 left-3 right-3 h-6 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center px-2.5 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-1 flex-none">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <span className="text-white/30 text-[9px] truncate flex-1">{site.replace("https://", "")}</span>
      </div>
      {/* Bottom label */}
      <div className="absolute inset-x-0 bottom-0 px-4 py-3.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-white/45 text-[9px] uppercase tracking-wider">{tag}</div>
        <div className="text-white text-sm font-semibold">{label}</div>
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Hero text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center pt-36 pb-14 px-6 flex-1"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="#work"
            className="inline-flex items-center gap-2 text-xs text-white/50 border border-white/10 rounded-full px-4 py-1.5 mb-10 hover:border-white/20 hover:text-white/70 transition-all group"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Now accepting new clients · 2026
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-[96px] font-bold tracking-tighter text-white leading-[0.92] max-w-4xl"
        >
          We build websites
          <br />
          <span className="text-white/30">that perform.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-7 text-lg text-zinc-400 max-w-md leading-relaxed tracking-tight"
        >
          WebzaPro is a full-service web development agency crafting fast, scalable, and beautiful digital experiences for ambitious brands.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-9 flex items-center gap-3">
          <Link
            href="#work"
            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            View Our Work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-white/40 hover:bg-white/[0.04] transition-all"
          >
            Start a Project
          </Link>
        </motion.div>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="overflow-hidden pb-0"
      >
        {/* Row 1 — scroll left */}
        <div className="flex w-max animate-marquee mb-3">
          {[...row1, ...row1].map((card, i) => (
            <MarqueeCard key={i} {...card} />
          ))}
        </div>
        {/* Row 2 — scroll right */}
        <div className="flex w-max animate-marquee-reverse">
          {[...row2, ...row2].map((card, i) => (
            <MarqueeCard key={i} {...card} />
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

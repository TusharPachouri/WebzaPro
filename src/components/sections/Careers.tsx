"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const openRoles = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    team: "Engineering",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    team: "Design",
  },
  {
    title: "Web Developer (Next.js)",
    type: "Contract",
    location: "Remote",
    team: "Engineering",
  },
  {
    title: "Growth & Partnerships Manager",
    type: "Full-time",
    location: "Remote",
    team: "Business",
  },
];

const perks = [
  { emoji: "🌍", label: "100% remote", sub: "Work from anywhere" },
  { emoji: "📚", label: "Learning budget", sub: "$1,200 / year" },
  { emoji: "⚡", label: "Fast-paced", sub: "Ship real work fast" },
  { emoji: "🎨", label: "Creative freedom", sub: "We trust your craft" },
];

export default function Careers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" ref={ref} className="py-32 px-6 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Join us</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-8">
              Build the internet
              <br />
              with us.
            </h2>
            <p className="text-white/45 leading-relaxed text-lg mb-10">
              We&apos;re a small, focused team that punches far above our weight. If you care deeply about craft and want to ship work you&apos;re proud of, we want to hear from you.
            </p>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-3">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07 + 0.3 }}
                  className="rounded-xl border border-white/[0.07] p-4"
                >
                  <div className="text-xl mb-2">{perk.emoji}</div>
                  <div className="text-white text-sm font-semibold">{perk.label}</div>
                  <div className="text-white/35 text-xs mt-0.5">{perk.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — open roles */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-sm text-white/40 mb-6 uppercase tracking-widest">Open positions</div>
            <div className="space-y-2">
              {openRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.35 }}
                  className="group flex items-center justify-between rounded-xl border border-white/[0.07] px-5 py-4 hover:border-white/20 hover:bg-white/[0.03] transition-all cursor-pointer"
                >
                  <div>
                    <div className="text-white text-sm font-semibold">{role.title}</div>
                    <div className="text-white/35 text-xs mt-0.5">
                      {role.team} · {role.type} · {role.location}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-none"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-white/25 text-sm">
              Don&apos;t see your role?{" "}
              <a href="mailto:hello@webzapro.com" className="text-white/50 hover:text-white underline underline-offset-2 transition-colors">
                Send us your work anyway.
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

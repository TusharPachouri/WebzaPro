"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "Perfect for small businesses and personal brands needing a polished web presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "2 revision rounds",
      "1 month of support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$6,500",
    period: "one-time",
    description: "For scaling companies who need power, performance, and a standout experience.",
    features: [
      "Up to 15 pages",
      "Custom animations",
      "Advanced SEO",
      "CMS integration",
      "Analytics setup",
      "Unlimited revisions",
      "3 months of support",
    ],
    cta: "Most popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "let's talk",
    description: "Full-scale, bespoke solutions for ambitious brands with complex requirements.",
    features: [
      "Unlimited pages",
      "Full custom development",
      "E-commerce / SaaS builds",
      "API integrations",
      "Performance audits",
      "Priority support",
      "Dedicated team",
    ],
    cta: "Let's talk",
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Pricing</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
            Simple pricing.
            <br />
            <span className="text-white/25">No surprises.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-white text-black"
                  : "bg-white/[0.02] border border-white/[0.08] text-white"
              }`}
            >
              {/* Plan name */}
              <div
                className={`text-xs font-semibold uppercase tracking-widest mb-6 ${
                  plan.highlighted ? "text-black/40" : "text-white/35"
                }`}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className={`text-5xl font-black ${plan.highlighted ? "text-black" : "text-white"}`}>
                  {plan.price}
                </span>
              </div>
              <div
                className={`text-xs mb-6 ${plan.highlighted ? "text-black/40" : "text-white/30"}`}
              >
                {plan.period}
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  plan.highlighted ? "text-black/55" : "text-white/40"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-start gap-2.5 ${
                      plan.highlighted ? "text-black/65" : "text-white/45"
                    }`}
                  >
                    <Check
                      size={14}
                      className={`mt-0.5 flex-none ${plan.highlighted ? "text-black" : "text-white/60"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className={`text-center py-3.5 rounded-full text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-black/85"
                    : "border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.04]"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-white/25 text-sm mt-8"
        >
          All projects include a free discovery call and detailed proposal. No commitment required.
        </motion.p>
      </div>
    </section>
  );
}

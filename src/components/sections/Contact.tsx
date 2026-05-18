"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Bold CTA strip */}
      <div className="relative py-40 px-6 bg-black border-t border-white/[0.06] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="w-64 h-64 rounded-full bg-violet-600/10 blur-2xl absolute" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <h2 className="text-6xl sm:text-7xl md:text-[100px] font-black tracking-tight text-white leading-[0.9] mb-8">
            Build bold.
            <br />
            Launch fast.
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Let&apos;s make something the internet hasn&apos;t seen before.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors group"
          >
            Start a project
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Contact form section */}
      <section id="contact" ref={ref} className="py-32 px-6 bg-black border-t border-white/[0.06]">
        <div id="contact-form" className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Get in touch</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[0.95] mb-8">
                Ready to build
                <br />
                something great?
              </h2>
              <p className="text-white/45 leading-relaxed mb-10">
                Tell us about your project and we&apos;ll get back within 24 hours with a clear next step — no sales pitch, just a real conversation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center">
                    <Mail size={14} className="text-white/50" />
                  </div>
                  <span className="text-white/45 text-sm">hello@webzapro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center">
                    <MapPin size={14} className="text-white/50" />
                  </div>
                  <span className="text-white/45 text-sm">Remote-first · Available worldwide</span>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="text-4xl mb-4">✦</div>
                  <h3 className="text-2xl font-black text-white mb-3">Message sent!</h3>
                  <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                    We&apos;ll review your project and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-white/25 transition-colors appearance-none"
                  >
                    <option value="" className="bg-zinc-900">Budget range</option>
                    <option value="starter" className="bg-zinc-900">Under $5,000</option>
                    <option value="growth" className="bg-zinc-900">$5,000 – $15,000</option>
                    <option value="enterprise" className="bg-zinc-900">$15,000+</option>
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send message
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

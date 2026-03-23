import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { plans, faqs } from "../constants";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen py-16">
      <SectionTitle
        badge="Membership Plans"
        title="Choose a plan and start your fitness journey"
        subtitle="Simple pricing, powerful support, and plans that fit both budget and ambition."
      />

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`rounded-[1.9rem] border p-7 backdrop-blur-xl ${plan.featured ? "border-emerald-400 bg-gradient-to-b from-emerald-400/20 to-white/5 shadow-2xl shadow-emerald-500/10" : "border-white/10 bg-white/5"}`}
            >
              {plan.featured && (
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black uppercase tracking-[0.25em] text-slate-950">
                  Most Popular
                </span>
              )}
              <h3 className="mt-4 text-3xl font-black">{plan.name}</h3>
              <p className="mt-3 text-slate-300">{plan.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="pb-1 text-slate-400">{plan.period}</span>
              </div>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <p className="text-slate-200">{feature}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className={`mt-8 block rounded-2xl px-5 py-4 text-center text-sm font-black transition ${plan.featured ? "bg-gradient-to-r from-emerald-400 to-lime-300 text-slate-950 hover:-translate-y-0.5" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle badge="FAQs" title="Everything you might want to know" subtitle="Quick answers for common questions before you join the gym." />
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.button
                  key={item.q}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  whileHover={{ y: -4 }}
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-black">{item.q}</p>
                    <span className="text-2xl font-light text-emerald-300">{isOpen ? "−" : "+"}</span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-4 overflow-hidden leading-7 text-slate-300">
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Trophy, Users, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { transformations } from "../constants";

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <SectionTitle
        badge="About Us"
        title="Experience the PowerHouse Vibe"
        subtitle="We aren't just a gym; we are a community of fitness enthusiasts dedicated to strength, discipline, and transformation."
      />
      
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Certified Coaches", text: "Experienced trainers for safe and effective progress." },
            { icon: HeartPulse, title: "Health Focused", text: "Fitness programs that improve energy, posture, and confidence." },
            { icon: Trophy, title: "Results Driven", text: "Track workouts, body stats, and visible transformation over time." },
            { icon: Users, title: "Strong Community", text: "A motivating environment that helps you stay consistent." },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 to-cyan-500/10 p-8 md:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_25%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                Why choose us
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">More than a gym — a complete transformation system.</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Modern imported equipment",
                  "Beginner to advanced support",
                  "Diet and recovery guidance",
                  "Friendly motivating atmosphere",
                  "Flexible morning/evening batches",
                  "Progress tracking and body analysis",
                ].map((point, i) => (
                  <motion.div key={point} whileHover={{ scale: 1.03 }} className="flex items-start gap-3 rounded-2xl bg-black/20 p-4 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <p className="text-slate-100">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {transformations.map((item, i) => (
                <motion.div key={item.name} whileHover={{ x: 8, scale: 1.02 }} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Member story</p>
                  <p className="mt-2 text-2xl font-black">{item.name}</p>
                  <p className="mt-2 text-emerald-300">{item.result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

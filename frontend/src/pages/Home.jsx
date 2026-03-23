import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Sparkles, ArrowUpRight, ChevronRight } from "lucide-react";
import GlowOrb from "../components/GlowOrb";
import SectionTitle from "../components/SectionTitle";
import FitnessTools from "../components/FitnessTools";
import { gallery, appFeatures } from "../constants";

export default function Home() {
  const [selectedGoal, setSelectedGoal] = useState("Fat Loss");

  const goalText = useMemo(() => {
    const content = {
      "Fat Loss": "Structured cardio, HIIT classes, calorie guidance, and weekly progress tracking.",
      "Muscle Gain": "Progressive overload plans, strength coaching, and high-protein meal guidance.",
      "General Fitness": "Balanced routines for stamina, mobility, recovery, and healthy consistency.",
    };
    return content[selectedGoal];
  }, [selectedGoal]);

  return (
    <div className="min-h-screen">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur">
            <Sparkles className="h-4 w-4" /> Transform Your Body. Build Your Discipline.
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            The gym experience that feels <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">alive, bold, and premium</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Premium equipment, expert trainers, cinematic design, interactive sections, group classes, nutrition guidance, and a high-energy vibe that pushes members to stay consistent.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="group rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:-translate-y-1">
              <span className="inline-flex items-center gap-2">Start Free Trial <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
              <Play className="h-4 w-4" /> Explore Programs
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_25%)]" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div whileHover={{ scale: 1.03, rotate: -1 }} className="rounded-3xl bg-gradient-to-br from-emerald-500 to-lime-300 p-5 text-slate-950 shadow-lg shadow-emerald-500/20">
                  <p className="text-sm font-semibold">Personalized Goal</p>
                  <p className="mt-2 text-2xl font-black">{selectedGoal}</p>
                  <p className="mt-2 text-sm leading-6">{goalText}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, rotate: 1 }} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">BMI / Body Assessment</p>
                  <p className="mt-2 text-3xl font-black">Free</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Get your first fitness consultation and starting roadmap without extra cost.</p>
                </motion.div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Fat Loss", "Muscle Gain", "General Fitness"].map((goal) => (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${selectedGoal === goal ? "bg-gradient-to-r from-emerald-400 to-lime-300 text-slate-950 shadow-lg shadow-emerald-500/20" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}
                  >
                    {goal}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* QUICK INFO */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle
            badge="Next Level System"
            title="Built like a real gym startup product"
            subtitle="This design now includes the core modules needed for a scalable full-stack gym platform."
          />
        <div className="grid gap-6 lg:grid-cols-4">
          {appFeatures.map(({ title, text, icon: Icon }, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
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

      {/* BMI SECTION */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <SectionTitle
          badge="BMI Calculator"
          title="Check your fitness level instantly"
          subtitle="Simple tools for a quick health snapshot before starting your journey"
        />
        <FitnessTools />
      </section>

      {/* GALLERY SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <SectionTitle
            badge="Gallery"
            title="Explore our premium gym environment"
            subtitle="A bold setup for cardio, strength, transformation, recovery, and classes"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.04, y: -8 }}
                className="group relative flex h-64 items-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5 backdrop-blur-xl"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                <p className="relative z-10 text-xl font-black">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </section>
    </div>
  );
}

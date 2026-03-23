import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { trainers } from "../constants";

export default function Programs() {
  const programs = [
    { title: "Strength Training", text: "Build muscle, improve posture, and increase total body strength with structured lifting programs." },
    { title: "Fat Loss Program", text: "Burn calories with cardio, circuits, and guided HIIT sessions designed for sustainable progress." },
    { title: "Functional Fitness", text: "Improve everyday movement, agility, stamina, and mobility with smart full-body training." },
    { title: "Cross Training", text: "Mix endurance, power, and conditioning to challenge your body in new ways." },
    { title: "Yoga & Recovery", text: "Balance intense workouts with stretching, mobility, and stress relief sessions." },
    { title: "Transformation Coaching", text: "A complete workout + diet + accountability system for major body change goals." },
  ];

  return (
    <div className="min-h-screen py-16">
      <SectionTitle
        badge="Programs"
        title="Training plans built for every goal"
        subtitle="From beginner-friendly routines to advanced performance training, choose a program that matches your body goals and consistency level."
      />

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-cyan-500/0 transition duration-500 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10" />
              <div className="relative">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-300">
                  Join this program <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle
          badge="Expert Trainers"
          title="Train with coaches who know how to get results"
          subtitle="Each trainer focuses on a specific transformation area so members get proper guidance instead of random workouts."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-300 text-xl font-black text-slate-950 shadow-lg shadow-emerald-500/25">
                  {idx + 1}
                </div>
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-black">{trainer.name}</h3>
              <p className="mt-1 font-semibold text-emerald-300">{trainer.role}</p>
              <p className="mt-4 leading-7 text-slate-300">{trainer.info}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-white">
                Book consultation <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

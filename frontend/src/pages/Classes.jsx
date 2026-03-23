import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock3 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { classes } from "../constants";

export default function Classes() {
  return (
    <div className="min-h-screen py-16">
      <SectionTitle
        badge="Weekly Classes"
        title="High-energy group sessions that keep you locked in"
        subtitle="Train with a team, stay consistent, and make fitness more fun with guided batches every day."
      />

      <section className="mx-auto max-w-4xl px-5 py-8 md:px-8">
        <div className="grid gap-4">
          {classes.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{ x: 6 }}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xl font-black">{item.title}</p>
                <p className="mt-1 text-slate-300">{item.level}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock3 className="h-4 w-4 text-emerald-300" />
                <span className="font-semibold">{item.time}</span>
              </div>
              <Link to="/contact" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold hover:bg-white/10">
                Reserve Spot
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

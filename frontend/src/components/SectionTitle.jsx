import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function SectionTitle({ badge, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300 backdrop-blur">
        {badge}
      </span>
      <h2 className="mt-5 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{subtitle}</p>
    </motion.div>
  );
}

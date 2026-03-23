import { useState } from "react";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) return;
    const h = Number(height) / 100;
    if (!h) return;
    const result = (Number(weight) / (h * h)).toFixed(1);
    setBmi(result);
  };

  const bmiLabel = bmi
    ? bmi < 18.5
      ? "Underweight"
      : bmi < 25
      ? "Normal"
      : bmi < 30
      ? "Overweight"
      : "Obese"
    : "";

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40"
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: -2 }}
        onClick={calculateBMI}
        className="mt-4 w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 px-5 py-4 font-black text-slate-950"
      >
        Calculate BMI
      </motion.button>
      {bmi && (
        <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-center">
          <p className="text-lg font-bold">Your BMI: {bmi}</p>
          <p className="mt-1 text-sm text-emerald-200">Category: {bmiLabel}</p>
        </div>
      )}
    </div>
  );
}

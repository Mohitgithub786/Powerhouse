import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Calculator, Flame } from "lucide-react";

export default function FitnessTools() {
  const [activeTab, setActiveTab] = useState("bmi");
  
  // BMI State
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // Calorie State
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) return;
    const h = Number(height) / 100;
    const result = (Number(weight) / (h * h)).toFixed(1);
    setBmi(result);
  };

  const calculateCalories = () => {
    if (!age || !height || !weight) return;
    // Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === "male" ? bmr + 5 : bmr - 161;
    setCalories(Math.round(bmr * Number(activity)));
  };

  const bmiLabel = bmi
    ? bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese"
    : "";

  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
      <div className="flex gap-2 p-1 mb-8 rounded-2xl bg-black/40 border border-white/5">
        <button
          onClick={() => setActiveTab("bmi")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition ${activeTab === "bmi" ? "bg-emerald-400 text-slate-950" : "text-slate-400 hover:text-white"}`}
        >
          <Calculator className="h-4 w-4" /> BMI
        </button>
        <button
          onClick={() => setActiveTab("calories")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition ${activeTab === "calories" ? "bg-emerald-400 text-slate-950" : "text-slate-400 hover:text-white"}`}
        >
          <Flame className="h-4 w-4" /> Calories
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "bmi" ? (
          <motion.div
            key="bmi"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-emerald-400/40"
              />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-emerald-400/40"
              />
            </div>
            <button
              onClick={calculateBMI}
              className="w-full rounded-2xl bg-emerald-400 py-4 font-black text-slate-950 shadow-lg shadow-emerald-500/20"
            >
              Calculate BMI
            </button>
            {bmi && (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="mt-4 p-5 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-center">
                <p className="text-sm font-bold text-emerald-300">Your BMI Results</p>
                <p className="text-4xl font-black mt-1">{bmi}</p>
                <p className="text-sm mt-1 text-emerald-200 opacity-80 uppercase tracking-widest">{bmiLabel}</p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="calories"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-emerald-400/40"
              />
              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-emerald-400/40"
              />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none transition focus:border-emerald-400/40"
              />
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none text-slate-300"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none text-slate-300"
              >
                <option value="1.2">Sedentary</option>
                <option value="1.375">Lightly Active</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
                <option value="1.9">Extra Active</option>
              </select>
            </div>

            <button
              onClick={calculateCalories}
              className="w-full rounded-2xl bg-emerald-400 py-4 font-black text-slate-950 shadow-lg shadow-emerald-500/20"
            >
              Estimate Calories
            </button>
            {calories && (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="mt-4 p-5 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-center">
                <p className="text-sm font-bold text-emerald-300">Daily Maintenance Calories</p>
                <p className="text-4xl font-black mt-1">{calories} <span className="text-sm">kcal</span></p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

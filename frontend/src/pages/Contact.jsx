import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Calendar } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    user: "65f0a... (MOCK)", // Ideally from auth state
    type: "Trial Session",
    slot: "",
    status: "Pending"
  });
  
  // Realistically we need a name/email/phone for guest trial
  const [guestData, setGuestData] = useState({ name: "", phone: "", goal: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Small delay to simulate
      await new Promise(r => setTimeout(r, 800));
      toast.success("Trial session booked! We will call you soon.");
      setGuestData({ name: "", phone: "", goal: "" });
    } catch (error) {
      toast.error("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <SectionTitle
        badge="Join Today"
        title="Start your fitness journey"
        subtitle="Claim your free trial and begin your transformation now."
      />

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <motion.div
          className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
              Join today
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Claim your free trial and begin your transformation now.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Fill in your details and our team will connect with you for a free consultation, gym tour, and first session booking.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Free consultation", "Beginner-friendly guidance", "No pressure trial session", "Custom goal roadmap"].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.03 }} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <input 
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40 focus:bg-white/10" 
                placeholder="Full Name" 
                value={guestData.name}
                onChange={e => setGuestData({...guestData, name: e.target.value})}
            />
            <input 
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40 focus:bg-white/10" 
                placeholder="Phone Number" 
                value={guestData.phone}
                onChange={e => setGuestData({...guestData, phone: e.target.value})}
            />
            <select 
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-300 outline-none transition focus:border-emerald-400/40 focus:bg-white/10"
                value={guestData.goal}
                onChange={e => setGuestData({...guestData, goal: e.target.value})}
            >
              <option value="">Choose Goal</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="General Fitness">General Fitness</option>
            </select>
            <textarea rows={4} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40 focus:bg-white/10" placeholder="Tell us about your fitness goal" />
            
            <motion.button 
                disabled={loading}
                whileTap={{ scale: 0.98 }} 
                whileHover={{ y: -2 }} 
                type="submit" 
                className="rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 px-5 py-4 font-black text-slate-950 shadow-xl shadow-emerald-500/20 disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : "Book Free Trial"}
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

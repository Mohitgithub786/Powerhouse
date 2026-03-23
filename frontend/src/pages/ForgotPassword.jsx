import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Loader2, KeyRound } from "lucide-react";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    setLoading(true);
    try {
      const { data } = await API.post("/auth/forgot-password", { email });
      toast.success(data.message || "Reset link sent to your email!");
      setEmail("");
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong!";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-2xl"
      >
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20">
            <KeyRound className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-black">Forgot Password?</h2>
          <p className="mt-2 text-slate-400">No worries, we'll send you reset instructions.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500 group-focus-within:text-emerald-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 py-4 pl-12 pr-4 outline-none transition focus:border-emerald-400/40 focus:ring-1"
              placeholder="Enter your email"
            />
          </div>

          <motion.button
            disabled={loading}
            type="submit"
            whileHover={!loading ? { y: -2 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            className="group w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 py-4 font-black text-slate-950 shadow-xl shadow-emerald-500/20 disabled:opacity-50"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Reset Link"}
              {!loading && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />}
            </span>
          </motion.button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400">
          Remembered?{" "}
          <Link to="/login" className="font-bold text-emerald-300 hover:text-emerald-200">
            Back to login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

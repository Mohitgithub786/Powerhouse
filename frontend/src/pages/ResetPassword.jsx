import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Lock, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await API.put(`/auth/reset-password/${token}`, { password });
      toast.success("Password updated successfully!");
      setTimeout(() => navigate("/login"), 1500);
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
            <Lock className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-black">Set New Password</h2>
          <p className="mt-2 text-slate-400">Create a strong password for your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500 group-focus-within:text-emerald-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 py-4 pl-12 pr-4 outline-none transition focus:border-emerald-400/40 focus:ring-1"
              placeholder="New Password"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500 group-focus-within:text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 py-4 pl-12 pr-4 outline-none transition focus:border-emerald-400/40 focus:ring-1"
              placeholder="Confirm New Password"
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
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Update Password"}
              {!loading && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />}
            </span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

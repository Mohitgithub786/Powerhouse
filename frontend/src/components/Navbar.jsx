import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, X, ArrowUpRight, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-300 p-2 text-slate-950 shadow-lg shadow-emerald-500/30">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-black tracking-wide">POWERHOUSE</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Gym & Fitness Club</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-200 lg:flex">
          {[
            ["About", "/about"],
            ["Programs", "/programs"],
            ["Classes", "/classes"],
            ["Pricing", "/pricing"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={label} to={href} className="relative transition hover:text-emerald-300 after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-emerald-300 after:transition-all hover:after:w-full">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-slate-300 hover:text-white transition">
            Login
          </Link>
          <Link to="/signup" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5">
            Join Now <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          {/* USER PROFILE ICON FOR QUICK ACCESS (MOCK) */}
          <Link to="/dashboard" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <User className="h-5 w-5" />
          </Link>
        </div>

        <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-white/10 bg-white/5 p-2 lg:hidden">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-sm font-semibold text-slate-200 md:px-8">
              {[
                ["About", "/about"],
                ["Programs", "/programs"],
                ["Classes", "/classes"],
                ["Pricing", "/pricing"],
                ["Contact", "/contact"],
                ["Dashboard", "/dashboard"],
                ["Login", "/login"],
              ].map(([label, href]) => (
                <Link key={label} to={href} onClick={() => setMenuOpen(false)} className="hover:text-emerald-300">
                  {label}
                </Link>
              ))}
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 px-4 py-3 text-center font-bold text-slate-950">
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

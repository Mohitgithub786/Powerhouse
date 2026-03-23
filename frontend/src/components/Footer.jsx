import { Link } from "react-router-dom";
import { Dumbbell, MapPin, Phone, Mail, CalendarDays } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1fr_0.75fr_0.75fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-300 p-2 text-slate-950">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black">POWERHOUSE</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Gym & Fitness Club</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            A creative premium gym website template with animated sections, trainers, plans, free trial form, and a futuristic fitness vibe.
          </p>
        </div>

        <div>
          <p className="text-lg font-black">Quick Links</p>
          <div className="mt-4 space-y-3 text-slate-400">
            <Link to="/about" className="block hover:text-emerald-300">About</Link>
            <Link to="/programs" className="block hover:text-emerald-300">Programs</Link>
            <Link to="/pricing" className="block hover:text-emerald-300">Pricing</Link>
            <Link to="/contact" className="block hover:text-emerald-300">Free Trial</Link>
          </div>
        </div>

        <div>
          <p className="text-lg font-black">Opening Hours</p>
          <div className="mt-4 space-y-3 text-slate-400">
            <p>Mon - Sat: 5:00 AM to 10:00 PM</p>
            <p>Sunday: 7:00 AM to 2:00 PM</p>
            <p>Group Classes: Morning & Evening</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-black">Contact</p>
          <div className="mt-4 space-y-4 text-slate-400">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-emerald-300" />
              <span>Model Town, Karnal, Haryana</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-emerald-300" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-emerald-300" />
              <span>hello@powerhousegym.com</span>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-4 w-4 text-emerald-300" />
              <span>Book a free tour anytime this week</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-500 md:px-8">
        © 2026 PowerHouse Gym. Built for a bold fitness brand.
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { User, CalendarDays, Activity, Trophy, Clock3, Dumbbell, ShieldCheck, CreditCard } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const userStats = [
  { icon: Activity, title: "Active Plan", value: "Elite Membership", color: "text-emerald-400" },
  { icon: CalendarDays, title: "Next Session", value: "Mon • 6:00 AM", color: "text-cyan-400" },
  { icon: Trophy, title: "Weight Lost", value: "4.2 kg", color: "text-amber-400" },
  { icon: Clock3, title: "Gym Streak", value: "24 Days", color: "text-rose-400" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black md:text-5xl">Hello, Rohit.</h1>
            <p className="mt-2 text-slate-400">You're crushing it! 80% of your weekly goal is complete.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-lime-300" />
              <div>
                <p className="font-bold">Elite Member</p>
                <p className="text-xs text-slate-400">Valid till Dec 2026</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {userStats.map(({ icon: Icon, title, value, color }) => (
            <motion.div
              key={title}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className={`p-3 rounded-2xl bg-white/5 inline-flex ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-400">{title}</p>
              <p className="mt-1 text-2xl font-black uppercase tracking-tight">{value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-black">Upcoming Workouts & Classes</h3>
            <div className="mt-6 space-y-4">
              {[
                { title: "Strength Camp • With Aman", time: "Monday • 6:30 AM", status: "Active" },
                { title: "HIIT Blast • With Priya", time: "Tuesday • 6:30 AM", status: "Booked" },
                { title: "PT Session • With Rahul", time: "Wednesday • 7:00 PM", status: "Pending" },
              ].map((item) => (
                <div key={item.title} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.time}</p>
                    </div>
                  </div>
                  <span className={`rounded-xl px-4 py-1.5 text-xs font-black uppercase ${item.status === 'Active' ? 'bg-emerald-400 text-slate-950' : 'border border-white/10 text-white'}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-black">Payments & Billing</h3>
               <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm">Monthly Plan</p>
                    <p className="font-black">₹3,499</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm">Next Bill Date</p>
                    <p className="font-black">12 April, 2026</p>
                  </div>
                  <button className="w-full mt-2 rounded-2xl border border-white/10 bg-white/5 py-4 font-black transition hover:bg-white/10 flex items-center justify-center gap-2">
                    <CreditCard className="h-4 w-4" /> Manage Payment
                  </button>
               </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-emerald-400/10 p-8 backdrop-blur-xl border-dashed">
              <h3 className="text-xl font-black">Personal Coach</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-300" />
                <div>
                  <p className="font-black">Rahul Verma</p>
                  <p className="text-xs text-emerald-300">Nutrition & Transformation</p>
                </div>
              </div>
              <button className="w-full mt-6 rounded-2xl bg-emerald-400 py-4 font-black text-slate-950 text-sm">
                Message Coach
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

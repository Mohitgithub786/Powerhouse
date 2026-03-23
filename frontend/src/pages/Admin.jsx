import { motion } from "framer-motion";
import { User, CalendarDays, Activity, Trophy, Clock3, Dumbbell, ShieldCheck, CheckCircle2, ListFilter } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Admin() {
  const stats = [
    ["1,284", "Active Members"],
    ["326", "Bookings This Month"],
    ["₹4.8L", "Monthly Revenue"],
    ["92%", "Renewal Rate"],
  ];

  const recentBookings = [
    { name: "Rohit", type: "Elite Membership", date: "24 Mar", status: "Active" },
    { name: "Simran Kaur", type: "Personal Training", date: "24 Mar", status: "Pending" },
    { name: "Rahul Singh", type: "Trial Session", date: "23 Mar", status: "Confirmed" },
    { name: "Karan Johar", type: "Yoga Class", date: "23 Mar", status: "Cancelled" },
  ];

  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black md:text-5xl">Admin Central</h1>
            <p className="mt-2 text-slate-400">Manage your gym startup, users, and transformation stats.</p>
          </div>
          <div className="inline-flex gap-2">
            <button className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <ListFilter className="h-5 w-5" />
            </button>
            <button className="rounded-2xl bg-emerald-400 px-6 py-4 font-black text-slate-950 shadow-xl shadow-emerald-500/20">
              Add New User
            </button>
          </div>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-3xl font-black text-emerald-300">{value}</p>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl overflow-x-auto">
            <h3 className="text-2xl font-black">Recent Activity</h3>
            <table className="mt-6 w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-slate-500 text-sm">
                  <th className="pb-4 font-semibold">Member</th>
                  <th className="pb-4 font-semibold">Type</th>
                  <th className="pb-4 font-semibold">Date</th>
                  <th className="pb-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentBookings.map((booking, idx) => (
                  <tr key={idx} className="border-b border-white/5">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-800" />
                        <span className="font-bold">{booking.name}</span>
                      </div>
                    </td>
                    <td className="py-5 text-slate-300">{booking.type}</td>
                    <td className="py-5 text-slate-400">{booking.date}</td>
                    <td className="py-5">
                     <span className={`rounded-xl px-3 py-1 text-[10px] font-black uppercase ${booking.status === 'Active' ? 'bg-emerald-400/10 text-emerald-400' : booking.status === 'Cancelled' ? 'bg-rose-400/10 text-rose-400' : 'bg-white/5 text-slate-400'}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-black">Manager Tasks</h3>
              <div className="mt-6 space-y-3">
                {[
                  "Approve 4 PT requests",
                  "Update Elite plan price",
                  "Review transformation leads",
                  "Assign trainer schedules",
                ].map((task) => (
                  <div key={task} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm text-slate-200">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

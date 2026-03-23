import {
  ShieldCheck,
  CalendarDays,
  Activity,
  Trophy,
} from "lucide-react";

export const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    desc: "Perfect for beginners starting their fitness journey.",
    features: ["Gym access", "Locker support", "1 fitness assessment", "Basic trainer guidance"],
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    desc: "Best for serious transformation and routine tracking.",
    features: ["Everything in Basic", "Diet consultation", "Group classes", "Priority support"],
    featured: true,
  },
  {
    name: "Elite",
    price: "₹3,499",
    period: "/month",
    desc: "For advanced training, coaching, and complete support.",
    features: ["Everything in Pro", "Personal trainer", "Custom workout plan", "Monthly progress review"],
  },
];

export const trainers = [
  {
    name: "Aman Singh",
    role: "Strength Coach",
    info: "Specialized in muscle gain, form correction, and strength training.",
  },
  {
    name: "Priya Mehta",
    role: "Fat Loss Expert",
    info: "Focuses on weight loss, HIIT, and sustainable transformation plans.",
  },
  {
    name: "Rahul Verma",
    role: "Nutrition Coach",
    info: "Builds easy diet plans for performance, recovery, and body recomposition.",
  },
];

export const classes = [
  { title: "HIIT Blast", time: "6:00 AM", level: "Intermediate" },
  { title: "Strength Camp", time: "7:30 AM", level: "All Levels" },
  { title: "Yoga Flow", time: "6:00 PM", level: "Beginner" },
  { title: "Core & Cardio", time: "7:30 PM", level: "Intermediate" },
];

export const transformations = [
  { name: "Rohit", result: "-12 kg in 4 months" },
  { name: "Simran", result: "Lean muscle gain in 5 months" },
  { name: "Karan", result: "Strength doubled in 90 days" },
];

export const faqs = [
  {
    q: "Kya beginners join kar sakte hain?",
    a: "Haan ji! Hamare paas beginner-friendly training guide, guided workouts aur certified trainers hain jo aapko zero se start karwaenge.",
  },
  {
    q: "Personal Trainer milta hai?",
    a: "Ji haan. Hamare 'Elite' aur 'Pro' plans me expert trainers personal guidance dete hain taaki aapka form aur progress sahi rahe.",
  },
  {
    q: "Diet plans milte hain?",
    a: "Yes. Hum customized nutrition plans dete hain jo aapke body goals (Fat loss/Muscle gain) ke hisaab se hote hain.",
  },
  {
    q: "Trial session available hai?",
    a: "Haan. Aap 1-day free trial session book kar sakte hain taaki aap gym ka vibe aur equipment khud dekh sakein.",
  },
];

export const gallery = [
  { title: "Elite Weights", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200" },
  { title: "Modern Cardio", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200" },
  { title: "HIIT Studio", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200" },
  { title: "Gym Floor", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200" },
  { title: "Recovery Zone", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200" },
  { title: "Zumba Section", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200" },
];

export const appFeatures = [
  {
    title: "Login / Signup",
    text: "Smooth member authentication flow with secure onboarding and profile creation.",
    icon: ShieldCheck,
  },
  {
    title: "Real Booking System",
    text: "Book trial sessions, PT consultations, classes, and membership onboarding slots.",
    icon: CalendarDays,
  },
  {
    title: "Payment Ready",
    text: "Razorpay or Stripe integration for memberships, PT plans, and class subscriptions.",
    icon: Activity,
  },
  {
    title: "Admin Dashboard",
    text: "Manage users, trainers, classes, plans, leads, bookings, and payments from one place.",
    icon: Trophy,
  },
];

export const dashboardStats = [
  ["1,284", "Active Members"],
  ["326", "Bookings This Month"],
  ["₹4.8L", "Monthly Revenue"],
  ["92%", "Renewal Rate"],
];

export const adminModules = [
  "Manage members & leads",
  "Approve bookings & PT requests",
  "Track payments & subscriptions",
  "Create plans, classes & offers",
  "Assign trainers & schedules",
  "View analytics dashboard",
];

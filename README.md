# PowerHouse Gym - Full Stack App

A premium, animated gym management website and booking platform.

## Project Structure
- **frontend/** - React + Vite + Tailwind CSS v4 + Framer Motion
- **backend/** - Node.js + Express + MongoDB + JWT Auth

## Features
- Fully responsive and animated UI
- User Authentication (Login/Register)
- Gym Membership Plans
- Booking System (Trial, PT, Classes)
- Admin Management (Status updates)
- BMI Calculator

## How to Run locally

### 1. Backend Setup
```bash
cd backend
npm install
# Create a .env file base on .env.example (or the one provided)
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Create a `.env` file in the `backend/` folder with:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/gymapp
JWT_SECRET=your_super_secret_key
```

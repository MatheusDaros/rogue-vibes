"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      setSuccess(true);
      setTimeout(() => router.push("/api/auth/signin"), 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-blue-800 to-slate-900 relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-2xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white opacity-10 rounded-full filter blur-2xl -z-10 animate-pulse" />
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-10 max-w-md w-full mx-auto mt-20 relative z-10">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Rogue Vibes Logo" className="w-16 h-16 mb-2 drop-shadow-lg" />
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight drop-shadow">Create Your Account</h1>
          <p className="text-pink-600 font-semibold text-lg mb-2 animate-bounce">Join the adventure – it starts here!</p>
          <span className="text-slate-500 text-sm mb-2">Sign up to unlock your journey in Rogue Vibes</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5.121 17.804A6.978 6.978 0 0012 20a6.978 6.978 0 006.879-2.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full rounded-lg border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition outline-none bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white shadow-sm"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white shadow-sm"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition outline-none bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-blue-600 to-purple-600 text-white rounded-lg px-6 py-3 font-extrabold text-lg shadow-lg hover:scale-105 hover:from-pink-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                Registering...
              </span>
            ) : (
              "Register"
            )}
          </button>
          {error && <p className="text-red-600 text-sm text-center font-semibold animate-pulse">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center font-semibold animate-bounce">Account created! Redirecting to login...</p>}
        </form>
      </div>
    </div>
  );
}

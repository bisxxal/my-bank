'use client'
import { useState, useEffect, useRef } from "react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, CartesianGrid,
  AreaChart, Area
} from "recharts";
import {
  TrendingUp, TrendingDown, Mail, PieChart as PieChartIcon,
  CreditCard, Target, Plus, ChevronLeft, ChevronRight, Zap, Shield, BarChart2
} from "lucide-react";

const expenseData = [
  { name: "Food", value: 35, color: "#a78bfa" },
  { name: "Transport", value: 20, color: "#34d399" },
  { name: "Shopping", value: 25, color: "#f472b6" },
  { name: "Bills", value: 20, color: "#60a5fa" },
];
const monthlyData = [
  { month: "Jan", income: 28000, expense: 18000 },
  { month: "Feb", income: 32000, expense: 22000 },
  { month: "Mar", income: 27000, expense: 19000 },
  { month: "Apr", income: 35000, expense: 24000 },
  { month: "May", income: 32400, expense: 23100 },
];
const trendData = [
  { day: "Mon", amount: 1200 },
  { day: "Tue", amount: 1900 },
  { day: "Wed", amount: 800 },
  { day: "Thu", amount: 2400 },
  { day: "Fri", amount: 1600 },
  { day: "Sat", amount: 3100 },
  { day: "Sun", amount: 900 },
];
const calendarData = {
  3: { income: 5000, expense: 1200 },
  7: { income: 0, expense: 2300 },
  12: { income: 15000, expense: 800 },
  15: { income: 0, expense: 4500 },
  20: { income: 3000, expense: 600 },
  25: { income: 0, expense: 1800 },
  28: { income: 8000, expense: 2100 },
};
const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const currentMonth = "May 2025";
const generateCalendarDays = () => Array.from({ length: 31 }, (_, i) => i + 1);

export const features = [
  { icon: Mail, label: "Email Tracking", sub: "Auto-fetch from inbox", color: "#22d3ee", bg: "rgba(34,211,238,0.1)" },
  { icon: PieChartIcon, label: "Smart Categories", sub: "AI-powered sorting", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
  { icon: CreditCard, label: "Statements", sub: "Credit & Debit", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
  { icon: Target, label: "Real-time", sub: "Live updates", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
  { icon: Zap, label: "Instant Alerts", sub: "Smart notifications", color: "#f472b6", bg: "rgba(244,114,182,0.1)" },
  { icon: Shield, label: "Bank Security", sub: "256-bit encryption", color: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

const ChartCarousel = () => {
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setStep(s => (s + 1) % 4); setFading(false); }, 350);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const tooltipStyle = {
    backgroundColor: "rgba(15,10,30,0.9)",
    color: "white",
    borderRadius: "12px",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(167,139,250,0.3)",
    fontSize: "13px",
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        background: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(96,165,250,0.05) 100%)",
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: "24px",
        padding: "24px",
        backdropFilter: "blur(20px)",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        minHeight: "340px",
      }}>
        {step === 0 && (
          <div>
            <p style={{ textAlign: "center", fontWeight: 600, marginBottom: 8, color: "#e2d9f3", fontSize: 15 }}>Expense Breakdown</p>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={expenseData} cx="50%" cy="50%" innerRadius={65} outerRadius={105} paddingAngle={4} dataKey="value" label={e => e.name}>
                  {expenseData.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: "white" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
        {step === 1 && (
          <div>
            <p style={{ textAlign: "center", fontWeight: 600, marginBottom: 8, color: "#e2d9f3", fontSize: 15 }}>Monthly Overview</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: "white" }} />
                <Bar dataKey="income" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expense" fill="#f472b6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        {step === 2 && (
          <div>
            <p style={{ textAlign: "center", fontWeight: 600, marginBottom: 8, color: "#e2d9f3", fontSize: 15 }}>Weekly Trend</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="day" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: "white" }} />
                <Area type="monotone" dataKey="amount" stroke="#a78bfa" strokeWidth={2.5} fill="url(#areaGrad)" dot={{ fill: "#a78bfa", r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
        {step === 3 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <p style={{ fontWeight: 600, color: "#e2d9f3", fontSize: 15, margin: 0 }}>Daily Transactions</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <ChevronLeft size={16} style={{ color: "#9ca3af", cursor: "pointer" }} />
                <span style={{ fontSize: 12, color: "#9ca3af" }}>{currentMonth}</span>
                <ChevronRight size={16} style={{ color: "#9ca3af", cursor: "pointer" }} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 4 }}>
              {daysOfWeek.map((d, i) => <div key={i} style={{ textAlign: "center", fontSize: 10, color: "#9ca3af", padding: "2px 0" }}>{d}</div>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
              {generateCalendarDays().map(day => {
                const d = calendarData[day];
                return (
                  <div key={day} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "4px 2px",
                    textAlign: "center",
                    cursor: "pointer",
                    minHeight: 44,
                  }}>
                    <div style={{ fontSize: 11, color: "white", fontWeight: 500 }}>{day}</div>
                    {d?.income > 0 && <div style={{ fontSize: 9, color: "#34d399" }}>↗{d.income > 999 ? `${(d.income/1000).toFixed(0)}k` : d.income}</div>}
                    {d?.expense > 0 && <div style={{ fontSize: 9, color: "#f87171" }}>↘{d.expense > 999 ? `${(d.expense/1000).toFixed(0)}k` : d.expense}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
        {[0,1,2,3].map(i => (
          <div key={i} onClick={() => setStep(i)} style={{
            width: i === step ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === step ? "#a78bfa" : "rgba(255,255,255,0.2)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>
    </div>
  );
};

const FeatCard = ({ feat, i }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? feat.bg : "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? feat.color + "55" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 20,
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        cursor: "default",
        transition: "all 0.3s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: feat.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${feat.color}33`,
        transition: "transform 0.3s",
        transform: hov ? "scale(1.1) rotate(-4deg)" : "scale(1)",
      }}>
        <feat.icon size={24} style={{ color: feat.color }} />
      </div>
      <p style={{ fontWeight: 600, color: "white", fontSize: 14, textAlign: "center", margin: 0 }}>{feat.label}</p>
      <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", margin: 0 }}>{feat.sub}</p>
    </div>
  );
};

const StatCard = ({ color, icon: Icon, label, value, trend, dir }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}06)`,
        border: `1px solid ${color}30`,
        borderRadius: 20,
        padding: "20px",
        transition: "all 0.3s",
        transform: hov ? "scale(1.03)" : "scale(1)",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ color, fontSize: 13, margin: "0 0 6px 0" }}>{label}</p>
          <p style={{ color: "white", fontSize: 22, fontWeight: 700, margin: 0 }}>{value}</p>
        </div>
        <div style={{ background: `${color}20`, borderRadius: 12, padding: 10 }}>
          <Icon size={20} style={{ color }} />
        </div>
      </div>
      <p style={{ color, fontSize: 12, margin: "10px 0 0 0" }}>{dir}{trend}</p>
    </div>
  );
};

export default function BankTrackerHero({ status }) {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const featRef = useRef(null);
  const ctaRef = useRef(null);
  const featInView = useInView(featRef);
  const ctaInView = useInView(ctaRef);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#050310", color: "white", fontFamily: "'DM Sans','Segoe UI',sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse-glow { 0%,100%{opacity:0.4} 50%{opacity:0.85} }
        @keyframes live-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .syne { font-family:'Syne',sans-serif !important; }
        .btn-primary { background:linear-gradient(135deg,#a78bfa,#818cf8); padding:14px 28px; border-radius:100px; color:white; font-weight:700; font-size:15px; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all 0.3s; border:none; cursor:pointer; }
        .btn-primary:hover { box-shadow:0 0 36px rgba(167,139,250,0.55); transform:translateY(-2px); }
        .btn-secondary { border:1px solid rgba(255,255,255,0.15); padding:14px 28px; border-radius:100px; color:white; font-weight:600; font-size:15px; text-decoration:none; display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.04); transition:all 0.3s; cursor:pointer; }
        .btn-secondary:hover { background:rgba(255,255,255,0.08); transform:translateY(-2px); }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#050310; }
        ::-webkit-scrollbar-thumb { background:#a78bfa44; border-radius:3px; }
      `}</style>

      {/* Ambient orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-8%", left: "5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.16) 0%, transparent 68%)", animation: "pulse-glow 5s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "25%", right: "-8%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)", animation: "pulse-glow 7s ease-in-out infinite 2s" }} />
        <div style={{ position: "absolute", bottom: "8%", left: "35%", width: 500, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)", animation: "pulse-glow 6s ease-in-out infinite 1s" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(167,139,250,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.035) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Navbar */}
      <header style={{
        position: "fixed", top: 18, left: "50%", transform: "translateX(-50%)",
        width: "min(660px,92vw)", zIndex: 100,
        background: scrolled ? "rgba(8,4,22,0.9)" : "rgba(8,4,22,0.65)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: 100,
        padding: "11px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#a78bfa,#60a5fa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💳</div>
          <span className="syne" style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.3px" }}>BankTracker</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 100, padding: "5px 12px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", animation: "live-blink 2s infinite" }} />
            <span style={{ fontSize: 12, color: "#34d399", fontWeight: 500 }}>Live</span>
          </div>
          {status === false && (
            <a href="/login" className="btn-primary" style={{ padding: "8px 20px", fontSize: 14 }}>Get Started</a>
          )}
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, padding: "130px 24px 80px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }}>
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px)", transition: "all 0.9s cubic-bezier(.16,1,.3,1)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 100, padding: "6px 14px", marginBottom: 22 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#a78bfa", animation: "pulse-glow 2s infinite" }} />
              <span style={{ fontSize: 12, color: "#a78bfa", fontWeight: 500, letterSpacing: "0.5px" }}>AI-powered finance tracking</span>
            </div>

            <h1 className="syne" style={{ fontSize: "clamp(34px,4vw,54px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-1.5px" }}>
              Track Your<br />
              <span style={{ background: "linear-gradient(135deg,#a78bfa 0%,#60a5fa 55%,#f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Finances</span><br />
              <span style={{ fontSize: "0.68em", color: "#9ca3af", fontWeight: 700 }}>Like Never Before</span>
            </h1>

            <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: 410 }}>
              AI-powered expense tracking that learns your habits, categorizes transactions automatically, and gives you clarity over every rupee.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/login" className="btn-primary"><Plus size={18} />Start Tracking Free</a>
              <a href="/" className="btn-secondary"><BarChart2 size={18} />Live Demo</a>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[["10k+", "Active Users"], ["₹2Cr+", "Tracked"], ["99.9%", "Uptime"]].map(([v, l]) => (
                <div key={l}>
                  <p className="syne" style={{ fontSize: 20, fontWeight: 800, margin: 0, color: "#a78bfa" }}>{v}</p>
                  <p style={{ fontSize: 12, color: "#6b7280", marginTop: 3 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px) scale(0.96)", transition: "all 1s cubic-bezier(.16,1,.3,1) 0.2s" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <StatCard color="#34d399" icon={TrendingUp} label="Total Income" value="₹32,400" trend="+12% this month" dir="↗ " />
              <StatCard color="#f87171" icon={TrendingDown} label="Total Expenses" value="₹23,100" trend="-5% this month" dir="↘ " />
            </div>
            <ChartCarousel />
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featRef} style={{ position: "relative", zIndex: 1, padding: "80px 24px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52, opacity: featInView ? 1 : 0, transform: featInView ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1)" }}>
          <p style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Everything you need</p>
          <h2 className="syne" style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, marginBottom: 12, letterSpacing: "-1px" }}>
            Financial Control,{" "}
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Simplified</span>
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 460, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>Comprehensive tools to track, analyze, and optimize your spending habits</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 14, opacity: featInView ? 1 : 0, transform: featInView ? "none" : "translateY(32px)", transition: "all 0.9s cubic-bezier(.16,1,.3,1) 0.15s" }}>
          {features.map((f, i) => <FeatCard key={i} feat={f} i={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} style={{ position: "relative", zIndex: 1, padding: "60px 24px 120px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", opacity: ctaInView ? 1 : 0, transform: ctaInView ? "none" : "translateY(32px)", transition: "all 0.9s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.09), rgba(96,165,250,0.05))", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 32, padding: "56px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.2), transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 14 }}>Get started today</p>
            <h2 className="syne" style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1.15 }}>
              Take Control of Your{" "}
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Financial Future</span>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: 15, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Join thousands of users who have transformed their financial habits with BankTracker
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/login" className="btn-primary">Get Started for Free</a>
              <a href="/" className="btn-secondary">Schedule Demo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
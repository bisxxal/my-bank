'use client'
import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, PieChartIcon, TrendingDown, Mail, Plus, CreditCard, Target, ChevronLeft, ChevronRight, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { calendarData, currentMonth, daysOfWeek, expenseData, generateCalendarDays, monthlyData, trendData } from "@/lib/dummy";
import Image from 'next/image';
import ShinyText from './ui/Shinetext';


const features = [
  { icon: Mail, label: "Email Tracking", sub: "Auto-fetch from inbox", color: "#22d3ee", bg: "rgba(34,211,238,0.1)" },
  { icon: PieChartIcon, label: "Smart Categories", sub: "AI-powered sorting", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
  { icon: CreditCard, label: "Statements", sub: "Credit & Debit", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
  { icon: Target, label: "Real-time", sub: "Live updates", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
  { icon: Zap, label: "Instant Alerts", sub: "Smart notifications", color: "#f472b6", bg: "rgba(244,114,182,0.1)" },
  { icon: Shield, label: "Bank Security", sub: "256-bit encryption", color: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
];
  

const IPhoneCom = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY * 0.2
      //   limit max movement to 10px
      setOffset(Math.min(scrollValue, 150))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='relative h-[40%] max-md:h-full mx-auto'>
      
      <h1 className='-mt-3 max-md:mt-4 ml-2'>
        <ShinyText
          text="Finances"
          disabled={false}
          speed={2}
          className='followtext text-shadow-2xs text-center text-[15vw] uppercase'
        />
      </h1>

      <div className="absolute inset-0 rounded-3xl top-0 blur-3xl left-0 w-full bg-gradient-to-t from-[#5988f5] via-transparent" />

      <img
        className=' mation w-[45%] mx-auto max-md:w-full -mt-52 max-md:-mt-24 drop-shadow-2xl drop-shadow-black'
        src="/bg2.png"
        alt=""
        height={1900}
        width={1600}
        style={{
          transform: `translateY(${offset}px)`  
        }}
      />
    </div>
  )
}



const BankTrackerHero = ({ status }) => {
  const featRef = useRef(null);

  return (
    <div className="min-h-screen relative text-white"  >
      {/* Header */}
      <header className=" w-[60%] max-md:w-[90%] bg-[#ffffff0a] navbaranimation shadow-xl h-[65px] max-md:[30px] backdrop-blur-2xl z-30 fixed top-10 max-md:top-6 rounded-4xl left-[20%] max-md:left-[5%]  px-6 py-3">

        <nav className="flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-2">
            <div className='max-md:text-xl  text-2xl center font-bold'>
              <Image src='/bank.png' alt='logo' width={40} height={40} className='hover:scale-125 drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)] drop-shadow-amber-100  transition-all inline-block ml-2' />
            </div>

          </div>
          <div className=" flex items-center font-sans">
            {status == false && <Link href={`/login`} className="buttonbg   px-6 max-md:px-4 max-md:text-sm py-2 rounded-full text-white font-medium  ">
              Get Started
            </Link>}
          </div>
        </nav>
      </header>

      <section className="relative px-10 max-md:px-2 py-20   overflow-hidden">

        <div className="relative pt-[60px] z-10  mx-auto">
          <div className=" gap-12 items-center">
 
            <div className="">
              <div className=' '>
                <h1 className=" followtext ml-2 text-7xl max-md:text-5xl animate-scale-up delay-700 font-bold leading-tight  ">Track Your</h1>
  
                  {/* <ChatCon /> */}

                  <IPhoneCom />
                <h1 className=' max-md:text-4xl ml-2 text-6xl followtext '>Like Never Before</h1>


              </div>

              <div className=" my-10 ">
                <Link href={`/login`} className="buttonbg ml-2 px-8 max-md:px-4 py-4 max-md:py-2  max-md:text-base followtext   rounded-full text-white font-medium hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  <Plus className="w-5 h-5 inline mr-2" />
                  Start Tracking Now
                </Link>
              </div>
            </div>

            {/* debit vs credit */}
            <div className="mt-10 ">

              <div style={{ transition: "all 1s cubic-bezier(.16,1,.3,1) 0.2s" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                  <StatCard color="#34d399" icon={TrendingUp} label="Total Income" value="₹32,400" trend="+12% this month" dir="↗ " />
                  <StatCard color="#f87171" icon={TrendingDown} label="Total Expenses" value="₹23,100" trend="-5% this month" dir="↘ " />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20  ">
        <div className="max-w-7xl mx-auto">

          <div style={{ textAlign: "center", marginBottom: 52, transition: "all 0.8s cubic-bezier(.16,1,.3,1)" }}>
            <p style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Everything you need</p>
            <h2 className=" text-6xl max-md:text-2xl mb-4 font-extrabold  followtext" >
              Financial Control,{" "}
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Simplified</span>
            </h2>
            <p className=' font-sans text-[#6b7280] max-w-[460] mx-auto max-md:text-sm '  >Comprehensive tools to track, analyze, and optimize your spending habits</p>
          </div>

          <div className=' grid grid-cols-6 gap-10 max-md:grid-cols-2 max-md:gap-3' style={{   transition: "all 0.9s cubic-bezier(.16,1,.3,1) 0.15s" }}>
            {features.map((f, i) => <FeatCard key={i} feat={f} i={i} />)}
          </div>

        </div>
      </section>


      <section style={{ position: "relative", zIndex: 1, padding: "60px 24px 120px" }}>
        <div className=' font-sans' style={{ maxWidth: 680, margin: "0 auto", transition: "all 0.9s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.09), rgba(96,165,250,0.05))", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 32, padding: "56px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.2), transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 14 }}>Get started today</p>
            <h2 className=" followtext " style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1.15 }}>
              Take Control of Your{" "}
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Financial Future</span>
            </h2>
            <p className="max-md:text-sm text-base text-[#9ca3af] " >
              Join thousands of users who have transformed their financial habits with BankTracker
            </p>
            <div style={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/login" className="mt-3 px-4 py-2 rounded-full buttonbg ">Get Started for Free</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const ChatCon = () => {
  const [animationStep, setAnimationStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className=' relative   rounded-3xl'>

      <div className="absolute inset-0 rounded-3xl top-0 blur-3xl left-0 w-full bg-gradient-to-t  -full from-[#5988f5] via-transparent  " />

      <div className="followtext animate-slide-up  -mt-[50px] max-md:-mt-[15px]  bg-white/1 backdrop-blur-[30px] h-[500px] max-md:h-[480px] rounded-3xl p-6 border border-white/10">
        {animationStep === 0 && (
          <div className="space-y-4">
            <h3 className="text-lg followtext font-semibold text-center">Expense Categories</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  label={(entry) => `${entry.name} `}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff20',
                    color: 'white',
                    borderRadius: '5px',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid transparent',
                  }}
                  itemStyle={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {animationStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg followtext font-semibold text-center">Monthly Overview</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="0 0" stroke="" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                {/* <YAxis stroke="#9ca3af" /> */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff20',
                    color: 'white',
                    borderRadius: '20px',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid transparent',
                  }}
                  itemStyle={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
                <Bar dataKey="income" fill="#CBA6F7" radius={[20, 20, 0, 10]} />
                <Bar dataKey="expense" fill="#EF1D5C" radius={[20, 20, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {animationStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg followtext font-semibold text-center">Weekly Spending Trend</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="0 0" stroke="" />
                <defs>
                  <linearGradient id="colorcredit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#CBA5F7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#CBA5F7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#9ca3af" />
                {/* <YAxis stroke="#9ca3af" /> */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff20',
                    color: 'white',
                    borderRadius: '15px',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid transparent',
                  }}
                  itemStyle={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#CBA5F7"
                  strokeWidth={3}
                  fillOpacity={0.5}
                  fill="url(#colorcredit)"
                  dot={{ fill: '#CBA5F7', strokeWidth: 1, r: 3 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {animationStep === 3 && (
          <div className="space-y-4   h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Daily Transactions</h3>
              <div className="flex items-center space-x-2">
                <ChevronLeft className="w-5 h-5 text-gray-400  cursor-pointer hover:text-white" />
                <span className="text-sm font-medium">{currentMonth}</span>
                <ChevronRight className="w-5 h-5 text-gray-400  cursor-pointer hover:text-white" />
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {daysOfWeek.map(day => (
                <div key={day} className="p-2 text-gray-400 font-medium">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm  overflow-hidden">
              {generateCalendarDays().map(day => {
                const dayData = calendarData[day];
                return (
                  <div
                    key={day}
                    className=" h-14 backdrop-blur-3xl bg-[#ffffff0f] border border-gray-700 rounded-lg hover:border-gray-500  cursor-pointer relative"
                  >
                    <div className="text-white font-medium mb-1">{day}</div>
                    {dayData && (
                      <div className="">
                        {dayData.income > 0 && (
                          <div className="text-green-400  text-[10px] ">
                            ↗ {dayData.income > 1000 ? `${(dayData.income / 1000).toFixed(0)}k` : dayData.income}
                          </div>
                        )}
                        {dayData.expense > 0 && (
                          <div className="text-red-400  text-[10px] ">
                            ↘ {dayData.expense > 1000 ? `${(dayData.expense / 1000).toFixed(0)}k` : dayData.expense}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


const FeatCard = ({ feat, i }) => {
  const [hov, setHov] = useState(false);
  return (
    <div className='font-sans'
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
      <div className=' flex justify-between items-start' >
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
export default BankTrackerHero;

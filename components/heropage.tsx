'use client'
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, PieChartIcon, TrendingDown,   Mail, Plus, CreditCard, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { calendarData, currentMonth, daysOfWeek, expenseData, generateCalendarDays, monthlyData, trendData } from "@/lib/dummy";
import Image from 'next/image'; 
import ShinyText from './ui/Shinetext';

const BankTrackerHero = ({ status }) => {


  return (
    <div className="min-h-screen relative text-white"  >
      {/* Header */}
      <header className=" w-[60%] max-md:w-[90%] navbaranimation  border border-[#ffffff29] shadow-xl h-[65px] backdrop-blur-xl z-30 fixed top-10 max-md:top-6 rounded-4xl left-[20%] max-md:left-[5%]  px-6 py-3">

        <nav className="flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-2">
            <div className='max-md:text-xl  text-2xl center font-bold'>
              <Image src='/bank.png' alt='logo' width={40} height={40} className='hover:scale-125 drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)] drop-shadow-amber-100  transition-all inline-block ml-2' />
            </div>

          </div>
          <div className=" flex items-center ">
            {status == false && <Link href={`/login`} className="buttonbg   px-6 max-md:px-4 max-md:text-sm py-2 rounded-full text-white font-medium  ">
              Get Started
            </Link>}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 max-md:px-2 py-20   overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0  top-0 blur-3xl left-0 w-full bg-gradient-to-b  -full from-[#CBA6F7] via-transparent  " />

        <div className="absolute inset-0   top-0 left-0 w-full bg-gradient-to-b from-[#6a13dd3d] purple-900/30   via-transparent backdrop-blur-[100px]" />
 
        <div className="relative pt-[60px] z-10 max-w-7xl mx-auto">
          <div className=" gap-12 items-center">
            {/* Left Content */}
            <div className="">
              <div>
                <h1 className=" followtext text-2xl max-md:text-xl animate-scale-up delay-700 font-bold leading-tight text-center ">Track Your</h1>
                <h1 className=' max-md:text-sm followtext text-right'>Like Never Before</h1>
                {/* <h1 className=" followtext -mb-[50px] max-md:-mb-[15px] text-shadow-2xs text-shadow-indigo-50  -mt-[0px] text-center text-[13vw]  uppercase bg-gradient-to-r from-purple-700  to-indigo-500 bg-clip-text text-transparent"> Finances</h1> */}

                <h1 className=' text-center'>
                <ShinyText
                    text="Finances"
                    disabled={false}
                    speed={2}
                    className='followtext text-shadow-2xs   text-center text-[14vw]  uppercase text-transparent  '
                    />
                </h1>
                <ChatCon />
                
              </div>
 
              {/*  Buttons */}
              <div className=" my-10 ">
                <Link href={`/login`} className="buttonbg px-8 max-md:px-4 py-4 max-md:py-2  max-md:text-base followtext   rounded-full text-white font-medium hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  <Plus className="w-5 h-5 inline mr-2" />
                  Start Tracking Now
                </Link>
              </div>
            </div>

            {/* Right Content - Charts */}
            <div className="mt-10 ">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                  <div className="flex w-full  items-center justify-between">
                    <div className=' w-full'>
                      <p className="text-green-300 text-sm">Total Income</p>
                      <div className="text-2xl flex items-center !justify-between w-full font-bold text-white">₹32,400
                        <TrendingUp className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-green-300 text-sm mt-2">↗+12% from last month</p>
                </div>

                <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-6 rounded-2xl border border-red-500/30">
                  <div className="flex items-center justify-between">
                    <div className=' w-full'>
                      <p className="text-red-300 text-sm">Total Expenses</p>
                      <div className="text-2xl flex items-center !justify-between w-full font-bold text-white">₹23,100
                        <TrendingDown className="w-8 h-8 text-red-400" />
                      </div>
                    </div>

                  </div>
                  <p className="text-red-300 text-sm mt-2">↘-5% from last month</p>
                </div>
              </div>
 
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20  ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Financial Control
              </span>
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Comprehensive tools to track, analyze, and optimize your spending habits
            </p>
          </div>

 <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-4 flex-col max-md:p-2 hover:border-indigo-50/30 transition-all animate-slide-up max-md:text-sm   bg-white/5 rounded-2xl border border-white/10">
                  <Mail className=" text-4xl size-10 max-md:size-7 text-cyan-400" />
                  <div>
                    <p className="font-medium">Email Tracking</p>
                    <p className="text-sm text-gray-400">Fetch by email</p>
                  </div>
                </div>
                <div className="flex items-center p-4 flex-col max-md:p-2 hover:border-indigo-50/30 transition-all animate-slide-up max-md:text-sm   bg-white/5 rounded-2xl border border-white/10">
                  <PieChartIcon className=" text-4xl size-10 max-md:size-7 text-purple-400" />
                  <div>
                    <p className="font-medium">Smart Categories</p>
                    <p className="text-sm text-gray-400">Auto categorize</p>
                  </div>
                </div>
                <div className="flex items-center p-4 flex-col max-md:p-2 hover:border-indigo-50/30 transition-all animate-slide-up max-md:text-sm   bg-white/5 rounded-2xl border border-white/10">
                  <CreditCard className=" text-4xl size-10 max-md:size-7 text-green-400" />
                  <div>
                    <p className="font-medium">Statements</p>
                    <p className="text-sm text-gray-400">Credit & Debit</p>
                  </div>
                </div>
                <div className="flex items-center p-4 flex-col max-md:p-2 hover:border-indigo-50/30 transition-all animate-slide-up max-md:text-sm   bg-white/5 rounded-2xl border border-white/10">
                  <Target className=" text-4xl size-10 max-md:size-7 text-yellow-400" />
                  <div>
                    <p className="font-medium">Real-time</p>
                    <p className="text-sm text-gray-400">Live updates</p>
                  </div>
                </div>
              </div>
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20  ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Take Control of Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Financial Future?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-md:text-sm mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their financial habits with BankTracker
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/login`} className="buttonbg px-8 py-4 rounded-full text-white font-medium hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started for Free
            </Link>
            <Link href={`/`} className="border border-white/20 px-8 py-4 max-md:py-3 text-base rounded-full text-white font-medium hover:bg-white/5 transition-all duration-300">
              Schedule Demo
            </Link>
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
    <div>
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
export default BankTrackerHero;
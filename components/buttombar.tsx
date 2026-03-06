'use client'
import { ArrowLeftRight, Calendar, ChartLine, User, ChartPie } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const BottomBar = () => {
    const path = usePathname()
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const profileRef = useRef<HTMLAnchorElement | null>(null)

    const navItems = [
        { href: '/transaction', icon: ArrowLeftRight , title: 'Home'},
        { href: '/track', icon: ChartLine , title: 'Track'},
        { href: '/calendar', icon: Calendar , title: 'Cal'},
        { href: '/category', icon: ChartPie , title: 'Pie'},
    ]

    useEffect(() => {
        const activeIndex = navItems.findIndex((item) => item.href === path)

        if (activeIndex !== -1) {
            const el = itemRefs.current[activeIndex]
            if (el) {
                setPillStyle({
                    left: el.offsetLeft,
                    width: el.offsetWidth,
                    opacity: 1,
                })
            }
        } else {
            setPillStyle({ left: 0, width: 0, opacity: 0 })
        }
    }, [path])

    return (
        <div className='fixed bottom-0 z-[100] w-full flex justify-center gap-5 h-[80px] pointer-events-none'>

            {/* Main Nav */}
            <div className='pointer-events-auto backdrop-blur-[10px] bg-[#ffffff08] relative flex items-center p-2 border border-[#d3d3d325] mb-6 rounded-full'>

                {pillStyle.opacity === 1 && (
                    <div
                        className="absolute h-[calc(100%-10px)] top-1 rounded-full bg-[#6b11c49d] transition-all duration-500 ease-in-out -z-10"
                        style={{
                            left: `${pillStyle.left}px`,
                            width: `${pillStyle.width}px`,
                        }}
                    />
                )}

                {navItems.map((item, index) => {
                    const isActive = path === item.href
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            ref={(el) => { itemRefs.current[index] = el }}
                            className={`relative px-6 py-2 center flex-col rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                                isActive ? 'text-white' : 'text-[#d3d3d3b4] hover:text-white'
                            }`}
                        >
                            <Icon size={24} />
                            <p className=' !text-[9px]  '>
                                {item.title}
                            </p>
                        </Link>
                    )
                })}
            </div>

            {/* Profile Button */}
            <div className='pointer-events-auto backdrop-blur-[10px] bg-[#ffffff08] relative flex items-center  border border-[#d3d3d325] mb-6 rounded-full'>
                <Link
                    ref={profileRef}
                    href='/profile'
                    className={`relative w-14 h-full center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                        path === '/profile' ? 'bg-[#6b11c49d] border-none text-white' : 'text-[#d3d3d3b4] hover:text-white'
                    }`}
                >
                    <User size={24} />
                </Link>
            </div>

        </div>
    )
}

export default BottomBar
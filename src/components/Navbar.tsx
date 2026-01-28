'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    GraduationCap,
    ChevronDown,
    Sparkles,
    Zap,
    Gamepad2,
    BookOpen,
    Flame,
    Apple,
    ShieldCheck,
    FolderOpen,
    Star as StarIcon,
    Users2,
    Monitor,
    Lock,
    BookMarked,
    Newspaper
} from 'lucide-react'

const navData = {
    Products: [
        { title: 'CollegeHub', desc: 'Where learning becomes tight-knit communities.', icon: GraduationCap, color: 'bg-green-100 text-green-600' },
        { title: 'Hub Plus', desc: 'Extra features to support your campus journey.', icon: Sparkles, color: 'bg-purple-100 text-purple-600' },
        { title: 'Hub Islands', desc: 'A magical world where students play and create.', icon: Gamepad2, color: 'bg-orange-100 text-orange-600' },
        { title: 'Hub Tutor', desc: 'Expert one-on-one sessions on your schedule.', icon: Zap, color: 'bg-blue-100 text-blue-600' },
        { title: 'Hub Sparks', desc: 'Fun, interactive reading for early learners.', icon: Flame, color: 'bg-cyan-100 text-cyan-600' },
    ],
    Schools: [
        { title: 'Teachers', desc: 'Support academic growth with smart points.', icon: Apple, color: 'bg-gray-100 text-gray-800' },
        { title: 'Leaders', desc: 'For those responsible for leading operations.', icon: ShieldCheck, color: 'bg-gray-100 text-gray-800' },
        { title: 'Resources', desc: 'Helpful ready-to-go resources for everything.', icon: FolderOpen, color: 'bg-gray-100 text-gray-800' },
    ],
    Districts: [
        { title: 'Overview', desc: 'See what Hub can unlock for your district.', icon: StarIcon, color: 'bg-gray-50 text-gray-700' },
        { title: 'Roles', desc: 'Explore how we support every leader.', icon: Users2, color: 'bg-gray-50 text-gray-700' },
        { title: 'Solutions', desc: 'Explore tools for districtwide connection.', icon: Monitor, color: 'bg-gray-50 text-gray-700' },
        { title: 'Privacy & Security', desc: 'Keeping your data and community safe.', icon: Lock, color: 'bg-gray-50 text-gray-700' },
        { title: 'Success Stories', desc: 'See how others are growing and thriving.', icon: BookMarked, color: 'bg-gray-50 text-gray-700' },
        { title: 'Blog & News', desc: 'Updates, ideas, and news from our team.', icon: Newspaper, color: 'bg-gray-50 text-gray-700' },
    ]
}

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-green-500 p-2 rounded-lg">
                        <GraduationCap className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-gray-800 tracking-tight">CollegeHub</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                {Object.entries(navData).map(([key, items]) => (
                    <div
                        key={key}
                        className="relative"
                        onMouseEnter={() => setActiveMenu(key)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold transition-all text-[15px] ${activeMenu === key ? 'bg-gray-50 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
                            {key}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === key ? 'rotate-180 text-gray-900' : 'text-gray-400'}`} />
                        </button>

                        {/* Mega Dropdown Menu */}
                        <div className={`absolute top-full left-0 pt-3 transition-all duration-300 ${activeMenu === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="bg-white rounded-4xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-50 p-3 min-w-[340px]">
                                <div className="space-y-0.5">
                                    {items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href="#"
                                            className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-gray-50 transition-colors group/item"
                                        >
                                            <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover/item:scale-110 ${item.color}`}>
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[15px] text-gray-800 leading-none mb-1.5">{item.title}</h4>
                                                <p className="text-[13px] text-gray-400 font-medium leading-[1.3]">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Link href="/hall-of-fame" className="text-gray-600 font-bold hover:text-gray-900 px-3 py-2 text-[15px] transition-colors">Hall of Fame</Link>
                <Link href="#" className="text-gray-600 font-bold hover:text-gray-900 px-3 py-2 text-[15px] transition-colors">Families</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link
                    href="/login"
                    className="text-gray-700 font-bold hover:text-gray-900 px-4 py-2 text-[15px] transition-all"
                >
                    Log in
                </Link>
                <Link
                    href="/signup"
                    className="px-6 py-2.5 bg-[#824CF5] text-white font-bold rounded-full hover:bg-purple-700 shadow-lg shadow-purple-100 transition-all active:scale-95 text-[15px]"
                >
                    Sign up
                </Link>
            </div>
        </nav>
    )
}

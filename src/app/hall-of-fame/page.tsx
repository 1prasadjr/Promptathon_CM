'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import {
    Trophy,
    Star,
    Zap,
    Target,
    ChevronRight,
    GraduationCap,
    Medal,
    Dribbble,
    Code2,
    ExternalLink
} from 'lucide-react'

const categories = [
    { id: 'all', label: 'All Achievers', icon: Trophy, color: 'bg-yellow-500' },
    { id: 'academic', label: 'Academic Toppers', icon: GraduationCap, color: 'bg-blue-500' },
    { id: 'placement', label: 'Placement Stars', icon: Target, color: 'bg-green-500' },
    { id: 'sports', label: 'Sports Achievers', icon: Dribbble, color: 'bg-orange-500' },
    { id: 'tech', label: 'Hackathon Winners', icon: Code2, color: 'bg-purple-500' },
]

const heroes = [
    {
        name: 'Ananya Singhania',
        title: 'University Gold Medalist',
        category: 'academic',
        image: '/college_life_1.png',
        desc: 'Maintained 9.8 CGPA throughout 4 years of B.Tech CSE.'
    },
    {
        name: 'Rahul Varma',
        title: 'Top Researcher 2024',
        category: 'academic',
        image: '/science.png',
        desc: 'Published 3 papers in international journals on Quantum AI.'
    },
    {
        name: 'Vikram Malhotra',
        title: 'Placed at Google (L4)',
        category: 'placement',
        image: '/college_life_2.png',
        desc: 'Secured a package of ₹48L at Google Mountain View office.'
    },
    {
        name: 'Sneha Kapoor',
        title: 'Amazon SDE Intern',
        category: 'placement',
        image: '/college_life_1.png',
        desc: 'Cracked Amazon with the highest internship stipend this season.'
    },
    {
        name: 'Siddharth Roy',
        title: 'Smart India Hackathon Winner',
        category: 'tech',
        image: '/science.png',
        desc: 'Led a team of 4 to win the national SIH 2024 grand finale.'
    },
    {
        name: 'Priya Das',
        title: 'Google Summer of Code',
        category: 'tech',
        image: '/college_life_2.png',
        desc: 'Contributed to open source projects for the Linux Foundation.'
    },
    {
        name: 'Karan Mehra',
        title: 'National Level Swimmer',
        category: 'sports',
        image: '/art.png',
        desc: 'Won 3 gold medals at the Inter-University Sports Meet.'
    },
    {
        name: 'Mahesh Babu',
        title: 'Inter-College Cricket MVP',
        category: 'sports',
        image: '/college_life_1.png',
        desc: 'Led the college team to victory in the State Championship.'
    }
]

export default function HallOfFamePage() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredHeroes = activeCategory === 'all'
        ? heroes
        : heroes.filter(hero => hero.category === activeCategory)

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Hero Section */}
                    <div className="text-center space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex justify-center mb-4">
                            <div className="bg-yellow-100 p-4 rounded-4xl rotate-12">
                                <Trophy className="w-12 h-12 text-yellow-600" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-[#2D336B] leading-tight">
                            Celebrating <br />
                            our <span className="text-purple-600 underline decoration-8 underline-offset-8 decoration-purple-100">Legends</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">
                            Meet the brightest stars of our campus who have excelled in academics, sports, and professional careers.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`group cursor-pointer p-8 rounded-[3rem] border-2 transition-all ${activeCategory === cat.id
                                        ? 'bg-white border-purple-500 shadow-2xl scale-105'
                                        : 'bg-gray-50 border-transparent hover:border-gray-100 hover:shadow-xl'
                                    }`}
                            >
                                <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                                    <cat.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-black text-gray-800 text-lg leading-tight">{cat.label}</h3>
                                <div className={`mt-4 flex items-center gap-1 font-bold text-sm transition-colors ${activeCategory === cat.id ? 'text-purple-600' : 'text-gray-400'
                                    }`}>
                                    {activeCategory === cat.id ? 'Viewing' : 'Explore'}
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Wall of Fame Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all">
                        {filteredHeroes.length > 0 ? filteredHeroes.map((hero, idx) => (
                            <div
                                key={`${activeCategory}-${idx}`}
                                className="group relative bg-white rounded-[3.5rem] overflow-hidden shadow-xl border border-gray-100 animate-in zoom-in-95 duration-500"
                            >
                                <div className="relative h-[320px] w-full">
                                    <Image src={hero.image} alt={hero.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#2D336B] via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute top-6 right-6">
                                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30">
                                            <Star className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                        <h4 className="text-2xl font-black leading-tight">{hero.name}</h4>
                                        <p className="text-sm font-bold text-purple-200 uppercase tracking-widest">{hero.title}</p>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <p className="text-gray-500 font-medium leading-normal italic">
                                        "{hero.desc}"
                                    </p>
                                    <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-50 text-gray-700 font-black hover:bg-gray-100 transition-colors">
                                        Read Story
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full py-20 text-center space-y-4">
                                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                                    <Star className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-400">No legends found in this category yet!</h3>
                            </div>
                        )}
                    </div>

                    {/* Inspirational CTA */}
                    <div className="bg-[#2D336B] rounded-[4rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Medal className="w-64 h-64 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white relative z-10">Want to be featured here?</h2>
                        <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto relative z-10">
                            Your hard work and dedication can earn you a spot on the legendary Wall of Fame. Keep pushing boundaries!
                        </p>
                        <Link
                            href="/signup"
                            className="inline-block px-12 py-6 bg-[#824CF5] text-white font-black rounded-full hover:bg-purple-700 shadow-2xl shadow-purple-900 transition-all hover:scale-105 active:scale-95 text-2xl relative z-10"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-gray-100 text-center">
                <p className="text-gray-400 font-bold">© {new Date().getFullYear()} CollegeHub Hall of Fame. All rights reserved.</p>
            </footer>
        </div>
    )
}

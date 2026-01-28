'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    BarChart3,
    Bell,
    BookOpen,
    Calendar,
    LayoutDashboard,
    LogOut,
    Settings,
    UserCircle,
    Menu,
    X,
    Briefcase,
    GraduationCap,
    CreditCard,
    Sparkles
} from 'lucide-react'
import { logout } from '@/app/auth/actions'

// Map icon names to components within the Client Component
const iconMap: Record<string, any> = {
    LayoutDashboard,
    Bell,
    Settings,
    Briefcase,
    Calendar,
    BookOpen,
    GraduationCap,
    BarChart3,
    CreditCard
}

const roleItems: Record<string, any[]> = {
    admin: [
        { label: 'Overview', icon: 'LayoutDashboard', href: '/dashboard/admin' },
        { label: 'Notices', icon: 'Bell', href: '/dashboard/notices' },
        { label: 'Settings', icon: 'Settings', href: '/dashboard/settings' },
    ],
    student: [
        { label: 'Overview', icon: 'LayoutDashboard', href: '/dashboard/student' },
        { label: 'Placements', icon: 'Briefcase', href: '/dashboard/student/placements' },
        { label: 'TPO Meetings', icon: 'Calendar', href: '/dashboard/student/meetings' },
        { label: 'Notices', icon: 'Bell', href: '/dashboard/notices' },
        { label: 'Assignments', icon: 'BookOpen', href: '/dashboard/assignments' },
    ],
    tpo: [
        { label: 'Dashboard', icon: 'LayoutDashboard', href: '/dashboard/tpo' },
        { label: 'Job Openings', icon: 'Briefcase', href: '/dashboard/tpo/drives' },
        { label: 'Consultations', icon: 'Calendar', href: '/dashboard/tpo/meetings' },
        { label: 'Student Data', icon: 'GraduationCap', href: '/dashboard/tpo/eligible' },
    ],
    parent: [
        { label: 'Parent Home', icon: 'LayoutDashboard', href: '/dashboard/parent' },
        { label: 'Academic Status', icon: 'BarChart3', href: '/dashboard/parent/status' },
        { label: 'Alerts', icon: 'Bell', href: '/dashboard/parent/alerts' },
        { label: 'Fees', icon: 'CreditCard', href: '/dashboard/parent/fees' },
    ]
}

export default function DashboardLayoutClient({
    children,
    role,
}: {
    children: React.ReactNode,
    role: string,
}) {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [currentRole, setCurrentRole] = useState(role)

    // Use current role to get items
    const displayNavItems = roleItems[currentRole] || roleItems.student

    return (
        <div className="min-h-screen bg-[#F8F9FF] flex">
            {/* Judge's Role Switcher - Floating Demo Tool */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100 bg-white/80 backdrop-blur-2xl border border-purple-200 px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(130,76,245,0.2)] flex items-center gap-4 animate-in slide-in-from-bottom-10 group">
                <div className="flex items-center gap-2 pr-4 border-r border-gray-100">
                    <Sparkles className="w-5 h-5 text-[#824CF5] animate-pulse" />
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest hidden md:block text-nowrap">Judge Mode</span>
                </div>
                {['admin', 'student', 'tpo', 'parent'].map(r => (
                    <button
                        key={r}
                        onClick={() => setCurrentRole(r)}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all uppercase tracking-tighter ${currentRole === r ? 'bg-[#824CF5] text-white shadow-lg' : 'text-gray-400 hover:text-purple-600'
                            }`}
                    >
                        {r}
                    </button>
                ))}
            </div>

            {/* Backdrop for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-[#2D336B]/40 backdrop-blur-sm z-50 lg:hidden animate-in fade-in"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Desktop & Mobile */}
            <aside className={`
               fixed inset-y-0 left-0 w-72 bg-white border-r border-gray-100 p-6 z-60 transition-transform duration-500 lg:sticky lg:translate-x-0
               ${isSidebarOpen ? 'translate-x-0 shadow-2xl shadow-[#2D336B]/20' : '-translate-x-full'}
            `}>
                <div className="flex items-center justify-between mb-10 px-2">
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-600 p-2 rounded-xl shadow-lg shadow-purple-100">
                            <GraduationCap className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-black text-[#2D336B]">CollegeHub</span>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 hover:bg-gray-50 rounded-lg">
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto">
                    {displayNavItems.map((item: any) => {
                        const Icon = iconMap[item.icon] || LayoutDashboard
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 font-bold rounded-2xl transition-all group ${item.href.includes(currentRole) ? 'bg-purple-50 text-purple-600' : 'text-gray-500 hover:bg-purple-50 hover:text-purple-600'
                                    }`}
                            >
                                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="pt-6 border-t border-gray-50 space-y-2">
                    <Link
                        href="/dashboard/profile"
                        className="flex items-center gap-3 px-4 py-3 text-gray-500 rounded-2xl hover:bg-gray-50 transition-all font-black text-sm"
                    >
                        <UserCircle className="w-5 h-5" />
                        Profile
                    </Link>
                    <form action={logout}>
                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-black rounded-2xl hover:bg-red-50 transition-all text-sm"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-xl">
                        <Menu className="w-6 h-6 text-[#2D336B]" />
                    </button>

                    <div className="flex-1 hidden md:block max-w-md ml-4 lg:ml-0 text-nowrap">
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Current Portal</p>
                        <p className="text-lg font-black text-[#2D336B] capitalize">{currentRole} Dashboard</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 bg-gray-50 text-gray-500 rounded-2xl hover:text-purple-600 transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                <main className="p-4 md:p-8 flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}

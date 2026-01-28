import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import {
    Calendar,
    Clock,
    User,
    ChevronRight,
    MessageSquare,
    Sparkles,
    Info
} from 'lucide-react'
import { ContentCard } from '@/components/DashboardCards'

export default async function StudentMeetings() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const upcomingMeetings = [
        { id: 1, officer: 'Dr. Ramesh Kumar', role: 'Head TPO', date: 'Oct 14, 2024', time: '10:30 AM', status: 'Confirmed', type: 'Career Guidance' },
    ]

    const availableOfficers = [
        { name: 'Dr. Ramesh Kumar', role: 'Head TPO', specialties: ['Career Guidance', 'FAANG Prep'] },
        { name: 'Mrs. Suman Lata', role: 'Career Counselor', specialties: ['Soft Skills', 'Resume Review'] },
        { name: 'Mr. Anmol Vats', role: 'Industry Liaison', specialties: ['Internships', 'Startup Connect'] },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B]">TPO Consultations</h1>
                    <p className="text-gray-500 font-medium">Schedule 1-on-1 sessions for professional guidance.</p>
                </div>
                <div className="bg-amber-50 px-4 py-2 rounded-2xl border border-amber-100 flex items-center gap-2 text-amber-700 font-black text-xs">
                    <Info className="w-4 h-4" />
                    LIMIT: 2 SESSIONS PER MONTH
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Current Requests */}
                    <ContentCard title="Upcoming Sessions">
                        <div className="space-y-4">
                            {upcomingMeetings.length > 0 ? (
                                upcomingMeetings.map((m) => (
                                    <div key={m.id} className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm flex items-center justify-between group hover:border-purple-200 transition-all">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center">
                                                <User className="text-purple-600 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-800 leading-tight">{m.officer}</h4>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none mt-1">{m.type}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="text-right">
                                                <p className="text-sm font-black text-gray-700 leading-none mb-1">{m.date}</p>
                                                <p className="text-xs font-bold text-gray-400">{m.time}</p>
                                            </div>
                                            <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-xl text-xs font-black">
                                                {m.status}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-20 text-center space-y-4 border-2 border-dashed border-gray-100 rounded-[2.5rem]">
                                    <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-300">
                                        <Calendar className="w-8 h-8" />
                                    </div>
                                    <p className="text-gray-400 font-bold">No sessions scheduled yet.</p>
                                </div>
                            )}
                        </div>
                    </ContentCard>

                    {/* Select Officer & Request */}
                    <ContentCard title="Request a New Slot">
                        <div className="grid md:grid-cols-2 gap-4">
                            {availableOfficers.map((off, idx) => (
                                <div key={idx} className="p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-purple-100 hover:bg-white transition-all cursor-pointer group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                            <User className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                                        </div>
                                        <div className="bg-white px-2 py-1 rounded-lg">
                                            <Sparkles className="w-3 h-3 text-purple-400" />
                                        </div>
                                    </div>
                                    <h4 className="font-black text-gray-800">{off.name}</h4>
                                    <p className="text-xs text-gray-400 font-bold">{off.role}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {off.specialties.map(s => (
                                            <span key={s} className="px-2 py-1 bg-white border border-gray-100 rounded-lg text-[9px] font-black text-gray-500">
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full mt-6 py-3 bg-white text-gray-700 font-black rounded-xl border border-gray-100 group-hover:bg-[#824CF5] group-hover:text-white group-hover:border-transparent transition-all text-sm">
                                        Request Slot
                                    </button>
                                </div>
                            ))}
                        </div>
                    </ContentCard>
                </div>

                <div className="space-y-8">
                    <div className="p-8 bg-linear-to-br from-[#2D336B] to-[#1A1F3D] rounded-[2.5rem] text-white space-y-6 shadow-xl">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black">AI Career Counselor</h3>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">Can't wait for a slot? Chat with our AI bot specialized in college recruitment flows.</p>
                        <button className="w-full py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                            Launch AI Chat
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-8 bg-white border border-gray-100 rounded-4xl space-y-4 shadow-sm">
                        <h4 className="font-black text-gray-800 text-lg">Meeting Ethics</h4>
                        <ul className="space-y-3">
                            {[
                                'Be punctual (10 mins early)',
                                'Keep resume updated',
                                'Dress professionally',
                                'Cancel 24h in advance'
                            ].map(text => (
                                <li key={text} className="flex gap-2 items-center text-xs font-bold text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

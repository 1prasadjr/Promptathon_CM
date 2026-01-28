import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import {
    Calendar,
    Clock,
    User,
    CheckCircle2,
    XCircle,
    Video,
    MapPin,
    Filter
} from 'lucide-react'
import { ContentCard } from '@/components/DashboardCards'

export default async function TPOConsultations() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const requests = [
        { id: 1, student: 'Rahul Dravid', roll: 'CSE-21-042', date: 'Oct 14, 2024', time: '10:30 AM', type: 'Career Guidance', status: 'Pending' },
        { id: 2, student: 'Smriti Mandhana', roll: 'IT-21-089', date: 'Oct 14, 2024', time: '11:45 AM', type: 'Resume Review', status: 'Pending' },
        { id: 3, student: 'Harmanpreet Kaur', roll: 'ECE-21-012', date: 'Oct 15, 2024', time: '02:00 PM', type: 'FAANG Prep', status: 'Confirmed' },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B]">Student Consultations</h1>
                    <p className="text-gray-500 font-medium tracking-tight">Manage your 1-on-1 meeting schedule and student requests.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-all">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        Sync Calendar
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Pending Requests', value: '14', color: 'bg-amber-500' },
                    { label: 'Today\'s Meetings', value: '6', color: 'bg-blue-500' },
                    { label: 'Confimed (Weekly)', value: '28', color: 'bg-green-500' },
                    { label: 'Average Duration', value: '20m', color: 'bg-purple-500' },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-3xl font-black text-[#2D336B]">{stat.value}</p>
                        <div className={`h-1.5 w-12 ${stat.color} rounded-full mt-4`}></div>
                    </div>
                ))}
            </div>

            <ContentCard title="Queue Management">
                <div className="flex items-center gap-4 mb-6">
                    <button className="px-6 py-2.5 bg-[#824CF5] text-white rounded-xl font-black text-sm">All Requests</button>
                    <button className="px-6 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-black text-sm hover:bg-gray-100 transition-colors">Confirmed</button>
                    <button className="px-6 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-black text-sm hover:bg-gray-100 transition-colors">History</button>
                    <div className="ml-auto">
                        <button className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                            <Filter className="w-4 h-4" />
                            Sort By Date
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {requests.map((req) => (
                        <div key={req.id} className="p-6 bg-white border border-gray-100 rounded-[2.5rem] hover:border-purple-200 transition-all shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6 flex-1">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-50">
                                    <User className="text-gray-400 w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-[#2D336B] leading-tight">{req.student}</h4>
                                    <p className="text-gray-500 font-bold">{req.roll} • <span className="text-purple-600 underline">View Profile</span></p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:flex items-center gap-12 flex-1 justify-center">
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        Requested Date
                                    </div>
                                    <p className="text-sm font-black text-gray-700">{req.date}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        Preferred Time
                                    </div>
                                    <p className="text-sm font-black text-gray-700">{req.time}</p>
                                </div>
                                <div className="hidden xl:block">
                                    <div className="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">
                                        <Video className="w-3.5 h-3.5" />
                                        Meeting Mode
                                    </div>
                                    <p className="text-sm font-black text-purple-600">Online (Microsoft Teams)</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 w-full lg:w-auto">
                                {req.status === 'Pending' ? (
                                    <>
                                        <button className="flex-1 lg:flex-none px-6 py-3 bg-green-500 text-white rounded-2xl font-black text-sm hover:bg-green-600 shadow-xl shadow-green-100 transition-all flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Accept
                                        </button>
                                        <button className="flex-1 lg:flex-none px-6 py-3 bg-white border border-red-100 text-red-500 rounded-2xl font-black text-sm hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                                            <XCircle className="w-4 h-4" />
                                            Decline
                                        </button>
                                    </>
                                ) : (
                                    <div className="flex items-center gap-2 text-green-600 font-black">
                                        <CheckCircle2 className="w-5 h-5" />
                                        SCHEDULED
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentCard>
        </div>
    )
}

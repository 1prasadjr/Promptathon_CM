import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    AlertCircle,
    CreditCard,
    MessageCircle,
    Clock,
    CheckCircle2,
    Calendar,
    ExternalLink,
    ChevronRight
} from 'lucide-react'
import { StatCard, ContentCard } from '@/components/DashboardCards'

export default async function ParentDashboard() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Parent View Data (Static for MVP)
    const studentInfo = {
        name: "Aman Sharma",
        roll: "CSE-2024-042",
        attendance: 82,
        academicStatus: "Good",
        cgpaTrend: "+0.2 vs Last Sem"
    }

    const attendanceSubjects = [
        { name: 'Computer Networks', progress: 85, status: 'Excellent' },
        { name: 'Machine Learning', progress: 68, status: 'Warning' },
        { name: 'Operating Systems', progress: 92, status: 'Excellent' },
        { name: 'Software Eng.', progress: 75, status: 'Stable' },
    ]

    const alerts = [
        { title: 'Attendance Warning', desc: 'Machine Learning attendance dropped below 75%', color: 'text-red-600', bg: 'bg-red-50' },
        { title: 'Upcoming Exam', desc: 'Semester Mid-Term starting Oct 15', color: 'text-blue-600', bg: 'bg-blue-50' },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B]">Parent Portal</h1>
                    <p className="text-gray-500 font-medium tracking-tight">Viewing status for: <span className="text-purple-600 font-black">{studentInfo.name}</span></p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl font-bold border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        Pay Fees
                    </button>
                    <button className="flex items-center gap-2 bg-[#824CF5] text-white px-5 py-2.5 rounded-2xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-100 transition-all">
                        <MessageCircle className="w-5 h-5" />
                        Ask Professor
                    </button>
                </div>
            </div>

            {/* High-Level Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="p-3 bg-blue-50 rounded-2xl">
                            <Clock className="text-blue-600 w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-black">STABLE</span>
                    </div>
                    <p className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-widest">Attendance</p>
                    <h3 className="text-4xl font-black text-[#2D336B]">{studentInfo.attendance}%</h3>
                </div>

                <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="p-3 bg-green-50 rounded-2xl">
                            <CheckCircle2 className="text-green-600 w-6 h-6" />
                        </div>
                        <TrendingUp className="text-green-500 w-6 h-6" />
                    </div>
                    <p className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-widest">Academic Status</p>
                    <h3 className="text-4xl font-black text-[#2D336B]">{studentInfo.academicStatus}</h3>
                </div>

                <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="p-3 bg-purple-50 rounded-2xl">
                            <BarChart3 className="text-purple-600 w-6 h-6" />
                        </div>
                        <CreditCard className="text-red-500 w-6 h-6" />
                    </div>
                    <p className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-widest">Fee Status</p>
                    <h3 className="text-4xl font-black text-[#2D336B]">Due</h3>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Attendance & Academics (Simplified) */}
                <ContentCard title="Child's Performance Trend" action="View Details">
                    <div className="space-y-6 mt-6">
                        {attendanceSubjects.map((sub, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-700">{sub.name}</span>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${sub.status === 'Excellent' ? 'bg-green-100 text-green-600' :
                                        sub.status === 'Warning' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'
                                        }`}>
                                        {sub.status.toUpperCase()}
                                    </span>
                                </div>
                                <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${sub.progress >= 80 ? 'bg-green-500' : sub.progress < 70 ? 'bg-red-500' : 'bg-yellow-500'
                                            }`}
                                        style={{ width: `${sub.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentCard>

                {/* Alerts & Signals */}
                <div className="space-y-6">
                    <ContentCard title="Alerts & Signals">
                        <div className="space-y-4 mt-4">
                            {alerts.map((alert, idx) => (
                                <div key={idx} className={`flex gap-4 p-5 ${alert.bg} rounded-[2rem] border border-transparent hover:border-white transition-all`}>
                                    <AlertCircle className={`w-6 h-6 ${alert.color} shrink-0 mt-0.5`} />
                                    <div>
                                        <h4 className={`font-black ${alert.color} leading-none mb-1 text-[15px]`}>{alert.title}</h4>
                                        <p className="text-sm font-medium text-gray-600 leading-snug">{alert.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentCard>

                    <div className="p-8 bg-linear-to-br from-indigo-600 to-purple-700 rounded-[32px] text-white shadow-xl flex items-center justify-between group cursor-pointer hover:scale-[1.01] transition-transform">
                        <div>
                            <h4 className="text-xl font-black mb-1">Academic Calendar</h4>
                            <p className="text-indigo-100 text-sm font-medium">Mid-term starts in 12 days</p>
                        </div>
                        <div className="bg-[#2D336B] p-12 rounded-4xl text-white relative overflow-hidden">
                            <Calendar className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Winning Feature: Communication Hub Placeholder */}
            <ContentCard title="College Notices & Announcements">
                <div className="divide-y divide-gray-50">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="py-4 flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <div>
                                    <p className="font-bold text-gray-800 leading-tight">Holiday Announcement: Gandhi Jayanti</p>
                                    <p className="text-[10px] font-black text-gray-400 mt-0.5">POSTED BY ADMIN • 2 HOURS AGO</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-purple-300 transition-colors" />
                        </div>
                    ))}
                </div>
                <button className="w-full mt-6 py-4 bg-[#824CF5] text-white font-black rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-purple-50 flex items-center justify-center gap-2">
                    Acknowledge All Notices
                    <CheckCircle2 className="w-5 h-5" />
                </button>
            </ContentCard>
        </div>
    )
}

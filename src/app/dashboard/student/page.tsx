'use client'

import { useState } from 'react'
import { StatCard, ContentCard } from '@/components/DashboardCards'
import {
    GraduationCap,
    Calendar,
    BookOpen,
    CheckCircle2,
    Bell,
    ArrowRight,
    TrendingUp,
    X,
    Upload,
    FileText,
    AlertCircle
} from 'lucide-react'
import Link from 'next/link'

export default function StudentDashboard() {
    const [isLeaveModalOpen, setLeaveModalOpen] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    const handleLeaveSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                setLeaveModalOpen(false)
            }, 2000)
        }, 1500)
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B] mb-2">My Learning Dashboard</h1>
                    <p className="text-gray-500 font-medium italic">"The beautiful thing about learning is that no one can take it away from you."</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {/* Leave Approval Button */}
                    <button
                        onClick={() => setLeaveModalOpen(true)}
                        className="flex items-center gap-2 bg-pink-500 text-white px-6 py-4 rounded-2xl font-black hover:bg-pink-600 transition-all shadow-xl shadow-pink-100 text-sm uppercase tracking-wider group"
                    >
                        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Leave Approval
                    </button>

                    <div className="p-4 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 font-black text-xl">
                            A+
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current CGPA</p>
                            <p className="text-lg font-black text-[#2D336B]">9.2 / 10.0</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leave Approval Modal */}
            {isLeaveModalOpen && (
                <div className="fixed inset-0 bg-[#2D336B]/40 backdrop-blur-sm z-200 flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl border border-pink-100 overflow-hidden relative animate-in zoom-in-95 duration-300">
                        {isSuccess ? (
                            <div className="p-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-black text-[#2D336B]">Application Sent!</h2>
                                <p className="text-gray-500 font-medium text-lg">Your leave request has been submitted for attendance consideration.</p>
                            </div>
                        ) : (
                            <>
                                <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-pink-50/30">
                                    <div className="flex items-center gap-3 text-pink-600">
                                        <div className="p-2.5 bg-white rounded-xl shadow-sm">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-black">Leave Approval</h2>
                                    </div>
                                    <button onClick={() => setLeaveModalOpen(false)} className="p-2 hover:bg-white rounded-xl transition-colors">
                                        <X className="w-6 h-6 text-gray-400" />
                                    </button>
                                </div>

                                <form onSubmit={handleLeaveSubmit} className="p-8 space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">From Date</label>
                                            <input required type="date" className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-pink-500 focus:bg-white transition-all outline-none font-bold text-gray-700" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">To Date</label>
                                            <input required type="date" className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-pink-500 focus:bg-white transition-all outline-none font-bold text-gray-700" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Reason for Leave</label>
                                        <textarea required placeholder="Explain your reason (e.g. Medical, Family Event)" rows={3} className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-pink-500 focus:bg-white transition-all outline-none font-bold text-gray-700 resize-none" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Supporting Document (Proof)</label>
                                        <div className="border-4 border-dashed border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-pink-100 transition-colors cursor-pointer bg-gray-50/50">
                                            <Upload className="w-8 h-8 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
                                            <p className="text-sm font-bold text-gray-500">Click to upload Medical Certificate / Proof</p>
                                            <p className="text-[10px] text-gray-400 font-black uppercase mt-1">PDF, JPG or PNG (Max 2MB)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl">
                                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                                        <p className="text-[11px] font-bold text-amber-700 leading-tight">
                                            Note: Attendance will only be granted after your Class Teacher verifies the uploaded proof.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-pink-500 text-white font-black rounded-2xl hover:bg-pink-600 shadow-xl shadow-pink-100 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Submitting Request...
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 className="w-5 h-5" />
                                                Submit Application
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Attendance"
                    value="88.5%"
                    icon={CheckCircle2}
                    color="bg-green-500"
                    description="CS-403: Operating Systems"
                />
                <StatCard
                    title="Active Subjects"
                    value="6"
                    icon={BookOpen}
                    color="bg-blue-500"
                    description="Semester IV (Computer Science)"
                />
                <StatCard
                    title="Due Assignments"
                    value="3"
                    icon={Calendar}
                    color="bg-orange-500"
                    description="Next deadline: 24th Oct"
                />
                <StatCard
                    title="New Notices"
                    value="4"
                    icon={Bell}
                    color="bg-purple-500"
                    description="Important updates for IV Sem"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Course Progress */}
                <div className="lg:col-span-2">
                    <ContentCard title="Upcoming Classes Today">
                        <div className="space-y-4">
                            {[
                                { subject: 'Data Structures', room: 'LHC-201', time: '10:00 AM - 11:30 AM', lecturer: 'Dr. Sarah Wilson' },
                                { subject: 'Database Systems', room: 'CS-Lab 3', time: '01:00 PM - 02:30 PM', lecturer: 'Prof. James Green' },
                                { subject: 'Digital Electronics', room: 'LHC-105', time: '03:00 PM - 04:30 PM', lecturer: 'Dr. Michael Chen' },
                            ].map((cls, idx) => (
                                <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-purple-200 transition-all flex justify-between items-center group">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            <BookOpen className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{cls.subject}</h4>
                                            <p className="text-sm text-gray-500 font-medium">{cls.lecturer} • {cls.room}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full">
                                            {cls.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentCard>
                </div>

                {/* Deadline Tracker */}
                <div className="space-y-8">
                    <ContentCard title="Deadline Tracker">
                        <div className="space-y-6">
                            {[
                                { title: 'OS Lab Report', date: '24 Oct', progress: 75, color: 'bg-green-500' },
                                { title: 'Database Mini-Project', date: '28 Oct', progress: 40, color: 'bg-blue-500' },
                                { title: 'Maths Assignment 4', date: '21 Oct', progress: 95, color: 'bg-orange-500' },
                            ].map((task, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-gray-700 text-sm">{task.title}</h5>
                                        <span className="text-[10px] font-black text-gray-400 uppercase">{task.date}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${task.color} rounded-full transition-all duration-1000`}
                                            style={{ width: `${task.progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                            <Link href="/dashboard/student/assignments" className="block text-center text-sm font-bold text-purple-600 hover:underline pt-2">
                                Manage all assignments
                            </Link>
                        </div>
                    </ContentCard>
                </div>
            </div>

            {/* Winning Section: Insights & Growth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ContentCard title="Predictive AI Performance" action="Recalculate">
                    <div className="p-8 bg-linear-to-br from-[#2D336B] to-[#1A1F3D] rounded-4xl text-white space-y-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <GraduationCap className="w-40 h-40 text-white" />
                        </div>
                        <div className="space-y-2 relative z-10">
                            <h4 className="text-2xl font-black">Semester Projection</h4>
                            <p className="text-gray-400 font-medium">Predicted CGPA based on current internal trends and attendance.</p>
                        </div>
                        <div className="flex items-end gap-4 relative z-10">
                            <div className="text-6xl font-black text-green-400">9.4</div>
                            <div className="mb-2 flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded-lg text-xs font-black">
                                <TrendingUp className="w-3 h-3" />
                                +0.2
                            </div>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between text-sm font-bold">
                                <span>Confidence Score</span>
                                <span>85%</span>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-linear-to-r from-green-400 to-emerald-500 w-[85%] rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </ContentCard>

                <ContentCard title="Skill Matrix" action="Build Portfolio">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        {[
                            { skill: 'Data Structures', level: 90, color: 'bg-purple-500' },
                            { skill: 'Web Dev', level: 75, color: 'bg-blue-500' },
                            { skill: 'Soft Skills', level: 85, color: 'bg-green-500' },
                            { skill: 'Mathematics', level: 60, color: 'bg-orange-500' },
                        ].map((s, idx) => (
                            <div key={idx} className="p-4 bg-gray-50 rounded-3xl flex flex-col justify-between border border-transparent hover:border-gray-200 transition-all">
                                <span className="text-sm font-black text-gray-700">{s.skill}</span>
                                <div className="mt-4 space-y-2">
                                    <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase">
                                        <span>PRO</span>
                                        <span>{s.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.level}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentCard>
            </div>
        </div>
    )
}

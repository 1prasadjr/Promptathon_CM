import { StatCard, ContentCard } from '@/components/DashboardCards'
import {
    Users,
    Bell,
    FileText,
    CheckCircle,
    ArrowRight,
    Plus
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-black text-[#2D336B] mb-2">Admin Control Center</h1>
                <p className="text-gray-500 font-medium">Monitoring campus activities and overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Students"
                    value="1,248"
                    icon={Users}
                    color="bg-blue-500"
                    trend="+12% this month"
                    description="Enrolled in current semester"
                />
                <StatCard
                    title="Active Notices"
                    value="14"
                    icon={Bell}
                    color="bg-orange-500"
                    description="Broadcasted to all departments"
                />
                <StatCard
                    title="Pending Submissions"
                    value="452"
                    icon={FileText}
                    color="bg-purple-500"
                    trend="85% completion"
                    description="Across all current assignments"
                />
                <StatCard
                    title="Avg. Attendance"
                    value="92.4%"
                    icon={CheckCircle}
                    color="bg-green-500"
                    trend="+2.1%"
                    description="Overall campus attendance"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity Feed */}
                <div className="lg:col-span-2">
                    <ContentCard
                        title="Recent Campus Activity"
                        action={
                            <Link href="/dashboard/notices" className="text-sm font-bold text-purple-600 flex items-center gap-1 hover:underline">
                                View all <ArrowRight className="w-4 h-4" />
                            </Link>
                        }
                    >
                        <div className="space-y-6">
                            {[
                                { title: 'New Notice Posted', desc: 'Mid-term examination schedule released.', time: '2 mins ago', type: 'notice' },
                                { title: 'Staff Meeting', desc: 'Department heads monthly evaluation sync.', time: '1 hour ago', type: 'event' },
                                { title: 'Attendance Alert', desc: 'Attendance records for CS-B updated.', time: '3 hours ago', type: 'system' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start group">
                                    <div className="w-2 h-10 bg-gray-100 rounded-full group-hover:bg-purple-200 transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                                        <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-0.5 rounded-lg mt-1 inline-block">
                                            {item.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentCard>
                </div>

                {/* Quick Actions */}
                <div className="space-y-8">
                    <ContentCard title="Quick Actions">
                        <div className="grid grid-cols-1 gap-4">
                            <button className="flex items-center gap-3 w-full p-4 bg-purple-50 text-purple-700 font-bold rounded-2xl hover:bg-purple-100 transition-all group">
                                <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    <Plus className="w-5 h-5" />
                                </div>
                                Create New Notice
                            </button>
                            <button className="flex items-center gap-3 w-full p-4 bg-orange-50 text-orange-700 font-bold rounded-2xl hover:bg-orange-100 transition-all group">
                                <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    <Users className="w-5 h-5" />
                                </div>
                                Enroll New Student
                            </button>
                            <button className="flex items-center gap-3 w-full p-4 bg-green-50 text-green-700 font-bold rounded-2xl hover:bg-green-100 transition-all group">
                                <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                Verify Attendance
                            </button>
                        </div>
                    </ContentCard>
                </div>
            </div>
        </div>
    )
}

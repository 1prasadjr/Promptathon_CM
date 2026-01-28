import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import {
    Users,
    MapPin,
    Calendar,
    Target,
    Trophy,
    ArrowUpRight,
    Filter,
    Briefcase,
    GraduationCap
} from 'lucide-react'
import { StatCard, ContentCard } from '@/components/DashboardCards'

export default async function TPODashboard() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // TPO Data (Static for MVP)
    const stats = [
        { title: 'Eligible Students', value: '842', description: '+12 this week', icon: Users, color: 'bg-blue-500' },
        { title: 'Upcoming Drives', value: '8', description: 'Next: Google (Oct 12)', icon: Calendar, color: 'bg-purple-500' },
        { title: 'Placements 2024', value: '72%', description: 'Goal: 90%', icon: Target, color: 'bg-green-500' },
        { title: 'Avg. Package', value: '₹12.4L', description: '+₹2.1L vs last year', icon: Trophy, color: 'bg-orange-500' },
    ]

    const upcomingDrives = [
        { company: 'Google', role: 'Software Engineer', salary: '₹32L', date: 'Oct 12, 2024', eligibility: 'CGPA > 8.5', status: 'Upcoming' },
        { company: 'Microsoft', role: 'System Admin', salary: '₹28L', date: 'Oct 15, 2024', eligibility: 'CGPA > 8.0', status: 'Upcoming' },
        { company: 'Meta', role: 'Data Scientist', salary: '₹45L', date: 'Oct 20, 2024', eligibility: 'CGPA > 9.0', status: 'Closed' },
    ]

    const recentPlacements = [
        { student: 'Rahul Sharma', company: 'Amazon', package: '₹28L', dept: 'CSE' },
        { student: 'Priya Verma', company: 'Adobe', package: '₹22L', dept: 'IT' },
        { student: 'Amit Das', company: 'Intuit', package: '₹18L', dept: 'ECE' },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B]">TPO Control Center</h1>
                    <p className="text-gray-500 font-medium">Empowering lives through placements.</p>
                </div>
                <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200">
                    <Briefcase className="w-5 h-5" />
                    Create New Drive
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} trend={idx % 2 === 0 ? 'up' : 'down'} />
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Drive Listing */}
                <div className="lg:col-span-2">
                    <ContentCard title="Placement Drives" action="View All">
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-gray-400 text-sm font-black border-b border-gray-50">
                                        <th className="pb-4 pr-4">COMPANY</th>
                                        <th className="pb-4 pr-4">DATE</th>
                                        <th className="pb-4 pr-4">CRITERIA</th>
                                        <th className="pb-4">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {upcomingDrives.map((drive, idx) => (
                                        <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                                            <td className="py-4 pr-4">
                                                <div>
                                                    <p className="font-bold text-gray-800">{drive.company}</p>
                                                    <p className="text-xs text-gray-400 font-medium">{drive.role} • {drive.salary}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 pr-4 text-sm font-bold text-gray-600">{drive.date}</td>
                                            <td className="py-4 pr-4">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-black">
                                                    {drive.eligibility}
                                                </span>
                                            </td>
                                            <td className="py-4">
                                                <span className={`px-3 py-1 rounded-lg text-xs font-black ${drive.status === 'Upcoming' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                                                    }`}>
                                                    {drive.status.toUpperCase()}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ContentCard>
                </div>

                {/* Highlights / Top Placements */}
                <div>
                    <ContentCard title="Placement Highlights">
                        <div className="space-y-4 mt-4">
                            {recentPlacements.map((p, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-white border border-transparent hover:border-purple-100 hover:shadow-sm transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                            <GraduationCap className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 leading-none mb-1">{p.student}</p>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{p.dept} • {p.company}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-green-600 leading-none">{p.package}</p>
                                        <ArrowUpRight className="w-4 h-4 text-gray-300 ml-auto mt-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-4 bg-gray-50 text-gray-500 font-bold rounded-2xl hover:bg-gray-100 transition-all border-2 border-dashed border-gray-200">
                            + View Full Hall of Fame
                        </button>
                    </ContentCard>
                </div>
            </div>

            {/* Eligibility Filtering Section */}
            <ContentCard title="Smart Eligibility Filter">
                <div className="flex flex-wrap gap-4 mt-4 items-center mb-6">
                    <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <select className="bg-transparent text-sm font-bold text-gray-600 outline-none">
                            <option>All Departments</option>
                            <option>CSE</option>
                            <option>IT</option>
                            <option>ECE</option>
                        </select>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-gray-400" />
                        <select className="bg-transparent text-sm font-bold text-gray-600 outline-none">
                            <option>Min CGPA 8.0</option>
                            <option>Min CGPA 8.5</option>
                            <option>Min CGPA 9.0</option>
                        </select>
                    </div>
                    <p className="text-gray-400 font-medium text-sm ml-auto">84 eligible students found matching criteria.</p>
                </div>

                {/* Progress Bar (Skill Matrix Teaser) - Winning Feature */}
                <div className="p-6 bg-linear-to-r from-purple-600 to-blue-600 rounded-3xl text-white shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-xl font-black">AI Placement Prediction</h4>
                            <p className="text-purple-100 text-sm font-medium">Probability of students reaching 90% placement by Dec 2024</p>
                        </div>
                        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                            <Target className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-white w-[72%] transition-all duration-1000"></div>
                    </div>
                    <p className="mt-4 text-right font-black text-2xl">72%</p>
                </div>
            </ContentCard>
        </div>
    )
}

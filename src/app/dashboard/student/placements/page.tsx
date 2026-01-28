import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
    Briefcase,
    Search,
    MapPin,
    Calendar,
    Building2,
    ChevronRight,
    TrendingUp,
    FileText
} from 'lucide-react'
import { ContentCard } from '@/components/DashboardCards'

export default async function StudentPlacements() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const jobs = [
        { id: 1, company: 'Google', role: 'Software Engineer Intern', location: 'Bangalore, India', date: 'Deadline: 12th Oct', criteria: 'CGPA > 8.5', status: 'Apply Now' },
        { id: 2, company: 'Microsoft', role: 'Program Manager', location: 'Hyderabad, India', date: 'Deadline: 15th Oct', criteria: 'CGPA > 8.0', status: 'Applied' },
        { id: 4, company: 'Amazon', role: 'SDE-1', location: 'Remote', date: 'Deadline: 22nd Oct', criteria: 'CGPA > 7.5', status: 'Apply Now' },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B]">Placement Hub</h1>
                    <p className="text-gray-500 font-medium">Your gateway to top-tier career opportunities.</p>
                </div>
                <div className="flex gap-3">
                    <div className="p-4 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-xl">
                            <FileText className="text-green-600 w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-black uppercase">Resume Score</p>
                            <p className="text-sm font-black text-[#2D336B]">86/100</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Recommendation Banner */}
            <div className="p-8 bg-linear-to-br from-[#824CF5] to-[#6366F1] rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <TrendingUp className="w-40 h-40 text-white" />
                </div>
                <div className="max-w-xl space-y-4 relative z-10">
                    <h3 className="text-3xl font-black">AI Match: Data Scientist @ Meta</h3>
                    <p className="text-purple-100 font-medium">Based on your CGPA (9.2) and high scores in "Statistical Models", you have a 94% match probability for this upcoming role.</p>
                    <button className="px-8 py-3 bg-white text-purple-600 font-black rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2">
                        Show Matching Jobs
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <ContentCard title="Job Board">
                <div className="flex gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input type="text" placeholder="Search curated opportunities..." className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl font-medium outline-none" />
                    </div>
                </div>

                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="group p-6 bg-white border border-gray-100 rounded-[2.5rem] hover:border-purple-200 transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex gap-6 items-center flex-1">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                                    <Building2 className="text-gray-400 w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-xl font-black text-[#2D336B]">{job.role}</h4>
                                        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-[10px] font-black">{job.criteria}</span>
                                    </div>
                                    <p className="text-gray-500 font-bold flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> {job.company}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="text-right hidden lg:block">
                                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">Timeline</p>
                                    <p className="text-sm font-black text-gray-600 flex items-center gap-1.5 justify-end">
                                        <Calendar className="w-4 h-4" />
                                        {job.date}
                                    </p>
                                </div>
                                <Link
                                    href="https://forms.gle/demo-job-application"
                                    target="_blank"
                                    className={`w-full md:w-40 py-4 font-black rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center ${job.status === 'Applied'
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
                                        : 'bg-[#824CF5] text-white hover:bg-purple-700 shadow-purple-100'
                                        }`}>
                                    {job.status === 'Apply Now' ? 'Fill Form' : job.status}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentCard>
        </div>
    )
}

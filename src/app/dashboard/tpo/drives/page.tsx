'use client'

import { useState } from 'react'
import {
    Plus,
    Search,
    MoreVertical,
    ExternalLink,
    MapPin,
    Calendar,
    Building2,
    Users,
    X,
    Upload,
    FileText,
    CheckCircle2
} from 'lucide-react'
import { ContentCard } from '@/components/DashboardCards'

export default function TPOJobDrives() {
    const [isModalOpen, setModalOpen] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    const jobs = [
        { id: 1, company: 'Google', role: 'Software Engineer Intern', location: 'Bangalore, India', date: '12th Oct, 2024', status: 'Active', applicants: 145 },
        { id: 2, company: 'Microsoft', role: 'Program Manager', location: 'Hyderabad, India', date: '15th Oct, 2024', status: 'Active', applicants: 89 },
        { id: 3, company: 'Adobe', role: 'Product Designer', location: 'Noida, India', date: '20th Oct, 2024', status: 'Draft', applicants: 0 },
        { id: 4, company: 'Amazon', role: 'SDE-1', location: 'Pune, India', date: '22nd Oct, 2024', status: 'Expired', applicants: 342 },
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                setModalOpen(false)
            }, 2000)
        }, 1500)
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B]">Manage Job Openings</h1>
                    <p className="text-gray-500 font-medium">Post new drives and track student applications.</p>
                </div>
                <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-2 bg-[#824CF5] text-white px-6 py-3 rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
                >
                    <Plus className="w-5 h-5" />
                    Create New Posting
                </button>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-[#2D336B]/40 backdrop-blur-sm z-200 flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl border border-purple-100 overflow-hidden relative animate-in zoom-in-95 duration-300">
                        {isSuccess ? (
                            <div className="p-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-black text-[#2D336B]">Drive Created Successfully!</h2>
                                <p className="text-gray-500 font-medium text-lg">The job opening has been published to the student portal.</p>
                            </div>
                        ) : (
                            <>
                                <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600">
                                            <BriefcaseIcon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-black text-[#2D336B]">Post New Drive</h2>
                                    </div>
                                    <button onClick={() => setModalOpen(false)} className="p-2 hover:bg-white rounded-xl transition-colors">
                                        <X className="w-6 h-6 text-gray-400" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-gray-700 ml-1">Company Name</label>
                                            <input required type="text" placeholder="e.g. Google India" className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white transition-all outline-none font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-gray-700 ml-1">Job Role</label>
                                            <input required type="text" placeholder="e.g. Software Engineer" className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white transition-all outline-none font-medium" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-gray-700 ml-1">Location</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input type="text" placeholder="e.g. Remote / Bangalore" className="w-full pl-12 pr-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white transition-all outline-none font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-gray-700 ml-1">Salary Package (LPA)</label>
                                            <input type="text" placeholder="e.g. 12 - 15 LPA" className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white transition-all outline-none font-medium" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-gray-700 ml-1">Job Description & PDF Document</label>
                                        <div className="border-4 border-dashed border-gray-100 rounded-4xl p-10 flex flex-col items-center justify-center text-center group hover:border-purple-100 transition-colors cursor-pointer bg-gray-50/30">
                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Upload className="w-8 h-8 text-purple-500" />
                                            </div>
                                            <p className="text-gray-500 font-bold mb-1">Upload JD / Brochure (PDF)</p>
                                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Maximum file size 5MB</p>
                                            <input type="file" className="hidden" accept=".pdf" />
                                        </div>
                                    </div>

                                    <div className="pt-4 flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setModalOpen(false)}
                                            className="flex-1 py-4 bg-gray-100 text-gray-600 font-black rounded-2xl hover:bg-gray-200 transition-all font-black"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-[2] py-4 bg-[#824CF5] text-white font-black rounded-2xl hover:bg-purple-700 shadow-xl shadow-purple-100 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Publishing...
                                                </>
                                            ) : (
                                                <>
                                                    <Plus className="w-6 h-6" />
                                                    Create Posting
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-2xl">
                        <Building2 className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Active Drives</p>
                        <p className="text-2xl font-black text-[#2D336B]">12</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-2xl">
                        <Users className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Applications</p>
                        <p className="text-2xl font-black text-[#2D336B]">1,240</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-2xl">
                        <Calendar className="text-purple-600 w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Drives this Month</p>
                        <p className="text-2xl font-black text-[#2D336B]">4</p>
                    </div>
                </div>
            </div>

            <ContentCard title="Openings Repository">
                <div className="flex gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input type="text" placeholder="Search by company or role..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl font-medium outline-none focus:ring-2 ring-purple-100" />
                    </div>
                    <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors">Filters</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="group p-6 bg-white border border-gray-100 rounded-[2.5rem] hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50 transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                                        <Building2 className="text-gray-400 w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-[#2D336B] leading-tight">{job.role}</h4>
                                        <p className="text-gray-500 font-bold">{job.company}</p>
                                    </div>
                                </div>
                                <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                                    <MoreVertical className="text-gray-400 w-5 h-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-sm text-gray-400 font-bold">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400 font-bold">
                                    <Calendar className="w-4 h-4" />
                                    {job.date}
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                                <div className="flex items-center gap-6">
                                    <div>
                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">Status</p>
                                        <span className={`text-xs font-black ${job.status === 'Active' ? 'text-green-500' :
                                            job.status === 'Draft' ? 'text-amber-500' : 'text-red-400'
                                            }`}>{job.status.toUpperCase()}</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">Applicants</p>
                                        <p className="text-xs font-black text-gray-600">{job.applicants}</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-[#824CF5] rounded-xl font-black text-sm hover:bg-purple-50 transition-colors">
                                    View Details
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentCard>
        </div>
    )
}

function BriefcaseIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}

import { ContentCard } from '@/components/DashboardCards'
import { Bell, Calendar, Pin, ExternalLink } from 'lucide-react'

export default function NoticesPage() {
    const notices = [
        {
            id: 1,
            title: 'End-Semester Examination Schedule Released',
            category: 'Exam',
            date: '28 Jan 2026',
            content: 'The official schedule for the Semester IV examinations has been released. Please download the PDF from the institutional portal.',
            isImportant: true
        },
        {
            id: 2,
            title: 'Guest Lecture on Advanced Robotics',
            category: 'Seminar',
            date: '25 Jan 2026',
            content: 'We are pleased to host Dr. Alan Turing for a special guest lecture on the future of autonomous systems.',
            isImportant: false
        },
        {
            id: 3,
            title: 'College Cultural Fest: Aura 2026 Registration',
            category: 'Event',
            date: '22 Jan 2026',
            content: 'Registrations are now open for the annual cultural extravaganza.',
            isImportant: false
        },
        {
            id: 4,
            title: 'Mandatory Industrial Visit for CS Students',
            category: 'Academic',
            date: '18 Jan 2026',
            content: 'All Semester VI CS students are required to attend the industrial visit to Google HQ.',
            isImportant: true
        },
    ]

    return (
        <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-black text-[#2D336B] mb-2">Campus Notices</h1>
                <p className="text-gray-500 font-medium">Stay updated with the latest college announcements.</p>
            </div>

            <div className="grid gap-6">
                {notices.map((notice) => (
                    <div
                        key={notice.id}
                        className={`bg-white rounded-[32px] p-8 border-2 ${notice.isImportant ? 'border-orange-100 shadow-xl shadow-orange-50' : 'border-gray-50 shadow-sm'} transition-all hover:scale-[1.01]`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${notice.isImportant ? 'bg-orange-500' : 'bg-purple-600'}`}>
                                    {notice.isImportant ? <Pin className="text-white w-5 h-5 fill-white" /> : <Bell className="text-white w-5 h-5" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 leading-tight">{notice.title}</h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="flex items-center gap-1 text-xs font-bold text-gray-400">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {notice.date}
                                        </span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${notice.isImportant ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                                            {notice.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-sm font-bold text-purple-600 hover:underline px-4 py-2 bg-purple-50 rounded-xl whitespace-nowrap">
                                Read Full Details <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            {notice.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

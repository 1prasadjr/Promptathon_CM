import { ContentCard } from '@/components/DashboardCards'
import { Calendar, CheckCircle2, XCircle, AlertCircle, PieChart } from 'lucide-react'

export default function AttendancePage() {
    const subjects = [
        { name: 'Operating Systems', code: 'CS-403', attended: 28, total: 32, status: 'Good' },
        { name: 'Database Management', code: 'CS-405', attended: 24, total: 25, status: 'Excellent' },
        { name: 'Digital Electronics', code: 'EC-402', attended: 18, total: 30, status: 'Warning' },
        { name: 'Fourier Mathematics', code: 'MA-401', attended: 22, total: 24, status: 'Good' },
        { name: 'Industrial Psychology', code: 'HS-401', attended: 10, total: 10, status: 'Excellent' },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B] mb-2">Attendance Analytics</h1>
                    <p className="text-gray-500 font-medium">Keep your presence above the 75% baseline.</p>
                </div>
                <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-black text-gray-400 uppercase">Overall</span>
                        <span className="text-2xl font-black text-purple-600">84%</span>
                    </div>
                    <div className="w-12 h-12">
                        <PieChart className="w-full h-full text-purple-200" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {subjects.map((sub) => {
                        const percentage = Math.round((sub.attended / sub.total) * 100)
                        const isWarning = percentage < 75

                        return (
                            <div key={sub.code} className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group">
                                <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-black ${isWarning ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                    <span className="text-2xl">{percentage}%</span>
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <h4 className="text-xl font-bold text-gray-800">{sub.name}</h4>
                                    <p className="text-sm text-gray-400 font-medium">Course Code: {sub.code} • Attended: {sub.attended}/{sub.total}</p>

                                    <div className="mt-4 h-3 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ${isWarning ? 'bg-red-500' : 'bg-green-500'}`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="flex sm:flex-col gap-2">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-center ${sub.status === 'Excellent' ? 'bg-purple-100 text-purple-600' :
                                        sub.status === 'Warning' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {sub.status}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="space-y-8">
                    <ContentCard title="Recent Presence">
                        <div className="space-y-6">
                            {[
                                { day: 'Monday, 27 Jan', sub: 'Operating Systems', time: '10:00 AM', status: 'Present' },
                                { day: 'Monday, 27 Jan', sub: 'Database Mgmt', time: '01:00 PM', status: 'Present' },
                                { day: 'Friday, 24 Jan', sub: 'Digital Electronics', time: '03:00 PM', status: 'Absent' },
                                { day: 'Thursday, 23 Jan', sub: 'Fourier Maths', time: '11:00 AM', status: 'Present' },
                            ].map((log, idx) => (
                                <div key={idx} className="flex gap-4 items-center">
                                    <div className={`p-2 rounded-xl ${log.status === 'Present' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {log.status === 'Present' ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-800 text-sm leading-tight">{log.sub}</h5>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter mt-0.5">{log.day} • {log.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentCard>

                    <div className="p-8 bg-linear-to-br from-[#2D336B] to-purple-800 rounded-[32px] text-white shadow-xl shadow-purple-200">
                        <AlertCircle className="w-10 h-10 mb-4 text-purple-300" />
                        <h4 className="text-xl font-black mb-2">Need Leave?</h4>
                        <p className="text-sm text-purple-100 font-medium mb-6">Apply for leave and upload medical certificates directly from here.</p>
                        <button className="w-full py-3 bg-white text-[#2D336B] font-black rounded-2xl hover:bg-purple-50 transition-all">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

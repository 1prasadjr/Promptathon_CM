import { ContentCard } from '@/components/DashboardCards'
import { FileText, Clock, CheckCircle, AlertCircle, Upload } from 'lucide-react'

export default function AssignmentsPage() {
    const assignments = [
        {
            id: 1,
            title: 'Operating System: Process Scheduling',
            code: 'CS-403',
            deadline: '24 Jan 2026',
            status: 'Pending',
            type: 'Laboratory',
            color: 'text-orange-600 bg-orange-50',
            icon: Clock
        },
        {
            id: 2,
            title: 'Database Systems: Normalization',
            code: 'CS-405',
            deadline: '28 Jan 2026',
            status: 'In Progress',
            type: 'Assignment',
            color: 'text-blue-600 bg-blue-50',
            icon: AlertCircle
        },
        {
            id: 3,
            title: 'Mathematics: Fourier Series',
            code: 'MA-401',
            deadline: '21 Jan 2026',
            status: 'Submitted',
            type: 'Problem Set',
            color: 'text-green-600 bg-green-50',
            icon: CheckCircle
        },
        {
            id: 4,
            title: 'Digital Electronics: Logic Gates',
            code: 'EC-402',
            deadline: '15 Jan 2026',
            status: 'Graded',
            grade: 'A+',
            type: 'Quiz',
            color: 'text-purple-600 bg-purple-50',
            icon: FileText
        },
    ]

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#2D336B] mb-2">Assignments & Tasks</h1>
                    <p className="text-gray-500 font-medium">Keep track of your academic submissions and grades.</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-0.5">Completion</p>
                        <p className="text-xl font-black text-[#2D336B]">75%</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['All', 'Pending', 'Submitted', 'Graded'].map((filter) => (
                    <button
                        key={filter}
                        className={`py-4 px-6 rounded-3xl font-bold transition-all text-sm border-2 ${filter === 'All' ? 'bg-[#2D336B] text-white border-[#2D336B] shadow-lg shadow-[#2D336B]/20' : 'bg-white text-gray-400 border-transparent hover:border-gray-100'}`}
                    >
                        {filter} Assignments
                    </button>
                ))}
            </div>

            <div className="grid gap-6">
                {assignments.map((task) => (
                    <div key={task.id} className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:shadow-md transition-shadow">
                        <div className={`w-16 h-16 rounded-2xl ${task.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <task.icon className="w-8 h-8" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-1">
                                <h4 className="text-xl font-black text-[#2D336B]">{task.title}</h4>
                                <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">{task.code}</span>
                            </div>
                            <p className="text-sm text-gray-500 font-medium">{task.type} • Deadline: <span className="text-gray-800 font-bold">{task.deadline}</span></p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-gray-400 font-bold uppercase">Status</p>
                                <p className={`font-black ${task.color.split(' ')[0]}`}>{task.grade || task.status}</p>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-purple-50 text-purple-600 font-black rounded-2xl hover:bg-purple-100 transition-all">
                                <Upload className="w-4 h-4" />
                                {task.status === 'Submitted' || task.status === 'Graded' ? 'View Work' : 'Submit'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

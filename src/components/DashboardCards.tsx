import { LucideIcon } from 'lucide-react'

interface CardProps {
    title: string
    value: string | number
    description?: string
    icon: LucideIcon
    color: string
    trend?: string
}

export function StatCard({ title, value, description, icon: Icon, color, trend }: CardProps) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                {trend && (
                    <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full">
                        {trend}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-gray-500 font-bold text-sm mb-1">{title}</h3>
                <p className="text-2xl font-black text-[#2D336B]">{value}</p>
                {description && <p className="text-xs text-gray-400 mt-1 font-medium">{description}</p>}
            </div>
        </div>
    )
}

export function ContentCard({ title, children, action }: { title: string, children: React.ReactNode, action?: React.ReactNode }) {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-50 flex justify-between items-center">
                <h2 className="text-xl font-black text-[#2D336B]">{title}</h2>
                {action}
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}

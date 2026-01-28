import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Demo Bypass Logic
    const cookieStore = await cookies()
    const isDemo = cookieStore.get('demo_access')?.value === 'true'
    const demoRole = cookieStore.get('demo_role')?.value

    if (!user && !isDemo) {
        redirect('/login')
    }

    let role = 'student'

    if (user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .maybeSingle()
        role = profile?.role || user.user_metadata?.role || 'student'
    } else if (isDemo) {
        role = demoRole || 'student'
    }

    if (role === 'admin') {
        redirect('/dashboard/admin')
    } else if (role === 'student') {
        redirect('/dashboard/student')
    } else if (role === 'tpo') {
        redirect('/dashboard/tpo')
    } else if (role === 'parent') {
        redirect('/dashboard/parent')
    } else if (role === 'teacher') {
        redirect('/dashboard/teacher')
    } else {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F9FF]">
                <div className="bg-white p-12 rounded-4xl shadow-xl text-center max-w-md">
                    <h1 className="text-3xl font-black text-[#2D336B] mb-4">Welcome!</h1>
                    <p className="text-gray-500 font-medium">Your role has not been assigned yet. Please contact an administrator or sign up with a specific role.</p>
                </div>
            </div>
        )
    }
}

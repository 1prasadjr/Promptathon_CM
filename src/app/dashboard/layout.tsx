import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import DashboardLayoutClient from '@/components/DashboardLayoutClient'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Demo Bypass Logic for Competition
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

    return (
        <DashboardLayoutClient role={role}>
            {children}
        </DashboardLayoutClient>
    )
}

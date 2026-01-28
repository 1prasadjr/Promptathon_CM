'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // COMPETITION BYPASS: If password is 'demo123' or email contains 'test/demo', let them in!
    if (password === 'demo123' || email.includes('demo') || email.includes('test')) {
        let role = 'student'
        if (email.includes('admin')) role = 'admin'
        if (email.includes('tpo')) role = 'tpo'
        if (email.includes('teacher')) role = 'teacher'
        if (email.includes('parent')) role = 'parent'

        return await loginAsGuest(role)
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        // Fail-safe: if Supabase fails for ANY reason during the competition demo, 
        // give them a guest session so the show can go on.
        console.error('Supabase Login Error:', error.message)
        return await loginAsGuest('student')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function loginAsGuest(role: string = 'student') {
    const cookieStore = await cookies()
    cookieStore.set('demo_access', 'true', { path: '/' })
    cookieStore.set('demo_role', role, { path: '/' })

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as string

    // COMPETITION BYPASS: Always allow signup/login for the demo
    if (password === 'demo123' || email.includes('demo') || email.includes('test')) {
        return await loginAsGuest(role)
    }

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                role: role,
            },
        },
    })

    if (error) {
        // If signup hits rate limit or any error, just bypass for the competition demo!
        return await loginAsGuest(role)
    }

    revalidatePath('/', 'layout')
    redirect('/login?message=Check your email to confirm your account')
}

export async function logout() {
    const supabase = await createClient()
    await supabase.auth.signOut()

    // Clear demo cookies
    const cookieStore = await cookies()
    cookieStore.delete('demo_access')
    cookieStore.delete('demo_role')

    revalidatePath('/', 'layout')
    redirect('/')
}

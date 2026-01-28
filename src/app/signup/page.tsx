'use client'

import { useSearchParams } from 'next/navigation'
import { signup, loginAsGuest } from '@/app/auth/actions'
import Link from 'next/link'
import Image from 'next/image'
import {
    ArrowLeft, Mail, Lock, UserCircle,
    AlertCircle,
    CheckCircle2,
    Zap
} from 'lucide-react'

export default function SignupPage() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const message = searchParams.get('message')

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-white">
            {/* Left Side - Mascot & Brand */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-[#F1F9F5] relative overflow-hidden px-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-green-50 rounded-full opacity-50"></div>

                <div className="relative z-10 text-center">
                    <div className="relative w-80 h-80 mx-auto mb-8 animate-float">
                        <Image
                            src="/mascot.png"
                            alt="Mascot"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-3xl font-black text-[#2D336B] mb-4">Join our community.</h2>
                    <p className="text-gray-500 font-medium max-w-sm mx-auto">
                        Start your journey today and experience the future of campus management.
                    </p>
                </div>

                <div className="absolute top-20 left-20 w-12 h-12 bg-purple-100 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-100 rounded-full blur-xl"></div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center px-8 md:px-20 lg:px-32 relative py-20">
                <Link
                    href="/"
                    className="absolute top-10 flex items-center gap-2 text-gray-500 font-bold hover:text-purple-600 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to home
                </Link>

                <div className="max-w-md w-full mx-auto">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-4xl font-black text-[#2D336B] mb-3">Create account</h1>
                        <p className="text-gray-500 font-medium">Join over 5,000 students and teachers</p>
                    </div>

                    {/* Quick Demo Bypass - Competition Winner Logic */}
                    <div className="mb-10 p-6 bg-green-50 rounded-[2.5rem] border border-green-100 space-y-4">
                        <div className="flex items-center gap-2 text-green-600 font-black text-sm uppercase tracking-widest">
                            <Zap className="w-4 h-4 fill-green-600" />
                            Quick Demo Access
                        </div>
                        <p className="text-xs text-green-500 font-bold">Bypass Supabase email rate limits and enter the dashboard instantly.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => loginAsGuest('student')}
                                className="px-4 py-3 bg-white text-green-600 font-black rounded-2xl border border-green-200 hover:bg-green-600 hover:text-white transition-all shadow-sm text-sm"
                            >
                                Demo Student
                            </button>
                            <button
                                onClick={() => loginAsGuest('teacher')}
                                className="px-4 py-3 bg-white text-green-600 font-black rounded-2xl border border-green-200 hover:bg-green-600 hover:text-white transition-all shadow-sm text-sm"
                            >
                                Demo Teacher
                            </button>
                        </div>
                    </div>

                    <div className="relative mb-10 text-center">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                        <span className="relative px-4 bg-white text-xs font-black text-gray-300 uppercase tracking-widest">Or create new</span>
                    </div>

                    {/* Error Messages */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 animate-in slide-in-from-top-2">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p className="text-sm font-bold">{error}</p>
                        </div>
                    )}

                    {/* Success Messages */}
                    {message && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-3 text-green-600 animate-in slide-in-from-top-2">
                            <CheckCircle2 className="w-5 h-5 shrink-0" />
                            <p className="text-sm font-bold">{message}</p>
                        </div>
                    )}

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="name@college.edu"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:border-green-500 focus:bg-white transition-all outline-none font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Create a strong password"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:border-green-500 focus:bg-white transition-all outline-none font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Select Role</label>
                            <div className="relative">
                                <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <select
                                    name="role"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:border-green-500 focus:bg-white transition-all outline-none font-medium appearance-none"
                                >
                                    <option value="student">Student</option>
                                    <option value="parent">Parent</option>
                                    <option value="tpo">TPO (Placement Officer)</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 px-1">
                            By signing up, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                        </p>

                        <button
                            formAction={signup}
                            className="w-full py-4 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 shadow-xl shadow-green-100 transition-all active:scale-[0.98]"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-500 font-semibold">
                        Already have an account? {' '}
                        <Link href="/login" className="text-green-600 font-black hover:underline underline-offset-4">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

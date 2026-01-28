import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import {
  UserRound,
  GraduationCap,
  ShieldCheck,
  Users,
  ArrowRight,
  Star,
  Bell,
  Calendar,
  Heart,
  Sparkles,
  Zap,
  Briefcase
} from 'lucide-react'

export default function LandingPage() {
  const roles = [
    {
      title: 'Teacher',
      icon: <UserRound className="w-10 h-10 text-orange-500" />,
      color: 'bg-orange-50',
      borderColor: 'border-orange-100',
      href: '/signup?role=teacher'
    },
    {
      title: 'Student',
      icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
      color: 'bg-blue-50',
      borderColor: 'border-blue-100',
      href: '/signup?role=student'
    },
    {
      title: 'Parent',
      icon: <Users className="w-10 h-10 text-pink-500" />,
      color: 'bg-pink-50',
      borderColor: 'border-pink-100',
      href: '/signup?role=parent'
    },
    {
      title: 'TPO Officer',
      icon: <Briefcase className="w-10 h-10 text-indigo-500" />,
      color: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      href: '/signup?role=tpo'
    },
    {
      title: 'Admin',
      icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
      color: 'bg-purple-50',
      borderColor: 'border-purple-100',
      href: '/signup?role=admin'
    }
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-[#2D336B] leading-tight">
            Where learning <br />
            becomes community
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
            Empowering students and faculty with a seamless management experience.
            <span className="block mt-2 text-purple-600 font-bold decoration-2 underline-offset-4 underline">
              Designed for the modern campus.
            </span>
          </p>

          <div className="pt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-8">Get started as a...</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {roles.map((role) => (
                <Link
                  key={role.title}
                  href={role.href}
                  className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 ${role.borderColor} ${role.color} transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-100 cursor-pointer`}
                >
                  <div className="mb-4 transform transition-transform group-hover:scale-110">
                    {role.icon}
                  </div>
                  <span className="text-lg font-bold text-gray-700">{role.title}</span>
                  <div className="mt-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-20 flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-500 font-semibold mb-12">Trusted by 500+ Institutions</p>

            {/* Scattered Image Collage Section */}
            <div className="relative w-full max-w-6xl mx-auto py-20 px-4 overflow-hidden lg:overflow-visible">
              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-[#2D336B] max-w-md leading-tight mb-8">
                  Keeping students, faculty, and campus connected
                </h3>
              </div>

              {/* Scattered Images */}
              <div className="relative h-[400px] md:h-[500px] w-full">
                {/* Image 1 - Top Left */}
                <div className="absolute top-0 left-[5%] md:left-[10%] w-40 md:w-56 h-32 md:h-44 rounded-4xl overflow-hidden shadow-2xl -rotate-12 transition-transform hover:rotate-0 hover:scale-110 duration-500 border-4 border-white">
                  <Image src="/college_life_1.png" alt="College Life" fill className="object-cover" />
                </div>

                {/* Image 2 - Top Right */}
                <div className="absolute top-4 right-[5%] md:right-[12%] w-44 md:w-64 h-36 md:h-52 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-8 transition-transform hover:rotate-0 hover:scale-110 duration-500 border-4 border-white">
                  <Image src="/college_life_2.png" alt="Library" fill className="object-cover" />
                </div>

                {/* Image 3 - Bottom Left (Reusing Image 2) */}
                <div className="absolute bottom-10 left-[2%] md:left-[5%] w-36 md:w-48 h-28 md:h-40 rounded-4xl overflow-hidden shadow-2xl rotate-15 transition-transform hover:rotate-0 hover:scale-110 duration-500 border-4 border-white hidden sm:block">
                  <Image src="/college_life_2.png" alt="Meeting" fill className="object-cover" />
                </div>

                {/* Image 4 - Bottom Right (Reusing Image 1) */}
                <div className="absolute bottom-4 right-[2%] md:right-[8%] w-40 md:w-56 h-32 md:h-44 rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-10 transition-transform hover:rotate-0 hover:scale-110 duration-500 border-4 border-white hidden sm:block">
                  <Image src="/college_life_1.png" alt="Study Session" fill className="object-cover" />
                </div>

                {/* Image 5 - Middle Bottom */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-48 md:w-72 h-36 md:h-52 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 hover:scale-110 duration-500 border-4 border-white z-20">
                  <Image src="/college_life_2.png" alt="Lecture" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Stay Connected Section */}
            <div className="relative py-32 grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto px-6">
              {/* Left Side: Chat Illustration */}
              <div className="relative h-[450px] flex items-center justify-center translate-x-[-20px]">
                {/* Main Blue Bubble */}
                <div className="absolute w-[460px] h-[340px] bg-sky-100 rounded-[80px] opacity-60"></div>

                {/* Chat Bubbles */}
                <div className="relative z-10 w-full max-w-lg space-y-6">
                  {/* Bubble 1 */}
                  <div className="flex gap-4 items-end animate-in slide-in-from-left duration-700">
                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden shrink-0">
                      <Image src="/mascot.png" alt="User" width={48} height={48} className="object-cover" />
                    </div>
                    <div className="bg-white p-6 rounded-[32px] rounded-bl-none shadow-xl border border-gray-50 max-w-[280px]">
                      <p className="text-xs font-bold text-gray-400 mb-1">Marty • Student's Parent</p>
                      <p className="text-sm font-bold text-gray-700 leading-tight">
                        Our course presentation is ready! ✨ It'll probably come out great today!
                      </p>
                      <p className="text-[10px] text-purple-600 font-bold mt-2">✨ Translated from Spanish</p>
                    </div>
                  </div>

                  {/* Bubble 2 (Right) */}
                  <div className="flex flex-row-reverse gap-4 items-end animate-in slide-in-from-right duration-700 delay-300">
                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden shrink-0">
                      <Image src="/mascot.png" alt="User" width={48} height={48} className="object-cover bg-blue-50" />
                    </div>
                    <div className="bg-blue-600 p-6 rounded-[32px] rounded-br-none shadow-xl max-w-[280px] text-white">
                      <p className="text-sm font-bold leading-tight">
                        Your project rocked the presentation today! 🚀
                      </p>
                      <p className="text-[10px] font-bold opacity-70 mt-2 text-right">Read 10:20 AM</p>
                    </div>
                  </div>

                  {/* Bubble 3 */}
                  <div className="flex gap-4 items-end animate-in slide-in-from-left duration-700 delay-500">
                    <div className="bg-white p-6 rounded-[32px] rounded-bl-none shadow-xl border border-gray-50 max-w-[240px] ml-16">
                      <p className="text-xs font-bold text-gray-400 mb-1">Dr. Smith • Professor</p>
                      <p className="text-sm font-bold text-gray-700 leading-tight">
                        We're so proud! You practiced a ton. 🎓
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative floating icons */}
                <div className="absolute top-10 right-20 bg-yellow-400 p-2 rounded-full shadow-lg animate-bounce duration-3000">
                  <Bell className="w-4 h-4 text-white fill-white" />
                </div>
              </div>

              {/* Right Side: Text */}
              <div className="space-y-6 lg:pl-10">
                <div className="w-20 h-20 bg-[#00A5F5] rounded-full flex items-center justify-center shadow-xl shadow-blue-100">
                  <div className="relative flex gap-1">
                    <div className="w-8 h-8 rounded-full border-4 border-white"></div>
                    <div className="w-8 h-8 rounded-full border-4 border-white absolute -right-2"></div>
                  </div>
                </div>
                <h2 className="text-5xl font-black text-[#2D336B] leading-[1.1]">
                  Stay connected— <br /> instantly
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  Messages make it easy to communicate with teachers, families and staff anytime, anywhere—and are automatically translated into more than 35 languages 🌎
                </p>
              </div>

              {/* Connecting Wavy Line (SVG) */}
              <svg className="absolute lg:left-1/2 bottom-[-100px] -translate-x-1/2 hidden lg:block" width="400" height="200" viewBox="0 0 400 200" fill="none">
                <path d="M0 50C100 50 100 150 200 150C300 150 300 50 400 50" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 12" />
              </svg>
            </div>

            {/* Window into their World Section */}
            <div className="relative py-32 grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto px-6 mt-20">
              {/* Left Side: Text */}
              <div className="space-y-6 lg:pr-10 order-2 lg:order-1">
                <div className="w-20 h-20 bg-[#FF9F00] rounded-full flex items-center justify-center shadow-xl shadow-orange-100">
                  <div className="grid grid-cols-2 gap-1.5 p-1.5 border-4 border-white rounded-2xl">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h2 className="text-5xl font-black text-[#2D336B] leading-[1.1]">
                  Offer a window <br /> into their world
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  With Stories, teachers can securely share photos, videos and updates on a private feed so parents can see the classroom magic for themselves ✨
                </p>
              </div>

              {/* Right Side: Stories Cards Illustration */}
              <div className="relative h-[550px] flex items-center justify-center order-1 lg:order-2">
                <div className="absolute w-[460px] h-[340px] bg-orange-50 rounded-[80px] opacity-60"></div>

                {/* Story Cards */}
                <div className="relative z-10 w-full max-w-md group">
                  {/* Card 1 (Bottom Left) */}
                  <div className="absolute bottom-0 left-[-40px] w-[280px] bg-white p-4 rounded-[32px] shadow-2xl border border-gray-50 -rotate-6 transition-transform hover:rotate-0 hover:scale-105 duration-500 z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <Image src="/mascot.png" alt="Avatar" width={40} height={40} className="rounded-full bg-pink-50" />
                      <div>
                        <p className="text-xs font-black text-gray-800">Ms. Jessica Zhou</p>
                        <p className="text-[10px] font-bold text-gray-400">Semester II</p>
                      </div>
                    </div>
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3">
                      <Image src="/art.png" alt="Art Class" fill className="object-cover" />
                    </div>
                    <p className="text-[13px] font-bold text-gray-700 leading-tight mb-2">Learning about high-fidelity design!</p>
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="flex items-center gap-1 text-[10px] font-bold">❤️ 8</span>
                      <span className="flex items-center gap-1 text-[10px] font-bold">💬 6</span>
                      <span className="flex items-center gap-1 text-[10px] font-bold">👁️ 23</span>
                    </div>
                  </div>

                  {/* Card 2 (Main/Top Right) */}
                  <div className="absolute top-0 right-[-20px] w-[320px] bg-white p-5 rounded-[40px] shadow-2xl shadow-orange-100 border border-gray-50 rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-500 z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <Image src="/mascot.png" alt="Avatar" width={48} height={48} className="rounded-full bg-blue-50" />
                      <div>
                        <p className="text-sm font-black text-gray-800">Prof. Griffin</p>
                        <p className="text-[11px] font-bold text-gray-400">Lab Assistant</p>
                      </div>
                    </div>
                    <div className="relative h-56 w-full rounded-3xl overflow-hidden mb-4">
                      <Image src="/science.png" alt="Science Lab" fill className="object-cover" />
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-black text-gray-800">Today's lab was electric! ⚡</p>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-[10px] font-black rounded-lg">BIOLOGY</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 pt-2 border-t border-gray-50">
                      <span className="flex items-center gap-1 text-[11px] font-bold">❤️ 18</span>
                      <span className="flex items-center gap-1 text-[11px] font-bold">💬 3</span>
                      <span className="flex items-center gap-1 text-[11px] font-bold">👁️ 31</span>
                    </div>
                  </div>

                  {/* Multi-Student Badge */}
                  <div className="absolute bottom-[-60px] right-0 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-4 border border-gray-50 z-30 animate-pulse">
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-800">Eagles Technical University</p>
                      <div className="flex -space-x-2 mt-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                            <Image src="/mascot.png" alt="user" width={24} height={24} />
                          </div>
                        ))}
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[8px] font-bold text-gray-400">+47</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 10 Features Section for Judges */}
            <div className="relative py-32 bg-[#F8F9FF] rounded-[5rem] w-full max-w-7xl mx-auto px-10 mt-20 border border-gray-100 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Sparkles className="w-64 h-64 text-[#2D336B]" />
              </div>

              <div className="text-center space-y-4 mb-20 relative z-10">
                <div className="inline-block px-6 py-2 bg-purple-100 text-purple-600 rounded-full text-xs font-black tracking-widest uppercase">
                  Judge's Choice 🏆
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-[#2D336B]">The Power House <br /> <span className="text-purple-600">Top 10 Features</span></h2>
                <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto italic">Engineered to transform the modern campus experience.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { title: 'Role-Based Hubs', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
                  { title: 'AI Placement Match', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  { title: 'TPO Control Center', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50' },
                  { title: '1-on-1 Consultations', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { title: 'Predictive Analytics', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
                  { title: 'Smart Notices', icon: Bell, color: 'text-orange-500', bg: 'bg-orange-50' },
                  { title: 'Parent Portal', icon: UserRound, color: 'text-sky-600', bg: 'bg-sky-50' },
                  { title: 'Hall of Fame', icon: Star, icon2: GraduationCap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { title: 'Skill Matrix', icon: ShieldCheck, color: 'text-teal-600', bg: 'bg-teal-50' },
                  { title: 'Glassmorphism UI', icon: Sparkles, color: 'text-pink-600', bg: 'bg-pink-50' },
                ].map((feat, idx) => (
                  <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-[3rem] hover:border-purple-200 hover:shadow-xl transition-all text-center">
                    <div className={`w-14 h-14 ${feat.bg} ${feat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                      <feat.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-sm font-black text-[#2D336B] leading-[1.3]">{feat.title}</h4>
                    <div className="mt-4 h-1 w-8 bg-gray-100 rounded-full mx-auto group-hover:w-16 group-hover:bg-purple-300 transition-all"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keep up-to-date Section */}
            <div className="relative py-32 grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto px-6 mt-20">
              {/* Left Side: Calendar Illustration */}
              <div className="relative h-[450px] flex items-center justify-center translate-x-[-40px]">
                <div className="absolute w-[460px] h-[340px] bg-purple-50 rounded-[80px] opacity-60"></div>

                {/* Event Cards */}
                <div className="relative z-10 w-full max-w-md">
                  {/* Card 1 (Top Left) */}
                  <div className="absolute top-[-40px] left-0 w-[240px] bg-white p-5 rounded-[32px] shadow-2xl border border-gray-50 rotate-[-8deg] z-10">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Thursday, Sept 20</p>
                    <h4 className="text-xl font-black text-[#2D336B] leading-none mb-1">BINGO for Books</h4>
                    <p className="text-xs font-bold text-gray-500">11am - 2pm</p>
                  </div>

                  {/* Card 2 (Bottom Left) */}
                  <div className="absolute bottom-[-20px] left-10 w-[280px] bg-white p-6 rounded-[40px] shadow-2xl shadow-purple-100 border border-gray-50 -rotate-2 z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <Image src="/mascot.png" alt="Staff" width={44} height={44} className="rounded-full bg-orange-50" />
                      <div>
                        <p className="text-xs font-black text-gray-800">Mrs. Unicorn</p>
                        <p className="text-[10px] font-bold text-gray-400">2nd Grade</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-gray-700 leading-tight mb-3">
                      Come for fun fitness classes, healthy living sessions, and a dance party! 💃
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                      <Image src="/mascot.png" alt="Parent" width={32} height={32} className="rounded-full bg-blue-50" />
                      <p className="text-[10px] font-bold text-gray-400">Sarah Jackson is helping out!</p>
                    </div>
                  </div>

                  {/* Card 3 (Timeline/Right) */}
                  <div className="absolute top-[-20px] right-[-30px] w-[180px] bg-white p-4 rounded-[32px] shadow-xl border border-gray-50 rotate-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="text-center shrink-0">
                        <p className="text-[10px] font-black text-purple-600 leading-none">9</p>
                        <p className="text-[8px] font-black text-gray-400 uppercase">Sep</p>
                      </div>
                      <p className="text-[10px] font-bold text-gray-700">BINGO for Books</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-center shrink-0">
                        <p className="text-[10px] font-black text-purple-600 leading-none">12</p>
                        <p className="text-[8px] font-black text-gray-400 uppercase">Oct</p>
                      </div>
                      <p className="text-[10px] font-bold text-gray-700">Aquarium Field Trip</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-center shrink-0">
                        <p className="text-[10px] font-black text-purple-600 leading-none">23</p>
                        <p className="text-[8px] font-black text-gray-400 uppercase">Nov</p>
                      </div>
                      <p className="text-[10px] font-bold text-gray-700">Healthy Living Fair</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Text */}
              <div className="space-y-6 lg:pl-10">
                <div className="w-20 h-20 bg-[#824CF5] rounded-full flex items-center justify-center shadow-xl shadow-purple-100">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-black text-[#2D336B] leading-[1.1]">
                  Keep everyone <br /> up-to-date
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  Adding Events to the calendar is easy and keeps everyone in the loop with automatic reminders 🗓️
                </p>
              </div>

              <svg className="absolute lg:left-1/4 bottom-[-100px] -translate-x-1/2 hidden lg:block" width="400" height="200" viewBox="0 0 400 200" fill="none">
                <path d="M0 150C100 150 100 50 200 50C300 50 300 150 400 150" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 12" />
              </svg>
            </div>

            {/* Help them Grow Section */}
            <div className="relative py-32 grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto px-6 mt-20">
              {/* Left Side: Text */}
              <div className="space-y-6 lg:pr-10 order-2 lg:order-1">
                <div className="w-20 h-20 bg-[#7ED321] rounded-full flex items-center justify-center shadow-xl shadow-green-100">
                  <UserRound className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-black text-[#2D336B] leading-[1.1]">
                  Help them grow <br /> their own way
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  CollegeHub helps teachers and families collaborate to support social-emotional learning with Points and Big Ideas—and gives students a voice of their own with Portfolios 🎨
                </p>
              </div>

              {/* Right Side: Growth Badges Illustration */}
              <div className="relative h-[450px] flex items-center justify-center order-1 lg:order-2">
                <div className="absolute w-[460px] h-[340px] bg-green-50 rounded-[80px] opacity-60"></div>

                {/* Badges Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-6 -rotate-5">
                  <div className="bg-white p-4 rounded-4xl shadow-xl border border-gray-50 flex flex-col items-center gap-2 transform -translate-y-8 animate-float">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">❤️</div>
                    <p className="text-xs font-black text-gray-800">Helping Others</p>
                  </div>
                  <div className="bg-white p-4 rounded-4xl shadow-xl border border-gray-50 flex flex-col items-center gap-2 transform translate-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">👍</div>
                    <p className="text-xs font-black text-gray-800">Staying Positive</p>
                  </div>
                  <div className="bg-white p-4 rounded-4xl shadow-xl border border-gray-50 flex flex-col items-center gap-2 transform -translate-x-8">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">🧼</div>
                    <p className="text-xs font-black text-gray-800">Research Pro</p>
                  </div>
                  <div className="bg-white p-4 rounded-4xl shadow-xl border border-gray-50 flex flex-col items-center gap-2 transform translate-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">🎒</div>
                    <p className="text-xs font-black text-gray-800">Ready for Lab</p>
                  </div>
                </div>

                {/* Center Mascot */}
                <div className="absolute z-20 w-44 h-44 animate-float">
                  <Image src="/mascot.png" alt="Mascot" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div className="relative py-32 text-center space-y-16 max-w-7xl mx-auto px-6 overflow-hidden">
              <div className="space-y-4">
                <div className="flex justify-center mb-4">
                  <Heart className="w-8 h-8 text-purple-200 fill-purple-200" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-[#2D336B]">Our community is our <br /> superpower</h2>
              </div>

              {/* Grid of Community Cards (Using existing images) */}
              <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
                {[
                  { type: 'image', src: '/college_life_1.png', size: 'h-64' },
                  { type: 'text', title: 'Julissa R.', desc: 'Love using CollegeHub to practice mindfulness! What a great way to start the day.', avatar: 'bg-blue-100' },
                  { type: 'image', src: '/science.png', size: 'h-80' },
                  { type: 'image', src: '/college_life_2.png', size: 'h-48' },
                  { type: 'text', title: 'Mrs. W.', desc: 'Digital stories changed how I connect with my students and their families.', avatar: 'bg-green-100' },
                  { type: 'image', src: '/art.png', size: 'h-64' },
                  { type: 'text', title: 'Jennifer H. Ed.D', desc: 'The most comprehensive campus tool I have ever used in my 20 year career.', avatar: 'bg-purple-100' },
                  { type: 'image', src: '/college_life_1.png', size: 'h-52' },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className={`break-inside-avoid bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-50 transition-transform hover:scale-[1.02] duration-300 ${card.type === 'text' ? 'flex flex-col gap-4' : ''}`}
                  >
                    {card.type === 'image' ? (
                      <div className={`relative ${card.size} w-full rounded-[1.8rem] overflow-hidden`}>
                        <Image src={card.src!} alt="Community" fill className="object-cover" />
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${card.avatar} flex items-center justify-center overflow-hidden`}>
                            <Image src="/mascot.png" alt="User" width={40} height={40} />
                          </div>
                          <span className="font-black text-gray-800 text-sm">{card.title}</span>
                        </div>
                        <p className="text-[13px] font-bold text-gray-500 leading-relaxed text-left">
                          "{card.desc}"
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <button className="px-10 py-5 bg-[#824CF5] text-white font-black rounded-full hover:bg-purple-700 shadow-2xl shadow-purple-200 transition-all active:scale-95 text-xl">
                See more smiles
              </button>
            </div>

            {/* Final CTA / Footer Top */}
            <div className="relative pt-32 pb-16 text-center space-y-16 w-full">
              <div className="space-y-6 px-6">
                <h2 className="text-5xl md:text-6xl font-black text-[#2D336B]">Privacy first—always</h2>
                <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto">Find out how we protect our community of teachers, families, and students.</p>
                <Link href="#" className="inline-block text-xl text-purple-600 font-black border-b-4 border-purple-100 hover:border-purple-600 transition-all pb-1">CollegeHub Privacy Center</Link>
              </div>

              <div className="relative w-full h-[500px] md:h-[600px] rounded-[4rem] overflow-hidden group shadow-2xl">
                <Image src="/college_life_2.png" alt="Banner" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#2D336B]/50 flex flex-col items-center justify-center text-white space-y-10 backdrop-blur-[1px]">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tight">Let's get growing</h2>
                  <button className="px-14 py-6 bg-[#824CF5] text-white font-black rounded-full hover:bg-purple-700 shadow-[0_20px_50px_rgba(130,76,245,0.4)] transition-all hover:scale-105 active:scale-95 text-2xl">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            {/* Real Footer */}
            <footer className="bg-[#2D336B] text-white py-32 px-10 md:px-20 rounded-t-[5rem] w-full">
              <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16">
                <div className="col-span-2 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 p-3 rounded-2xl">
                      <GraduationCap className="text-white w-8 h-8" />
                    </div>
                    <span className="text-4xl font-black tracking-tighter">CollegeHub</span>
                  </div>
                  <p className="text-gray-400 font-bold max-w-sm text-lg leading-relaxed">
                    Connecting campuses, empowering classrooms, and building the future of education together.
                  </p>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer hover:-translate-y-1">
                        <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  { title: 'Company', links: ['About us', 'Press', 'Careers', 'Engineering', 'Accessibility'] },
                  { title: 'Resources', links: ['Big Ideas', 'Points', 'Resources', 'Training', 'Remote Learning'] },
                  { title: 'Support', links: ['Help Center', 'Contact us', 'Cookie Settings', 'Transparency Report', 'Privacy and Security'] },
                  { title: 'Community', links: ['Teacher Community', 'Facebook', 'Twitter', 'Instagram', 'Wall of Love'] },
                ].map((col, i) => (
                  <div key={i} className="space-y-6">
                    <h4 className="font-black text-gray-500 uppercase text-sm tracking-[0.2em]">{col.title}</h4>
                    <ul className="space-y-4">
                      {col.links.map(link => (
                        <li key={link} className="text-lg font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">{link}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="max-w-[90rem] mx-auto mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-10">
                <p className="text-gray-500 font-bold text-base">© {new Date().getFullYear()} CollegeHub Inc. All rights reserved.</p>
                <div className="flex gap-10 text-base font-bold text-gray-500">
                  <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>

      {/* Background patterns */}
      <svg className="fixed top-0 left-0 -z-10 opacity-[0.03]" width="100%" height="100%">
        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#000" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>

      {/* Decorative background elements */}
      <div className="fixed bottom-0 left-0 -z-10 w-64 h-64 bg-green-200 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      <div className="fixed top-0 right-0 -z-10 w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
      <div className="fixed top-1/2 left-1/2 -z-10 w-80 h-80 bg-orange-100 rounded-full blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'

export default function SplashScreen() {
  const router = useRouter()

  return (
    <main
      onClick={() => router.push('/dashboard/dashboard')}
      role="button"
      aria-label="Enter application"
      className="
        relative flex h-screen w-full cursor-pointer items-center justify-center
        overflow-hidden bg-white
      "
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 animate-float-slow rounded-full bg-purple-400/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-float-fast rounded-full bg-purple-600/20 blur-3xl" />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center text-center">
        {/* Logo / Brand */}
        <h1 className="animate-logo-pulse text-5xl font-extrabold tracking-tight text-purple-700 md:text-6xl">
          Customer<span className="text-purple-500">IQ</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-md text-sm font-medium text-gray-500 md:text-base">
          Customer intelligence, unified.
        </p>

        {/* Loading Indicator */}
        <div className="mt-10 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-600 [animation-delay:0ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-600 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-600 [animation-delay:300ms]" />
        </div>

        <span className="mt-4 text-xs uppercase tracking-widest text-gray-400">
          Tap anywhere to continue
        </span>
      </section>
    </main>
  )
}

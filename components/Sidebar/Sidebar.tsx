'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LayoutDashboard, Users, User, BarChart3, Shield, Settings, Mail, Brain, FileText } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Dashboard', href: '/dashboard/dashboard', icon: LayoutDashboard },
  { name: 'Sources', href: '/dashboard/sources', icon: BarChart3 },
  { name: 'Audiences', href: '/dashboard/audiences', icon: Users },
  { name: 'Profiles', href: '/dashboard/profiles', icon: User },
  { name: 'Acquisition', href: '/dashboard/acquisition', icon: BarChart3 },
  { name: 'Retention', href: '/dashboard/retention', icon: Shield },
  { name: 'Automations', href: '/dashboard/automations', icon: Settings },
  { name: 'Campaigns', href: '/dashboard/campaigns', icon: Mail },
  { name: 'Intelligence', href: '/dashboard/intelligence', icon: Brain },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-white/80 backdrop-blur border p-2 shadow-sm md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transition-transform duration-200 ease-out',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Brand */}
          <div className="px-6 py-5">
            <h1 className="text-lg font-semibold tracking-tight">
              Customer<span className="text-purple-600">IQ</span>
            </h1>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 space-y-1">
            {navItems.map(({ name, href, icon: Icon }) => {
              const active = pathname === href

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                    active
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  )}
                >
                  <Icon
                    size={18}
                    className={cn(
                      'transition-colors',
                      active ? 'text-purple-600' : 'text-zinc-500 group-hover:text-zinc-700'
                    )}
                  />
                  {name}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 text-xs text-zinc-400">
            Version 1.0.0
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

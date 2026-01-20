'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'

export default function DashboardPage() {
  /* =======================
     METRICS
  ======================= */
  const metrics = [
    {
      label: 'Total Revenue',
      value: '$1.24M',
      change: '+12.5%',
      icon: TrendingUp,
      tone: 'text-emerald-600',
    },
    {
      label: 'Active Users',
      value: '8,420',
      change: '+3.2%',
      icon: Users,
      tone: 'text-sky-600',
    },
    {
      label: 'Churn Rate',
      value: '2.3%',
      change: '-0.5%',
      icon: AlertCircle,
      tone: 'text-amber-600',
    },
    {
      label: 'AI Accuracy',
      value: '94.2%',
      change: 'Stable',
      icon: Zap,
      tone: 'text-violet-600',
    },
  ]

  /* =======================
     PERFORMANCE DATA
  ======================= */
  const revenueData = [
    { day: 'Mon', revenue: 12000 },
    { day: 'Tue', revenue: 14500 },
    { day: 'Wed', revenue: 13800 },
    { day: 'Thu', revenue: 16000 },
    { day: 'Fri', revenue: 17200 },
    { day: 'Sat', revenue: 16800 },
    { day: 'Sun', revenue: 18500 },
  ]

  const activityData = [
    { time: '00–06', users: 120 },
    { time: '06–12', users: 420 },
    { time: '12–18', users: 680 },
    { time: '18–24', users: 530 },
  ]

  /* =======================
     GEO DATA
  ======================= */
  const geoData = [
    { region: 'Harare', customers: 3420 },
    { region: 'Bulawayo', customers: 1840 },
    { region: 'Gweru', customers: 960 },
    { region: 'Mutare', customers: 740 },
    { region: 'Masvingo', customers: 460 },
  ]

  const totalCustomers = geoData.reduce(
    (sum, r) => sum + r.customers,
    0
  )

  /* =======================
     ALERTS
  ======================= */
  const alerts = [
    {
      priority: 'High',
      message: 'API latency spike detected in Sources module',
      time: '2 min ago',
    },
    {
      priority: 'Medium',
      message: 'Churn model accuracy dropped to 92%',
      time: '15 min ago',
    },
    {
      priority: 'Medium',
      message: 'Campaign “Q1 Push” reached 100k recipients',
      time: '1 hour ago',
    },
    {
      priority: 'Low',
      message: 'Data sync completed for Mining ERP',
      time: '3 hours ago',
    },
    {
      priority: 'Low',
      message: 'Weekly retention report scheduled',
      time: '5 hours ago',
    },
  ]

  return (
    <section className="space-y-10">
      {/* ===================== HEADER ===================== */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Executive Overview
        </h1>
        <p className="text-sm text-zinc-500">
          Real-time system health and customer intelligence
        </p>
      </header>

      {/* ===================== METRICS ===================== */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card
              key={index}
              className="border border-zinc-200/60 bg-white/70 backdrop-blur-sm hover:shadow-sm transition"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">
                    {metric.label}
                  </span>
                  <Icon className={`h-5 w-5 ${metric.tone}`} />
                </div>

                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-zinc-900">
                    {metric.value}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {metric.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* ===================== ANALYTICS ===================== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Revenue Velocity */}
        <Card className="border border-zinc-200/60">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Revenue Velocity
            </CardTitle>
            <CardDescription>
              7-day performance trend
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Activity Distribution */}
        <Card className="border border-zinc-200/60">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Activity Distribution
            </CardTitle>
            <CardDescription>
              Customer engagement by time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ===================== CUSTOMER GEOGRAPHIC DISTRIBUTION ===================== */}
      <Card className="border border-zinc-200/60">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Customer Geographic Distribution
          </CardTitle>
          <CardDescription>
            Active customers by region
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {geoData.map((region, index) => {
            const percentage = Math.round(
              (region.customers / totalCustomers) * 100
            )

            return (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-700">
                    {region.region}
                  </span>
                  <span className="text-zinc-500">
                    {region.customers.toLocaleString()} ({percentage}%)
                  </span>
                </div>

                <div className="h-2 w-full rounded-full bg-zinc-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-zinc-900 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* ===================== ALERTS ===================== */}
      <Card className="border border-zinc-200/60">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Operational Alerts
          </CardTitle>
          <CardDescription>
            Recent system notifications
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-zinc-50 transition"
            >
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className={`
                    ${alert.priority === 'High' && 'border-red-300 text-red-700 bg-red-50'}
                    ${alert.priority === 'Medium' && 'border-amber-300 text-amber-700 bg-amber-50'}
                    ${alert.priority === 'Low' && 'border-sky-300 text-sky-700 bg-sky-50'}
                  `}
                >
                  {alert.priority}
                </Badge>
                <span className="text-sm text-zinc-700">
                  {alert.message}
                </span>
              </div>

              <span className="text-xs text-zinc-400 whitespace-nowrap">
                {alert.time}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

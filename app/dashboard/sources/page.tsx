'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus } from 'lucide-react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

export default function SourcesPage() {
  /* =======================
     SOURCES
  ======================= */
  const sources = [
    {
      id: 1,
      name: 'Banking Core',
      status: 'Live',
      lastSync: '2 min ago',
      volume: 234.5,
      type: 'Transactional',
    },
    {
      id: 2,
      name: 'Mining ERP',
      status: 'Live',
      lastSync: '5 min ago',
      volume: 156.2,
      type: 'Operational',
    },
    {
      id: 3,
      name: 'Social APIs',
      status: 'Offline',
      lastSync: '2 hours ago',
      volume: 45.8,
      type: 'Behavioral',
    },
    {
      id: 4,
      name: 'E-Commerce Platform',
      status: 'Live',
      lastSync: '1 min ago',
      volume: 89.3,
      type: 'Commerce',
    },
  ]

  /* =======================
     INGESTION HEALTH DATA
  ======================= */
  const ingestionHealth = [
    { time: '00:00', latency: 220, throughput: 38 },
    { time: '01:00', latency: 210, throughput: 42 },
    { time: '02:00', latency: 260, throughput: 34 },
    { time: '03:00', latency: 240, throughput: 36 },
    { time: '04:00', latency: 280, throughput: 31 },
    { time: '05:00', latency: 230, throughput: 40 },
  ]

  return (
    <section className="space-y-10">
      {/* ===================== HEADER ===================== */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Data Sources
          </h1>
          <p className="text-sm text-zinc-500">
            Connected systems and ingestion health
          </p>
        </div>

        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" />
          Add source
        </Button>
      </header>

      {/* ===================== INGESTION HEALTH ===================== */}
      <Card className="border border-zinc-200/60">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Ingestion Health
          </CardTitle>
          <CardDescription>
            Data latency and throughput trends
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Latency */}
            <div className="h-48">
              <p className="mb-2 text-sm font-medium text-zinc-600">
                Latency (ms)
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ingestionHealth}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="latency"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Throughput */}
            <div className="h-48">
              <p className="mb-2 text-sm font-medium text-zinc-600">
                Throughput (MB/min)
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ingestionHealth}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="throughput" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===================== SOURCES TABLE ===================== */}
      <Card className="border border-zinc-200/60">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Connected Sources
          </CardTitle>
          <CardDescription>
            Active and inactive integrations
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-zinc-200">
                <TableHead>Source</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Sync</TableHead>
                <TableHead className="text-right">
                  Volume (MB)
                </TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>

            <TableBody>
              {sources.map((source) => (
                <TableRow
                  key={source.id}
                  className="hover:bg-zinc-50 transition"
                >
                  <TableCell className="font-medium text-zinc-900">
                    {source.name}
                  </TableCell>

                  <TableCell className="text-sm text-zinc-500">
                    {source.type}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        source.status === 'Live'
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                          : 'border-red-300 bg-red-50 text-red-700'
                      }
                    >
                      {source.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-sm text-zinc-500">
                    {source.lastSync}
                  </TableCell>

                  <TableCell className="text-sm text-zinc-500 text-right">
                    {source.volume.toFixed(1)}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      Configure
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

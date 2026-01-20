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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Folder } from 'lucide-react'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

export default function AudiencesPage() {
  const segments = [
    {
      id: 1,
      name: 'Civil Servants',
      size: 2340,
      avgValue: 1250,
      risk: 'Low',
    },
    {
      id: 2,
      name: 'VIPs',
      size: 450,
      avgValue: 5200,
      risk: 'Medium',
    },
    {
      id: 3,
      name: 'Young Professionals',
      size: 3120,
      avgValue: 2100,
      risk: 'High',
    },
    {
      id: 4,
      name: 'Small Business Owners',
      size: 1890,
      avgValue: 3400,
      risk: 'Medium',
    },
  ]

  const filters = [
    'Demographics',
    'Behavior',
    'Risk Profile',
    'Custom Segments',
  ]

  /**
   * Fake overlap dataset (demo data)
   * Represents how much each segment overlaps with others.
   */
  const overlapData = [
    {
      segment: 'Civil Servants',
      VIPs: 120,
      YoungProfessionals: 340,
      SmallBusiness: 210,
    },
    {
      segment: 'VIPs',
      CivilServants: 90,
      YoungProfessionals: 140,
      SmallBusiness: 110,
    },
    {
      segment: 'Young Pros',
      CivilServants: 260,
      VIPs: 160,
      SmallBusiness: 300,
    },
    {
      segment: 'Small Business',
      CivilServants: 190,
      VIPs: 80,
      YoungProfessionals: 240,
    },
  ]

  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Audiences
        </h1>
        <p className="text-sm text-zinc-500">
          Customer segmentation and risk profiling
        </p>
      </header>

      {/* Split View */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Filters */}
        <Card className="border border-zinc-200/60">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Segmentation
            </CardTitle>
            <CardDescription>
              Filter and group audiences
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-1">
            {filters.map((filter) => (
              <button
                key={filter}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition"
              >
                <Folder className="h-4 w-4 text-zinc-400" />
                {filter}
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Segment Table */}
        <Card className="border border-zinc-200/60 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Segment Overview
            </CardTitle>
            <CardDescription>
              Active customer segments and value distribution
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zinc-200">
                  <TableHead>Segment</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Avg. Value</TableHead>
                  <TableHead>Risk</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {segments.map((segment) => (
                  <TableRow
                    key={segment.id}
                    className="hover:bg-zinc-50 transition"
                  >
                    <TableCell className="font-medium text-zinc-900">
                      {segment.name}
                    </TableCell>

                    <TableCell className="text-sm text-zinc-500">
                      {segment.size.toLocaleString()}
                    </TableCell>

                    <TableCell className="text-sm text-zinc-500">
                      ${segment.avgValue.toLocaleString()}
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          segment.risk === 'Low'
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                            : segment.risk === 'Medium'
                            ? 'border-amber-300 bg-amber-50 text-amber-700'
                            : 'border-red-300 bg-red-50 text-red-700'
                        }
                      >
                        {segment.risk}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Overlap Analysis */}
      <Card className="border border-zinc-200/60">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Segment Overlap Analysis
          </CardTitle>
          <CardDescription>
            Visualizing shared customers across segments
          </CardDescription>
        </CardHeader>

        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={overlapData}>
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="VIPs" stackId="a" />
              <Bar dataKey="YoungProfessionals" stackId="a" />
              <Bar dataKey="SmallBusiness" stackId="a" />
              <Bar dataKey="CivilServants" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  )
}

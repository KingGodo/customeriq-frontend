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

export default function SourcesPage() {
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

  return (
    <section className="space-y-10">
      {/* Header */}
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

      {/* Ingestion Health */}
      <Card className="border border-zinc-200/60">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Ingestion Health
          </CardTitle>
          <CardDescription>
            Data latency and throughput overview
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="h-48 rounded-xl bg-zinc-50 flex items-center justify-center">
            <span className="text-sm text-zinc-400">
              Latency & throughput trends
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Sources Table */}
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

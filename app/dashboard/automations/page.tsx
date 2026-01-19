'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AutomationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Workflow Automations
          </h1>
          <p className="text-slate-600">
            Design, deploy, and monitor automated customer workflows
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Create Workflow
        </Button>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-500">Active Workflows</p>
            <p className="text-2xl font-semibold text-slate-900">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-500">Executions (24h)</p>
            <p className="text-2xl font-semibold text-slate-900">1,284</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-500">Success Rate</p>
            <p className="text-2xl font-semibold text-green-600">91%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-500">Paused / Errors</p>
            <p className="text-2xl font-semibold text-amber-600">2</p>
          </CardContent>
        </Card>
      </div>

      {/* Builder Layout */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Triggers */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Triggers</CardTitle>
            <CardDescription>Events that start a workflow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              'Churn Risk > 80%',
              'New Customer Signup',
              'Transaction > $1,000',
              'Account Inactive 30 Days',
            ].map((trigger, idx) => (
              <div
                key={idx}
                className="rounded-md border bg-white p-3 text-sm text-slate-700 shadow-sm hover:bg-slate-50 cursor-move"
                draggable
              >
                {trigger}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Canvas */}
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Workflow Canvas</CardTitle>
            <CardDescription>
              Visual logic builder (example)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-lg border border-red-300 bg-red-50 p-4 min-w-[180px] text-center">
                <p className="text-xs font-semibold text-red-700 mb-1">
                  TRIGGER
                </p>
                <p className="text-sm text-slate-800">
                  Churn Risk &gt; 80%
                </p>
              </div>

              <span className="text-slate-400 text-xl">→</span>

              <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 min-w-[180px] text-center">
                <p className="text-xs font-semibold text-amber-700 mb-1">
                  CONDITION
                </p>
                <p className="text-sm text-slate-800">
                  Customer Segment = VIP
                </p>
              </div>

              <span className="text-slate-400 text-xl">→</span>

              <div className="rounded-lg border border-green-300 bg-green-50 p-4 min-w-[180px] text-center">
                <p className="text-xs font-semibold text-green-700 mb-1">
                  ACTION
                </p>
                <p className="text-sm text-slate-800">
                  Send SMS + Email
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-slate-500">
              Drag triggers and actions here to build custom workflows
            </p>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>What happens next</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              'Send SMS',
              'Send Email',
              'Create Task',
              'Assign Agent',
              'Update Segment',
            ].map((action, idx) => (
              <div
                key={idx}
                className="rounded-md border bg-white p-3 text-sm text-slate-700 shadow-sm hover:bg-slate-50 cursor-move"
                draggable
              >
                {action}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Active Workflows Table */}
      <Card>
        <CardHeader>
          <CardTitle>Deployed Workflows</CardTitle>
          <CardDescription>
            Live automations currently running in production
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Workflow</th>
                  <th className="py-3 text-left">Status</th>
                  <th className="py-3 text-left">Runs (24h)</th>
                  <th className="py-3 text-left">Success</th>
                  <th className="py-3 text-left">Last Updated</th>
                  <th className="py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="py-3 font-medium">
                    VIP Churn Prevention
                  </td>
                  <td className="py-3">
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </td>
                  <td className="py-3">48</td>
                  <td className="py-3">94%</td>
                  <td className="py-3">2 hours ago</td>
                  <td className="py-3">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="py-3 font-medium">
                    New Customer Welcome
                  </td>
                  <td className="py-3">
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </td>
                  <td className="py-3">312</td>
                  <td className="py-3">89%</td>
                  <td className="py-3">Today</td>
                  <td className="py-3">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-3 font-medium">
                    Dormant Account Reactivation
                  </td>
                  <td className="py-3">
                    <Badge className="bg-slate-200 text-slate-800">
                      Paused
                    </Badge>
                  </td>
                  <td className="py-3">0</td>
                  <td className="py-3">82%</td>
                  <td className="py-3">3 days ago</td>
                  <td className="py-3">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

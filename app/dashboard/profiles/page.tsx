'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const customers = [
  {
    id: 'CUST-001',
    name: 'Tendai Moyo',
    email: 'tendai.moyo@finserve.co.zw',
    segment: ['High Value', 'VIP'],
  },
  {
    id: 'CUST-002',
    name: 'Rutendo Chikore',
    email: 'rutendo.chikore@finserve.co.zw',
    segment: ['Growing'],
  },
  {
    id: 'CUST-003',
    name: 'Farai Dube',
    email: 'farai.dube@finserve.co.zw',
    segment: ['Flight Risk'],
  },
  {
    id: 'CUST-004',
    name: 'Blessing Nyathi',
    email: 'blessing.nyathi@finserve.co.zw',
    segment: ['Dormant'],
  },
];

export default function ProfilesPage() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900">
          Customer Intelligence Hub
        </h1>
        <p className="text-slate-600">
          Unified customer profiles and behavioral insights
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT: Customer List */}
        <Card className="col-span-4 border-slate-200">
          <CardHeader>
            <CardTitle>Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Search customers..."
              className="mb-4"
            />

            <div className="space-y-3">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer)}
                  className={`p-4 rounded-lg cursor-pointer border transition ${
                    selectedCustomer.id === customer.id
                      ? 'bg-slate-100 border-slate-300'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <p className="font-medium text-slate-900">
                    {customer.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {customer.email}
                  </p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {customer.segment.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* RIGHT: Customer Profile */}
        <Card className="col-span-8 border-slate-200">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold text-slate-900">
                  {selectedCustomer.name}
                </p>
                <p className="text-sm text-slate-600">
                  {selectedCustomer.email}
                </p>
              </div>
              <Button variant="outline">Manage Profile</Button>
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="ai">AI Insights</TabsTrigger>
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview">
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-slate-600">
                        Lifetime Value
                      </p>
                      <p className="text-2xl font-semibold text-slate-900">
                        $18,450
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-slate-600">
                        Products Used
                      </p>
                      <p className="text-2xl font-semibold text-slate-900">
                        4
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-slate-600">
                        Risk Score
                      </p>
                      <p className="text-2xl font-semibold text-amber-600">
                        Medium
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Transactions */}
              <TabsContent value="transactions">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Date</th>
                        <th className="text-left py-3">Type</th>
                        <th className="text-left py-3">Amount</th>
                        <th className="text-left py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">2024-01-12</td>
                        <td className="py-3">Loan Repayment</td>
                        <td className="py-3">$1,200</td>
                        <td className="py-3">
                          <Badge className="bg-green-100 text-green-800">
                            Successful
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">2023-12-05</td>
                        <td className="py-3">Disbursement</td>
                        <td className="py-3">$5,000</td>
                        <td className="py-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            Completed
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* AI */}
              <TabsContent value="ai">
                <Card className="bg-slate-50 border-slate-200">
                  <CardContent className="p-4 space-y-3">
                    <p className="text-slate-900 font-medium">
                      Predicted Churn Probability
                    </p>
                    <p className="text-2xl font-semibold text-red-600">
                      38%
                    </p>
                    <p className="text-sm text-slate-600">
                      Recommended action: Offer retention incentive or
                      proactive outreach.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

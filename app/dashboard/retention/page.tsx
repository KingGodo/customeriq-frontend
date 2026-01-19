'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function RetentionPage() {
  const atRiskCustomers = [
    {
      id: 1,
      name: 'Tinashe Moyo',
      location: 'Harare',
      churnProb: 91,
      predictedLoss: 4800,
      segment: 'High Value',
      tenure: '4.2 yrs',
      lastActivity: '2 days ago',
      action: 'Immediate Retention',
    },
    {
      id: 2,
      name: 'Ruvimbo Chikore',
      location: 'Bulawayo',
      churnProb: 78,
      predictedLoss: 2600,
      segment: 'SME Owner',
      tenure: '2.1 yrs',
      lastActivity: '9 days ago',
      action: 'Offer Incentive',
    },
    {
      id: 3,
      name: 'Farai Dube',
      location: 'Gweru',
      churnProb: 69,
      predictedLoss: 1900,
      segment: 'Retail Client',
      tenure: '1.4 yrs',
      lastActivity: '14 days ago',
      action: 'Call Follow-up',
    },
    {
      id: 4,
      name: 'Blessing Nyathi',
      location: 'Mutare',
      churnProb: 62,
      predictedLoss: 1400,
      segment: 'Salary Earner',
      tenure: '3.8 yrs',
      lastActivity: '5 days ago',
      action: 'Monitor',
    },
  ];

  const riskDrivers = [
    { name: 'High Transaction Fees', impact: 'Very High' },
    { name: 'Low App Usage Frequency', impact: 'High' },
    { name: 'Slow Support Resolution', impact: 'Medium' },
    { name: 'Loan Rejection History', impact: 'Medium' },
    { name: 'Dormant Savings Account', impact: 'Low' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Retention Intelligence
          </h1>
          <p className="text-slate-600">
            Predict churn risk, prioritize intervention and protect revenue
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export Report</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Run Retention Model
          </Button>
        </div>
      </div>

      {/* Executive KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: 'Customers Monitored', value: '8,420' },
          { label: 'Customers at Risk', value: '124' },
          { label: 'Avg Churn Probability', value: '74%', color: 'text-red-600' },
          { label: 'Revenue at Risk', value: '$186,400' },
          { label: 'Retention Success Rate', value: '68%', color: 'text-green-600' },
          { label: 'Interventions Active', value: '46' },
        ].map((metric, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <p className="text-xs text-slate-500">{metric.label}</p>
              <p className={`text-2xl font-semibold ${metric.color ?? 'text-slate-900'}`}>
                {metric.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Intelligence Panels */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Geographic Risk */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Geographic Churn Risk Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
              🗺️ Heatmap Visualization Placeholder  
              <br />
              Harare • Bulawayo • Gweru • Mutare • Masvingo
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Urban clusters show higher churn probability driven by competition,
              multi-bank usage and digital service expectations.
            </p>
          </CardContent>
        </Card>

        {/* Risk Drivers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Churn Drivers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {riskDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{driver.name}</span>
                <Badge variant="outline">{driver.impact}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Priority Queue */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>At-Risk Customer Priority Queue</CardTitle>
          <Badge variant="secondary">Sorted by Risk</Badge>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-slate-600">
                  <th className="py-3 text-left">Customer</th>
                  <th className="py-3 text-left">Location</th>
                  <th className="py-3 text-left">Risk</th>
                  <th className="py-3 text-left">Revenue</th>
                  <th className="py-3 text-left">Tenure</th>
                  <th className="py-3 text-left">Last Activity</th>
                  <th className="py-3 text-left">Segment</th>
                  <th className="py-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {atRiskCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className={`border-b hover:bg-slate-50 ${
                      customer.churnProb > 85 ? 'bg-red-50/40' : ''
                    }`}
                  >
                    <td className="py-3 font-medium">{customer.name}</td>
                    <td className="py-3">{customer.location}</td>

                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${customer.churnProb}%`,
                              backgroundColor:
                                customer.churnProb > 85
                                  ? '#dc2626'
                                  : customer.churnProb > 70
                                  ? '#f59e0b'
                                  : '#10b981',
                            }}
                          />
                        </div>
                        <span className="text-xs font-medium">
                          {customer.churnProb}%
                        </span>
                      </div>
                    </td>

                    <td className="py-3">
                      ${customer.predictedLoss.toLocaleString()}
                    </td>

                    <td className="py-3">{customer.tenure}</td>
                    <td className="py-3">{customer.lastActivity}</td>

                    <td className="py-3">
                      <Badge variant="outline">{customer.segment}</Badge>
                    </td>

                    <td className="py-3 flex gap-2">
                      <Button size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700">
                        Intervene
                      </Button>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

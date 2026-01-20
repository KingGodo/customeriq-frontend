'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AcquisitionPage() {
  /* ===================== DATA ===================== */
  const geoData = [
    { region: 'Harare', customers: 3420 },
    { region: 'Bulawayo', customers: 1840 },
    { region: 'Gweru', customers: 960 },
    { region: 'Mutare', customers: 740 },
    { region: 'Masvingo', customers: 460 },
  ];

  const totalCustomers = geoData.reduce(
    (sum, r) => sum + r.customers,
    0
  );

  const strategies = [
    {
      title: 'Double Down on Referrals',
      impact: 'High',
      description:
        'Customer referrals show the lowest CAC and highest conversion rate. Introduce tiered referral rewards and WhatsApp sharing links.',
    },
    {
      title: 'Hyper-Target Urban Campaigns',
      impact: 'High',
      description:
        'Harare and Bulawayo account for over 60% of demand. Run geo-fenced ads and localized creatives for urban professionals.',
    },
    {
      title: 'WhatsApp Conversion Optimization',
      impact: 'Medium',
      description:
        'Users who engage on WhatsApp convert 35% better. Automate follow-ups and add AI-assisted response flows.',
    },
    {
      title: 'SEO Content for Intent Capture',
      impact: 'Medium',
      description:
        'Organic traffic shows strong conversion. Publish localized landing pages targeting high-intent keywords.',
    },
  ];

  /* ===================== UI ===================== */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 space-y-6">
      {/* ===================== HEADER ===================== */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Acquisition Intelligence
          </h1>
          <p className="text-slate-600">
            Geographic targeting, channel attribution & growth insights
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow">
          Generate AI Strategy
        </Button>
      </div>

      {/* ===================== KPI OVERVIEW ===================== */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-600">Total Reach</p>
            <p className="text-2xl font-semibold text-slate-900">108,600</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-600">Avg Conversion Rate</p>
            <p className="text-2xl font-semibold text-green-600">2.9%</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-600">Customer Acquisition Cost</p>
            <p className="text-2xl font-semibold text-slate-900">$7.40</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-slate-600">Top Channel</p>
            <Badge className="mt-1 bg-blue-100 text-blue-800">
              Referrals
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* ===================== MAP + FUNNEL ===================== */}
      <div className="grid grid-cols-2 gap-6">
        {/* ===================== GEO DISTRIBUTION ===================== */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Geographic Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {geoData.map((region) => {
              const percentage = Math.round(
                (region.customers / totalCustomers) * 100
              );

              return (
                <div key={region.region} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {region.region}
                    </span>
                    <span className="text-slate-500">
                      {region.customers.toLocaleString()} ({percentage}%)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <p className="text-sm text-slate-600 pt-2">
              Urban regions dominate acquisition due to higher mobile and
              internet penetration.
            </p>
          </CardContent>
        </Card>

        {/* ===================== FUNNEL ===================== */}
        <Card>
          <CardHeader>
            <CardTitle>Channel Attribution Funnel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: 'Ad Impressions', value: '108,600' },
              { label: 'Website Visits', value: '14,200' },
              { label: 'WhatsApp Engagement', value: '5,460' },
              { label: 'Conversions', value: '3,150' },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-700">
                  {step.label}
                </span>
                <span className="font-semibold text-slate-900">
                  {step.value}
                </span>
              </div>
            ))}

            <p className="text-sm text-slate-600 pt-2">
              WhatsApp interaction is the strongest conversion accelerator.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ===================== CHANNEL PERFORMANCE ===================== */}
      <Card>
        <CardHeader>
          <CardTitle>Channel Performance Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Channel</th>
                  <th className="py-3 text-left">Reach</th>
                  <th className="py-3 text-left">CTR</th>
                  <th className="py-3 text-left">Conversion</th>
                  <th className="py-3 text-left">CAC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Facebook Ads', '45,200', '3.2%', '1.8%', '$12.50'],
                  ['Google Search', '32,100', '4.8%', '2.4%', '$9.80'],
                  ['Organic SEO', '18,900', '6.2%', '3.1%', '$5.20'],
                  [
                    'Customer Referrals',
                    '12,400',
                    '8.1%',
                    '4.5%',
                    '$3.10',
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-slate-50"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`py-3 ${
                          cell === '$3.10'
                            ? 'text-green-700 font-medium'
                            : ''
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* ===================== AI STRATEGIES ===================== */}
      <Card className="border-indigo-200 bg-indigo-50/40">
        <CardHeader>
          <CardTitle>AI-Recommended Growth Strategies</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {strategies.map((strategy, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-4 shadow-sm border"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-slate-900">
                  {strategy.title}
                </h3>
                <Badge
                  className={
                    strategy.impact === 'High'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }
                >
                  {strategy.impact} Impact
                </Badge>
              </div>
              <p className="text-sm text-slate-600">
                {strategy.description}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

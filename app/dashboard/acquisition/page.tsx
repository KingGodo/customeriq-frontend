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
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Acquisition Intelligence
          </h1>
          <p className="text-slate-600">
            Geographic targeting, channel attribution & growth insights
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Generate Strategy
        </Button>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
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
            <p className="text-sm text-slate-600">Top Performing Channel</p>
            <Badge className="mt-1 bg-blue-100 text-blue-800">
              Referrals
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Maps + Funnel */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Geographic Map */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Geographic Demand Heatmap (Zimbabwe)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[320px] rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 text-sm">
              🗺️ Mapbox / Google Maps Heatmap  
              <br />
              Harare, Bulawayo, Gweru, Mutare, Masvingo
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Highest acquisition potential observed in urban centers with
              strong mobile data penetration.
            </p>
          </CardContent>
        </Card>

        {/* Attribution Funnel */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Channel Attribution Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[320px] rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 text-sm">
              📊 Sankey / Funnel Visualization  
              <br />
              Facebook → Website → WhatsApp → Conversion
            </div>
            <p className="mt-3 text-sm text-slate-600">
              WhatsApp follow-ups significantly improve final conversion rates.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Channel Performance */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Channel Performance Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Channel</th>
                  <th className="text-left py-3">Reach</th>
                  <th className="text-left py-3">CTR</th>
                  <th className="text-left py-3">Conversion</th>
                  <th className="text-left py-3">CAC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="py-3">Facebook Ads</td>
                  <td className="py-3">45,200</td>
                  <td className="py-3">3.2%</td>
                  <td className="py-3">1.8%</td>
                  <td className="py-3">$12.50</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="py-3">Google Search</td>
                  <td className="py-3">32,100</td>
                  <td className="py-3">4.8%</td>
                  <td className="py-3">2.4%</td>
                  <td className="py-3">$9.80</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="py-3">Organic SEO</td>
                  <td className="py-3">18,900</td>
                  <td className="py-3">6.2%</td>
                  <td className="py-3">3.1%</td>
                  <td className="py-3">$5.20</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="py-3">Customer Referrals</td>
                  <td className="py-3">12,400</td>
                  <td className="py-3">8.1%</td>
                  <td className="py-3">4.5%</td>
                  <td className="py-3 text-green-700 font-medium">$3.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

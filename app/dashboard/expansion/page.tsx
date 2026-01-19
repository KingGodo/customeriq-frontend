import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ExpansionPage() {
  const products = [
    { name: 'Personal Loans', eligible: 3200, offered: 480, accepted: 145, rate: 30.2 },
    { name: 'Savings Accounts', eligible: 5100, offered: 1530, accepted: 612, rate: 40.0 },
    { name: 'Insurance Plans', eligible: 2400, offered: 360, accepted: 86, rate: 23.9 },
    { name: 'Investment Products', eligible: 1200, offered: 240, accepted: 72, rate: 30.0 },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Expansion & Upsell</h1>
        <p className="text-gray-600 mb-4">Value grower - Upselling and cross-selling logic</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">🚀 Launch Upsell Campaign</Button>
      </div>

      {/* Product Opportunity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product, idx) => (
          <Card key={idx} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-gray-900 text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Eligible Customers</p>
                <p className="text-2xl font-bold text-purple-600">{product.eligible.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold text-purple-600">{product.rate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Potential Revenue</p>
                <p className="text-2xl font-bold text-purple-600">${(product.eligible * 450).toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upsell Conversion Funnel Card */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Upsell Conversion Funnel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {products.map((product, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm font-medium text-gray-900 w-32">{product.name}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="h-8 rounded bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-800 px-2"
                  style={{ width: '100%' }}
                >
                  Eligible: {product.eligible}
                </div>
                <div
                  className="h-8 rounded bg-indigo-300 flex items-center justify-center text-xs font-semibold text-white px-2"
                  style={{ width: `${(product.offered / product.eligible) * 100}%` }}
                >
                  Offered: {product.offered}
                </div>
                <div
                  className="h-8 rounded bg-purple-600 flex items-center justify-center text-xs font-semibold text-white px-2"
                  style={{ width: `${(product.accepted / product.eligible) * 100}%` }}
                >
                  Accepted: {product.accepted}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

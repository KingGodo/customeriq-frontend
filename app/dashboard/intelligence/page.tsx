'use client';

import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  RefreshCcw,
  Activity,
  ShieldCheck,
  TrendingDown,
  Database,
  Sparkles,
} from 'lucide-react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function IntelligencePage() {
  /* ===================== DATA ===================== */

  const features = [
    { name: 'Transaction Fees', importance: 92 },
    { name: 'App Bugs / Issues', importance: 78 },
    { name: 'Loan Rejection Rate', importance: 65 },
    { name: 'Customer Support Response', importance: 52 },
    { name: 'Days Since Last Activity', importance: 48 },
  ];

  const metrics = [
    { label: 'Precision', value: '89.3%' },
    { label: 'Recall', value: '91.2%' },
    { label: 'F1 Score', value: '90.2%' },
    { label: 'AUC-ROC', value: '0.942' },
  ];

  const trainingHistory = [
    {
      date: '2024-01-04',
      accuracy: 93.1,
    },
    {
      date: '2024-01-11',
      accuracy: 93.8,
    },
    {
      date: '2024-01-18',
      accuracy: 94.2,
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 space-y-10">
      {/* ===================== HEADER ===================== */}
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
            <span className="rounded-xl bg-indigo-100 p-2 text-indigo-700">
              <Brain className="h-6 w-6" />
            </span>
            AI Intelligence Console
          </h1>
          <p className="mt-1 text-slate-600">
            Monitor model health, drift, explainability and governance.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Activity className="mr-2 h-4 w-4" />
            View Logs
          </Button>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Retrain Model
          </Button>
        </div>
      </header>

      {/* ===================== HEALTH SUMMARY ===================== */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <HealthCard title="Current Accuracy" value="94.2%" icon={ShieldCheck} />
        <HealthCard title="7-Day Drift" value="-0.8%" icon={TrendingDown} />
        <HealthCard title="Training Data Size" value="125K Records" icon={Database} />
        <HealthCard title="Model Status" value="Healthy" icon={Sparkles} badge />
      </section>

      {/* ===================== DRIFT + EXPLAINABILITY ===================== */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* ===== Drift Chart ===== */}
        <Card className="transition hover:shadow-lg">
          <CardHeader>
            <CardTitle>Model Drift Monitoring</CardTitle>
            <CardDescription>
              Accuracy trend across recent retraining cycles.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trainingHistory}>
                  <XAxis dataKey="date" />
                  <YAxis domain={[92, 95]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <Separator className="my-5" />

            <div className="grid grid-cols-3 gap-4">
              <MetricMini title="Accuracy" value="94.2%" />
              <MetricMini title="Trend" value="-0.8%" negative />
              <MetricMini title="Last Retrain" value="8 days ago" />
            </div>
          </CardContent>
        </Card>

        {/* ===== Feature Importance ===== */}
        <Card className="transition hover:shadow-lg">
          <CardHeader>
            <CardTitle>Feature Importance</CardTitle>
            <CardDescription>
              Explainability — drivers behind churn predictions.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {features.map((feature) => (
              <div key={feature.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-800">
                    {feature.name}
                  </span>
                  <span className="font-semibold text-indigo-600">
                    {feature.importance}%
                  </span>
                </div>
                <Progress value={feature.importance} />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* ===================== PERFORMANCE METRICS ===================== */}
      <Card className="transition hover:shadow-lg">
        <CardHeader>
          <CardTitle>Model Performance Metrics</CardTitle>
          <CardDescription>
            Classification quality and prediction reliability.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm text-slate-500">{metric.label}</p>
                <p className="text-2xl font-bold text-indigo-600">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SUBCOMPONENTS                                */
/* -------------------------------------------------------------------------- */

interface HealthCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  badge?: boolean;
}

function HealthCard({ title, value, icon: Icon, badge }: HealthCardProps) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-lg font-semibold text-slate-900">{value}</p>
          {badge && (
            <Badge className="mt-1 bg-green-100 text-green-700">
              Operational
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface MetricMiniProps {
  title: string;
  value: string;
  negative?: boolean;
}

function MetricMini({ title, value, negative }: MetricMiniProps) {
  return (
    <div className="rounded-xl border bg-white p-3 text-center shadow-sm">
      <p className="text-xs text-slate-500">{title}</p>
      <p
        className={`text-lg font-semibold ${
          negative ? 'text-red-600' : 'text-slate-900'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

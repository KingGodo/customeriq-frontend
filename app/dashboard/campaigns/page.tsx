'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Plus,
  Send,
  Smartphone,
  BarChart3,
  Sparkles,
} from 'lucide-react';

export default function CampaignsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [content, setContent] = useState('');

  const templates = [
    {
      name: 'Churn Prevention SMS',
      channel: 'SMS',
      openRate: 67.2,
      clickRate: 12.4,
      conversions: 312,
      content:
        "Hi {{first_name}}, we noticed you haven't visited recently. Here's an exclusive offer for you: {{offer_code}}",
    },
    {
      name: 'New Product Email',
      channel: 'Email',
      openRate: 45.8,
      clickRate: 8.9,
      conversions: 201,
      content:
        'Dear {{first_name}}, you are eligible for our new {{product_name}}. Your churn score is {{churn_score}}.',
    },
    {
      name: 'Win-back Campaign',
      channel: 'SMS',
      openRate: 52.1,
      clickRate: 10.3,
      conversions: 265,
      content:
        'We miss you {{first_name}}! Come back and enjoy {{discount}}% off your next purchase.',
    },
  ];

  const variables = [
    '{{first_name}}',
    '{{last_name}}',
    '{{churn_score}}',
    '{{product_name}}',
    '{{offer_code}}',
    '{{discount}}',
  ];

  const activeTemplate = templates[selectedTemplate];

  return (
    <div className="min-h-screen bg-slate-50 p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Campaign Studio
          </h1>
          <p className="text-slate-600">
            Design, personalize and optimize multi-channel campaigns.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Insights
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </Button>
        </div>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Active Templates" value="12" />
        <KpiCard title="Avg Open Rate" value="55.6%" />
        <KpiCard title="Avg CTR" value="10.4%" />
        <KpiCard title="Monthly Conversions" value="2,140" />
      </div>

      {/* Editor Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Templates Panel */}
        <Card className="xl:col-span-1">
          <CardHeader>
            <CardTitle>Templates</CardTitle>
            <CardDescription>
              Select and manage reusable campaign templates.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {templates.map((template, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedTemplate(idx);
                  setContent(template.content);
                }}
                className={`w-full rounded-lg border p-3 text-left transition ${
                  selectedTemplate === idx
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-900">
                    {template.name}
                  </p>
                  <Badge variant="secondary">{template.channel}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Open {template.openRate}% · CTR {template.clickRate}%
                </p>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Editor Panel */}
        <Card className="xl:col-span-1">
          <CardHeader>
            <CardTitle>Template Editor</CardTitle>
            <CardDescription>
              Personalize content using dynamic variables.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input value={activeTemplate.name} readOnly />

            <Textarea
              value={content || activeTemplate.content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="font-mono"
            />

            <Separator />

            <div>
              <p className="text-sm font-medium mb-2">Insert Variables</p>
              <div className="flex flex-wrap gap-2">
                {variables.map((variable) => (
                  <Button
                    key={variable}
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setContent(
                        (prev) =>
                          `${prev || activeTemplate.content} ${variable}`
                      )
                    }
                    className="font-mono text-xs"
                  >
                    {variable}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                Save Template
              </Button>
              <Button variant="outline" className="flex-1">
                Preview
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Preview + Insights */}
        <div className="xl:col-span-1 space-y-6">
          {/* Mobile Preview */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-64 rounded-3xl bg-slate-900 p-3">
                <div className="rounded-2xl bg-white p-4 text-sm text-slate-700 min-h-[260px]">
                  {content || activeTemplate.content}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Insight */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <CardTitle>Performance Insight</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <strong>Channel:</strong> {activeTemplate.channel}
              </p>
              <p>
                <strong>Open Rate:</strong> {activeTemplate.openRate}%
              </p>
              <p>
                <strong>Click Rate:</strong> {activeTemplate.clickRate}%
              </p>
              <p>
                <strong>Conversions:</strong> {activeTemplate.conversions}
              </p>
              <Badge className="bg-green-100 text-green-700">
                High Performing Template
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- */

function KpiCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  );
}

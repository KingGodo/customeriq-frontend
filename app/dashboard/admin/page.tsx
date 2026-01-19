'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('general');

  const staffUsers = [
    { id: 1, name: 'John Admin', email: 'john@company.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Manager', email: 'sarah@company.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Mike Analyst', email: 'mike@company.com', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Lisa Support', email: 'lisa@company.com', role: 'Viewer', status: 'Inactive' },
  ];

  const auditLogs = [
    { id: 1, user: 'Sarah Manager', action: 'Modified churn rule', details: 'Changed threshold from 70% to 80%', date: '2024-01-18 14:32' },
    { id: 2, user: 'John Admin', action: 'Added new user', details: 'Lisa Support added as Viewer', date: '2024-01-18 10:15' },
    { id: 3, user: 'Mike Analyst', action: 'Exported data', details: 'Downloaded customer segment report', date: '2024-01-17 16:45' },
    { id: 4, user: 'Sarah Manager', action: 'Launched campaign', details: 'Churn prevention SMS campaign', date: '2024-01-17 09:20' },
    { id: 5, user: 'John Admin', action: 'System configuration', details: 'Updated API rate limits', date: '2024-01-16 11:30' },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Settings</h1>
        <p className="text-gray-600">System configuration, user management, and audit logs</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="logs">Audit Logs</TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">System Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Company Name</label>
                <Input defaultValue="CustomerIQ" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Primary Region</label>
                <Input defaultValue="Zimbabwe" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">API Rate Limit (req/sec)</label>
                <Input type="number" defaultValue="1000" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Data Retention (days)</label>
                <Input type="number" defaultValue="365" className="border-gray-300" />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">
          <Card className="bg-white border-gray-200">
            <CardHeader className="flex items-center justify-between flex-row">
              <CardTitle className="text-gray-900">Team Members</CardTitle>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">+ Add User</Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-medium">{user.name}</td>
                        <td className="py-3 px-4 text-gray-700">{user.email}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              user.role === 'Admin'
                                ? 'bg-purple-100 text-purple-800'
                                : user.role === 'Editor'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                            }
                          >
                            {user.role}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              user.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }
                          >
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-purple-600 border-purple-300 hover:bg-purple-50"
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-300 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Billing & Subscription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                <span className="text-gray-700">Current Plan</span>
                <strong className="text-gray-900">Professional</strong>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                <span className="text-gray-700">Monthly Cost</span>
                <strong className="text-gray-900">$499/month</strong>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                <span className="text-gray-700">Renewal Date</span>
                <strong className="text-gray-900">Feb 18, 2024</strong>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                <span className="text-gray-700">Status</span>
                <strong className="text-green-600">Active</strong>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Upgrade Plan</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Logs Tab */}
        <TabsContent value="logs">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Audit Log</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-6">Track all system changes and user actions for security</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">User</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Details</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-medium">{log.user}</td>
                        <td className="py-3 px-4 text-gray-700">{log.action}</td>
                        <td className="py-3 px-4 text-gray-600 text-sm">{log.details}</td>
                        <td className="py-3 px-4 text-gray-600 text-sm">{log.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

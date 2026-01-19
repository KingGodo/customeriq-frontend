'use client';

import Sidebar from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto md:ml-64">
        <div className="p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  Package,
  ShoppingCart,
  Users,
  Image,
  Settings,
  BarChart3,
  Monitor,
} from 'lucide-react';

export function AdminLayout({ children, currentPage, onNavigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: 10 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'categories', label: 'Categories', icon: BarChart3 },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'coupons', label: 'Coupons', icon: Package },
    { id: 'inbox', label: 'Inbox', icon: Menu },
    { id: 'cms', label: 'CMS', icon: Image },
    { id: 'ads-banner', label: 'Ads Banner', icon: Monitor },
  ];

  const otherItems = [
    { id: 'knowledge', label: 'Knowledge Base', icon: Home },
    { id: 'updates', label: 'Product Updates', icon: Package },
  ];

  const settingsItems = [
    { id: 'personal-settings', label: 'Personal Settings', icon: Users },
    { id: 'settings', label: 'Global Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f0f0f] border-r border-gray-800 text-white transform transition-transform duration-300 z-50 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-yellow-400">Admin Panel</h1>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-6 py-3 transition-colors ${
                  currentPage === item.id
                    ? 'bg-yellow-400 text-black font-medium'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`px-2 py-0.5 text-xs font-semibold rounded ${
                      currentPage === item.id
                        ? 'bg-black text-yellow-400'
                        : 'bg-yellow-400 text-black'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Other Information */}
        <div className="mt-6 px-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Other Information
          </h3>
        </div>
        <nav>
          {otherItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  currentPage === item.id
                    ? 'bg-yellow-400 text-black font-medium'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Settings */}
        <div className="mt-6 px-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Settings
          </h3>
        </div>
        <nav className="pb-6">
          {settingsItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  currentPage === item.id
                    ? 'bg-yellow-400 text-black font-medium'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        <header className="bg-[#0f0f0f] border-b border-gray-800 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4 lg:px-8">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-800 text-gray-300"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <h2 className="text-xl font-semibold text-white capitalize">
              {currentPage?.replace('-', ' ')}
            </h2>

            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-full">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm font-bold">
                AD
              </div>
              <span className="text-sm font-medium text-gray-300">Admin</span>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
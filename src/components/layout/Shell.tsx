import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Warehouse, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Search,
  Bell,
  HelpCircle,
  Menu
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface NavItemProps {
  to: string;
  icon: any;
  label: string;
  active?: boolean;
  key?: string;
}

const NavItem = ({ to, icon: Icon, label, active }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-item transition-all duration-200 group",
      active 
        ? "bg-white text-primary font-semibold shadow-bento" 
        : "text-on-surface-variant hover:text-primary hover:bg-white/50"
    )}
  >
    <Icon className={cn("w-5 h-5 transition-colors", active ? "text-primary" : "text-on-surface-variant group-hover:text-primary")} />
    <span className="text-sm">{label}</span>
  </Link>
);

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/products', icon: Package, label: 'Products' },
    { to: '/inventory', icon: Warehouse, label: 'Inventory' },
    { to: '/orders', icon: ShoppingCart, label: 'Orders' },
    { to: '/customers', icon: Users, label: 'Customers' },
    { to: '/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-surface-container-low p-8 flex flex-col transition-transform duration-300 lg:translate-x-0 border-r border-outline-variant",
        !isSidebarOpen && "-translate-x-full"
      )}>
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-item bg-primary flex items-center justify-center text-white shadow-bento">
            <Warehouse className="w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-on-surface">PRECISION</span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.to} 
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.to} 
            />
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center gap-3 px-2">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh8sVpaI32dz4Y_Hm7Tm58fF0hhgSYL3iSoDq8L53Q5kmICsvgQR18kBcRkTK18v3puetUrf3A5d5VF0WhFDCwfHfOdDJWl9Qo-6ivdDcyOQ-F59vwKAMVDoJfWN0LCnyt_BruGe1Til4hB5U0ueQDlpkZUPeRy-AAIPQGo_Xtky3NOuu5cXE48ErWBHvxylJN1ZKIrZ6zd1nvgACfWlMc99uwnrB8COl30w4WFZB7XxxuFUKxq_P5z-ltZ2qqC4uIPOP2ylApGQWf" 
            alt="Admin" 
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate text-on-surface">Global Admin</p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Merchant Profile</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* TopBar */}
        <header className="h-20 bg-surface-container-lowest fixed top-0 right-0 left-0 lg:left-64 z-40 flex items-center justify-between px-10 border-b border-outline-variant">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-item"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative max-w-md w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50 text-on-surface"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-surface-container rounded-full border border-outline-variant">
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">May 04, 2026</span>
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
            <div className="flex items-center gap-3 border-l border-outline-variant pl-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3R363iWhlkwEZLtOBino0xcakTQIs2h0W_8a3oYBcZBMQIzIOazF6h-mNLpN76e196llbhXxGtQCL3eoLwt3WfsogLY-8d9rrP9wiSSBD1u_hfTP_EP18Uprd8cehSacsdpDxsTCfQYr91uTbg9-cyvKc6hTHtjRuzKHxLshVBPUwjJ-FwFZNY2joENv4w3JRxkI8gCRC4MyF2d6yL4nGbWLucPG3ggyn5w5s44_--gRxttlaRduTwBnyJX3x-JIr4e-hvIzQUXy5" 
                alt="Profile" 
                className="w-9 h-9 rounded-full ring-2 ring-primary/10"
              />
              <div className="hidden xl:block">
                <p className="text-xs font-bold text-on-surface leading-none">Admin User</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-tighter mt-1">Management</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Wrapper */}
        <main className="pt-28 px-10 pb-12 flex-1 relative min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

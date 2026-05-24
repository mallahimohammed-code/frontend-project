import { useState } from 'react';
import { Filter, RefreshCcw, AlertCircle, Truck, PlusCircle } from 'lucide-react';
import { inventoryProjections } from '@/src/mockData';
import Button from '@/src/components/Button';
import Modal from '@/src/components/Modal';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer,
  Cell
} from 'recharts';

export default function Inventory() {
  const [isStockSyncModalOpen, setIsStockSyncModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Inventory</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Global stock health monitoring</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="md"
            leftIcon={<RefreshCcw className="w-4 h-4" />}
            onClick={() => setIsStockSyncModalOpen(true)}
          >
            Stock Sync
          </Button>
          <Button
            size="md"
            leftIcon={<PlusCircle className="w-4 h-4" />}
            onClick={() => setIsAlertModalOpen(true)}
          >
            Ad-hoc Alert
          </Button>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-bento shadow-bento text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">Global Capacity</span>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-6xl font-black tracking-tighter">82%</span>
                <span className="text-sm font-bold text-white/80">Utilized</span>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full transition-all duration-1000 shadow-sm" style={{ width: '82%' }} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-4 text-white/60">Healthy Infrastructure State</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant flex flex-col justify-between group">
          <div className="w-12 h-12 bg-amber-50 rounded-item flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mb-1">Low Stock</h3>
            <p className="text-4xl font-extrabold text-on-surface tracking-tight">14 Items</p>
            <p className="text-[10px] text-red-600 font-bold mt-2 uppercase tracking-wide">Action Required</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant flex flex-col justify-between group">
          <div className="w-12 h-12 bg-indigo-50 rounded-item flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mb-1">In Transit</h3>
            <p className="text-4xl font-extrabold text-on-surface tracking-tight">2.4k</p>
            <p className="text-[10px] text-primary font-bold mt-2 uppercase tracking-wide">ETA 48H</p>
          </div>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Forecasting</span>
              <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">Predicted Demand</h2>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-indigo-50 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">AI Insights</div>
            </div>
          </div>
          
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryProjections} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {inventoryProjections.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value > 80 ? '#6366f1' : '#e2e8f0'} className="hover:fill-primary/60 transition-colors duration-300" />
                  ))}
                </Bar>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} dy={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 p-4 bg-surface-container-low rounded-item text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
            Expect 15% increase in seasonal lifestyle categories
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant flex flex-col">
          <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Audit Log</span>
          <h2 className="text-2xl font-extrabold text-on-surface tracking-tight mb-8">System Alerts</h2>
          <div className="space-y-6 flex-1">
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 animate-pulse" />
              <div>
                <p className="text-sm font-bold text-on-surface">Europe Warehouse Delay</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1">Sync failed 42 mins ago. Manual intervention suggested.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <div>
                <p className="text-sm font-bold text-on-surface">API Connection Restored</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1">Asia-Pacific node is now back online and syncing.</p>
              </div>
            </div>
          </div>
          <Button
            variant="secondary"
            className="w-full mt-8 py-4 bg-outline-variant text-[11px] uppercase tracking-widest hover:bg-surface-container"
          >
            Full Audit
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isStockSyncModalOpen}
        title="Stock Sync"
        onClose={() => setIsStockSyncModalOpen(false)}
      >
        <form className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Warehouse Node
            </label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
              <option>Europe Central</option>
              <option>Asia-Pacific</option>
              <option>North America East</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Sync Scope
            </label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
              <option>All SKUs</option>
              <option>Low Stock Only</option>
              <option>Changed Since Last Sync</option>
            </select>
          </div>
          <div className="pt-2 flex items-center justify-end gap-3">
            <Button type="button" variant="secondary" size="md" onClick={() => setIsStockSyncModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md">
              Run Sync
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isAlertModalOpen}
        title="Ad-hoc Alert"
        onClose={() => setIsAlertModalOpen(false)}
      >
        <form className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Alert Title
            </label>
            <input
              type="text"
              placeholder="Europe warehouse delay"
              className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Severity
            </label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
              <option>Critical</option>
              <option>Warning</option>
              <option>Info</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Describe the inventory event..."
              className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 outline-none resize-none"
            />
          </div>
          <div className="pt-2 flex items-center justify-end gap-3">
            <Button type="button" variant="secondary" size="md" onClick={() => setIsAlertModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md">
              Create Alert
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

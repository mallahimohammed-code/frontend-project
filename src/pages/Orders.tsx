import { useState } from 'react';
import { Download, MoreHorizontal } from 'lucide-react';
import { orders } from '@/src/mockData';
import { cn } from '@/src/lib/utils';
import Button from '@/src/components/Button';
import Modal from '@/src/components/Modal';

const OrderStat = ({ label, value, trend, sub }: any) => (
  <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm ring-1 ring-outline-variant/10 hover:border-primary/20 transition-all group">
    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">{label}</p>
    <div className="flex items-baseline gap-3">
      <h3 className="text-3xl font-black text-on-surface tracking-tighter">{value}</h3>
      {trend && <span className="text-[10px] font-black text-emerald-600">{trend}</span>}
      {sub && <span className="text-[11px] font-semibold text-on-surface-variant">{sub}</span>}
    </div>
  </div>
);

export default function Orders() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Orders</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Transaction flow monitoring</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" onClick={() => setIsFilterModalOpen(true)}>
            Filter Flow
          </Button>
          <Button size="lg" leftIcon={<Download className="w-4 h-4" />} onClick={() => setIsExportModalOpen(true)}>
            Export Orders
          </Button>
        </div>
      </div>

      {/* Quick Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <OrderStat label="Total Orders" value="12,842" trend="+12%" />
        <OrderStat label="Pending" value="45" sub="Active" />
        <OrderStat label="Shipped Today" value="128" trend="+5.2%" />
        <OrderStat label="Delivered" value="11,204" sub="98% Success" />
      </div>

      {/* Orders Table Container */}
      <div className="bg-surface-container-lowest rounded-bento shadow-bento border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-10 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Identification</th>
                <th className="px-10 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Customer</th>
                <th className="px-10 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Phase</th>
                <th className="px-10 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Value</th>
                <th className="px-10 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-10 py-7 text-sm font-bold text-on-surface">{order.id}</td>
                  <td className="px-10 py-7">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-10 h-10 rounded-item bg-indigo-50 flex items-center justify-center text-[10px] font-black text-primary border border-primary/10">
                        {order.customerInitials}
                      </div>
                      <div className="flex flex-col text-left">
                        <p className="text-sm font-bold text-on-surface leading-none">{order.customerName}</p>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase mt-1">Verified</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-7 text-center">
                    <span className={cn(
                      "inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      order.status === 'Delivered' ? "bg-emerald-50 text-emerald-700" :
                      order.status === 'Processing' ? "bg-amber-50 text-amber-700" :
                      order.status === 'Shipped' ? "bg-indigo-50 text-indigo-700" :
                      "bg-red-50 text-red-700"
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-10 py-7 text-right text-sm font-extrabold text-on-surface tracking-tight">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-10 py-7 text-center">
                    <Button variant="ghost" size="icon" aria-label="More options">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isFilterModalOpen}
        title="Filter Flow"
        onClose={() => setIsFilterModalOpen(false)}
      >
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
                Status
              </label>
              <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
                <option>Any</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
                Date Range
              </label>
              <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Minimum Value
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
          <div className="pt-2 flex items-center justify-end gap-3">
            <Button type="button" variant="secondary" size="md" onClick={() => setIsFilterModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md">
              Apply Filters
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isExportModalOpen}
        title="Export Orders"
        onClose={() => setIsExportModalOpen(false)}
      >
        <form className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Format
            </label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
              <option>CSV</option>
              <option>XLSX</option>
              <option>JSON</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">
              Include Fields
            </label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-item px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
              <option>Summary</option>
              <option>Full Order Details</option>
              <option>Customer + Payment</option>
            </select>
          </div>
          <div className="pt-2 flex items-center justify-end gap-3">
            <Button type="button" variant="secondary" size="md" onClick={() => setIsExportModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" leftIcon={<Download className="w-4 h-4" />}>
              Export
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

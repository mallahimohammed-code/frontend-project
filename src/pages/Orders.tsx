import { Download, Plus, Search, Calendar, ChevronLeft, ChevronRight, Eye, MoreHorizontal } from 'lucide-react';
import { orders } from '@/src/mockData';
import { cn } from '@/src/lib/utils';

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
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Orders</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Transaction flow monitoring</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-surface-container-lowest text-on-surface font-bold text-sm rounded-item border border-outline-variant shadow-bento hover:bg-surface-container transition-all">
            Filter Flow
          </button>
          <button className="px-6 py-3 bg-primary text-white font-bold text-sm rounded-item shadow-bento transition-all active:scale-95 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Orders
          </button>
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
                    <button className="p-2.5 hover:bg-surface-container rounded-item transition-all text-on-surface-variant hover:text-primary">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

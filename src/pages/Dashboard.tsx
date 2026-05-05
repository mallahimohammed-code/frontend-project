import { TrendingUp, ShoppingBag, Package, AlertTriangle, ExternalLink, Plus } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area, 
  AreaChart 
} from 'recharts';
import { salesData, topSellers, orders } from '@/src/mockData';
import { cn } from '@/src/lib/utils';

const StatCard = ({ label, value, trend, icon: Icon, color, trendUp }: any) => (
  <div className="bg-surface-container-lowest p-6 rounded-bento shadow-bento hover:shadow-lg transition-all duration-300 group border border-outline-variant/60">
    <div className="flex justify-between items-start mb-6">
      <div className={cn("p-2.5 rounded-item", color)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className={cn(
        "text-[10px] font-bold px-3 py-1 rounded-full",
        trendUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
      )}>
        {trend}
      </div>
    </div>
    <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest leading-none">{label}</p>
    <h2 className="text-4xl font-extrabold text-on-surface mt-1 tracking-tighter leading-tight">{value}</h2>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Precision</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Curated business intelligence dashboard</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-item bg-surface-container-lowest text-on-surface font-semibold text-sm shadow-bento hover:bg-surface-container transition-all flex items-center gap-2 border border-outline-variant">
            <ExternalLink className="w-4 h-4" />
            Export
          </button>
          <button className="px-6 py-3 rounded-item bg-primary text-white font-bold text-sm shadow-bento hover:bg-primary-container active:scale-95 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Listing
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Revenue" 
          value="$128.4k" 
          trend="+12.5%" 
          trendUp={true}
          icon={TrendingUp} 
          color="bg-indigo-50 text-primary"
        />
        <StatCard 
          label="Total Orders" 
          value="1,240" 
          trend="+8.2%" 
          trendUp={true}
          icon={ShoppingBag} 
          color="bg-purple-50 text-purple-600"
        />
        <StatCard 
          label="In Stock" 
          value="4,821" 
          trend="Healthy" 
          trendUp={true}
          icon={Package} 
          color="bg-amber-50 text-amber-600"
        />
        <StatCard 
          label="Alerts" 
          value="12 Items" 
          trend="Review" 
          trendUp={false}
          icon={AlertTriangle} 
          color="bg-red-50 text-red-600"
        />
      </div>

      {/* Charts & Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Sales Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-black text-on-surface tracking-tight">Sales Performance</h3>
              <p className="text-sm text-on-surface-variant font-medium">Daily transactions for the current month</p>
            </div>
            <select className="bg-surface-container-low border-none rounded-xl text-xs font-bold py-2 pl-3 pr-8 focus:ring-primary/20 cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3525cd" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#3525cd" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eceef0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#464555' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#464555' }}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#3525cd" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSales)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Sellers */}
        <div className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant">
          <h3 className="text-xl font-black text-on-surface tracking-tight mb-6">Top Selling Products</h3>
          <div className="space-y-6">
            {topSellers.map((product) => (
              <div key={product.name} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-surface-container overflow-hidden ring-4 ring-background group-hover:ring-primary/10 transition-all duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">{product.name}</h4>
                  <p className="text-xs font-semibold text-on-surface-variant">{product.units} Units Sold</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-on-surface">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border-t border-outline-variant/10 text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/5 transition-all">
            View Analytics
          </button>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-surface-container-lowest rounded-bento shadow-bento border border-outline-variant overflow-hidden">
        <div className="p-8 flex justify-between items-center border-b border-surface-container-low">
          <h3 className="text-xl font-black text-on-surface tracking-tight">Recent Orders</h3>
          <button className="text-primary text-sm font-black hover:underline underline-offset-4">View All Orders</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Order ID</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Customer</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Date</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-surface-container/30 transition-colors group cursor-pointer">
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">{order.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-black ring-2 ring-white">
                        {order.customerInitials}
                      </div>
                      <span className="text-sm font-bold text-on-surface">{order.customerName}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-on-surface-variant">{order.date}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase",
                      order.status === 'Delivered' ? "bg-emerald-50 text-emerald-700" :
                      order.status === 'Processing' ? "bg-amber-50 text-amber-700" :
                      order.status === 'Shipped' ? "bg-indigo-50 text-indigo-700" :
                      "bg-red-50 text-red-700"
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-black text-on-surface">${order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

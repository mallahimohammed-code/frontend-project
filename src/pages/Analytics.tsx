import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { salesData } from '@/src/mockData';
import { Download, Filter, TrendingUp, Users, Target, MousePointer2 } from 'lucide-react';
import Button from '@/src/components/Button';

const analyticsItems = [
  { label: 'Conversion Rate', value: '3.2%', trend: '+0.4%', icon: MousePointer2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Bounce Rate', value: '24.2%', trend: '-2.1%', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Avg. Session', value: '4m 32s', trend: '+14s', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Active Goals', value: '12', trend: '+2', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const categoryData = [
  { name: 'Lifestyle', value: 400 },
  { name: 'Technical', value: 300 },
  { name: 'Service', value: 200 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Intelligence</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Deep learning and market predictive analysis</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" leftIcon={<Filter className="w-4 h-4" />}>
            Filter Intelligence
          </Button>
          <Button size="lg" leftIcon={<Download className="w-4 h-4" />}>
            Export Insights
          </Button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsItems.map((item) => (
          <div key={item.label} className="bg-surface-container-lowest p-6 rounded-bento shadow-bento border border-outline-variant group hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-2.5 rounded-item ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{item.trend}</span>
            </div>
            <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest">{item.label}</p>
            <h3 className="text-3xl font-extrabold text-on-surface mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-black text-on-surface tracking-tight">Growth Projection</h3>
              <p className="text-sm font-medium text-on-surface-variant mt-1">AI-driven market expansion forecast</p>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }} 
                />
                <Area type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorGrowth)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant flex flex-col items-center justify-center">
          <h3 className="text-xl font-black text-on-surface tracking-tight self-start mb-2">Category Split</h3>
          <p className="text-sm font-medium text-on-surface-variant self-start mb-8">Revenue distribution by sector</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-6">
            {categoryData.map((category, index) => (
              <div key={category.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-xs font-bold text-on-surface-variant">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

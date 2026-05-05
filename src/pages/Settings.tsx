import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard, 
  ChevronRight,
  Database,
  Cloud
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const settingsGroups = [
  {
    title: 'Account Identity',
    items: [
      { name: 'Profile Information', icon: User, desc: 'Manage your public persona and contact data' },
      { name: 'Security Protocol', icon: Shield, desc: 'Authenticators, encryption and vault access' },
      { name: 'Notifications', icon: Bell, desc: 'Configure real-time event triggers' },
    ]
  },
  {
    title: 'System Infrastructure',
    items: [
      { name: 'Localization', icon: Globe, desc: 'Currency models, time-zone sync and region lock' },
      { name: 'Billing Architecture', icon: CreditCard, desc: 'Manage global subscription tiers' },
      { name: 'Data Management', icon: Database, desc: 'Export datasets and legacy migrations' },
    ]
  }
];

export default function Settings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Configuration</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Fine-tune your dashboard ecosystem</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          {settingsGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <h2 className="text-[11px] font-extrabold text-on-surface-variant uppercase tracking-[0.2em] px-4">{group.title}</h2>
              <div className="bg-surface-container-lowest rounded-bento shadow-bento border border-outline-variant overflow-hidden">
                <div className="divide-y divide-outline-variant">
                  {group.items.map((item) => (
                    <button key={item.name} className="w-full px-8 py-6 flex items-center justify-between hover:bg-surface-container-low transition-all group">
                      <div className="flex items-center gap-6 text-left">
                        <div className="p-3 bg-surface-container rounded-item text-on-surface-variant group-hover:text-primary group-hover:bg-primary/5 transition-all">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">{item.name}</p>
                          <p className="text-xs text-on-surface-variant font-medium mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {/* Status Box */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-bento shadow-bento text-white relative overflow-hidden">
            <h3 className="text-lg font-black tracking-tight mb-4 relative z-10">Infrastructure State</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cloud className="w-4 h-4 text-white/60" />
                  <span className="text-sm font-bold text-white/80">API Health</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-400 text-emerald-950 text-[10px] font-black rounded-full">OPTIMAL</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-white/60" />
                  <span className="text-sm font-bold text-white/80">Sync Node</span>
                </div>
                <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-black rounded-full">ACTIVE</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4 relative z-10">
              <button className="w-full py-3 bg-white text-indigo-700 rounded-item text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-all">
                Manual Sync
              </button>
              <button className="w-full py-3 bg-white/10 text-white rounded-item text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
                System Diagnostics
              </button>
            </div>
            
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          </div>
          
          <div className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant">
            <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6">Current Software</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container rounded-item flex items-center justify-center text-primary border border-outline-variant">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-on-surface">PRECISION Pro</p>
                <p className="text-xs font-bold text-on-surface-variant">v2.4.0-Stable</p>
              </div>
            </div>
            <p className="mt-6 text-xs text-on-surface-variant leading-relaxed">Your license is valid until <span className="text-on-surface font-bold">June 2027</span>. System is up to date.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

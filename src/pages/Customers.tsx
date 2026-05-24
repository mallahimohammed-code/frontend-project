import { FileUp, UserPlus, MoreVertical, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { customers } from '@/src/mockData';
import { cn } from '@/src/lib/utils';
import Button from '@/src/components/Button';

export default function Customers() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-on-surface">
        <div>
          <h1 className="text-5xl font-black tracking-tight">Customers</h1>
          <p className="text-on-surface-variant mt-2 font-medium">User relationship intelligence</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" leftIcon={<FileUp className="w-5 h-5" />}>
            Export List
          </Button>
          <Button size="lg" leftIcon={<UserPlus className="w-5 h-5" />}>
            Invite User
          </Button>
        </div>
      </div>

      {/* Customer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-surface-container-lowest p-8 rounded-bento shadow-bento border border-outline-variant hover:shadow-lg transition-all group relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-item bg-indigo-50 flex items-center justify-center text-primary text-xl font-black border border-primary/10">
                  {customer.initials}
                </div>
                <Button variant="ghost" size="icon" aria-label="More options">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
              
              <h3 className="text-xl font-extrabold text-on-surface mb-1 truncate">{customer.name}</h3>
              <p className="text-sm font-medium text-on-surface-variant mb-6">{customer.email}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant">
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Spent</p>
                <p className="text-lg font-black text-on-surface mt-1">${customer.totalSpent.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Orders</p>
                <p className="text-lg font-black text-on-surface mt-1">{customer.totalOrders}</p>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

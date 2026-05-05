import { Plus, Filter, MoreVertical, Search } from 'lucide-react';
import { products } from '@/src/mockData';
import { cn } from '@/src/lib/utils';

export default function Products() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-on-surface">Products</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Curated global inventory management</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-item font-bold flex items-center gap-2 hover:bg-primary-container transition-all shadow-bento active:scale-95">
          <Plus className="w-5 h-5" />
          Add Item
        </button>
      </div>

      {/* Filters Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Category', options: ['All', 'Lifestyle', 'Tech', 'Furniture'] },
          { label: 'Status', options: ['Any', 'Active', 'Low', 'Out'] },
          { label: 'Price', options: ['Any', '<$100', '$100-$500', '>$500'] }
        ].map(filter => (
          <div key={filter.label} className="bg-surface-container-lowest p-4 rounded-item shadow-bento border border-outline-variant">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 block">{filter.label}</label>
            <select className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 cursor-pointer">
              {filter.options.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        ))}
        <button className="bg-surface-container-lowest text-on-surface font-bold py-3.5 rounded-item text-xs uppercase tracking-widest hover:bg-surface-container transition-all flex items-center justify-center gap-2 border border-outline-variant shadow-bento">
          <Filter className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-surface-container-lowest rounded-bento shadow-bento border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Listing</th>
                <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">SKU</th>
                <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Price</th>
                <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Stock</th>
                <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-item bg-surface-container overflow-hidden border border-outline-variant shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-on-surface text-sm">{product.name}</span>
                        <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{product.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-mono text-xs font-semibold text-on-surface-variant">{product.sku}</td>
                  <td className="px-8 py-6 font-extrabold text-on-surface tracking-tight">${product.price.toFixed(2)}</td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1.5 w-32">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                        <span className="text-on-surface">{product.stock} Units</span>
                        <span className="text-on-surface-variant">
                          {Math.round((product.stock / product.maxStock) * 100)}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full transition-all duration-1000",
                            product.stock === 0 ? "bg-red-500" : product.stock < 20 ? "bg-amber-500" : "bg-primary"
                          )} 
                          style={{ width: `${(product.stock / product.maxStock) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      product.status === 'Active' ? "bg-emerald-50 text-emerald-700" :
                      product.status === 'Low Stock' ? "bg-amber-50 text-amber-700" :
                      "bg-red-50 text-red-700"
                    )}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2.5 hover:bg-surface-container rounded-item transition-all text-on-surface-variant hover:text-primary">
                      <MoreVertical className="w-5 h-5" />
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

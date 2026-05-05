export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  maxStock: number;
  category: string;
  tag: string;
  image: string;
  status: 'Active' | 'Out of Stock' | 'Low Stock';
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerInitials: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  total: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  initials: string;
  image?: string;
  totalOrders: number;
  totalSpent: number;
  isVIP: boolean;
  status: 'VIP' | 'REGULAR';
}

export interface Metric {
  label: string;
  value: string | number;
  trend?: string;
  status?: string;
  icon: string;
  color: string;
}

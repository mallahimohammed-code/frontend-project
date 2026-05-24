export type Product = {
  name: string
  price: number
  image: string
  status: 'Active' | 'Out of Stock' | 'Low Stock'
}

export type Order = {
  id: string
  customerName: string
  customerEmail: string
  customerInitials: string
  date: string
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled'
  total: number
}
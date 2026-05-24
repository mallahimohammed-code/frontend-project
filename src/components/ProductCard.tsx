import React from 'react'
import { Product } from '../types'

type ProductCardProps = {
  product: Product
  count: number
}

const ProductCard = ({product, count}: ProductCardProps) => {
  return (
    <div>{product.name} - {count}</div>
  )
}

export default ProductCard
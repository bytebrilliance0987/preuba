import { useCart } from '../hooks/useCart'
import { AddToCart, RemoveToCart } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { cart, addToCart, removeToCart } = useCart()
  const checkedProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main>
      <ul>
        {
          products.map(product => {
            const isProductInCart = checkedProductInCart(product)
            return <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title} - $ <strong>{product.price}</strong></h2>
              <button onClick={() => {
                (
                  isProductInCart
                    ? removeToCart(product)
                    : addToCart(product))
              }}
              >
                {
                  isProductInCart
                    ? <RemoveToCart />
                    : <AddToCart />
                }
              </button>
            </li>
          })
        }
      </ul>
    </main>
  )
}

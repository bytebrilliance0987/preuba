import { useId } from 'react'
import { CartIcon, CartRemove } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function ListItemCart ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <p>{title} $<span>{price}</span></p>
        <footer className='footer'>
          <p>Qty: {quantity}</p>
          <button onClick={addToCart}>+</button>
        </footer>
      </div>
    </li>
  )
}

export function Cart () {
  const cartLabel = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartLabel}>
        <CartIcon />
      </label>
      <input className='cart-switch' type="checkbox" id={cartLabel} hidden/>
      <aside>
        <h2>Cart</h2>
        <ul>
          {
            cart.map(product => {
              return (
                <ListItemCart key={product.id} addToCart={() => addToCart(product)} {...product}/>
              )
            })
          }
        </ul>
        <button onClick={clearCart}>
          <CartRemove />
        </button>
      </aside>
    </>
  )
}

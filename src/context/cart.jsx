import { createContext, useReducer } from 'react'
import { cartReducer, carInitialState } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, carInitialState)
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeToCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })
  return { state, addToCart, removeToCart, clearCart }
}

export function CartProvider ({ children }) {
  // const [cart, setCart] = useState([])
  // const addToCart = product => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   if(productInCartIndex >= 0){
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }
  //   setCart(pervState => ([
  //     ...pervState,
  //     {
  //       ...product,
  //       quantity:1
  //     }
  //   ]))
  // }
  // const removeToCart = product => {
  //   setCart(prevState => {
  //     return prevState.filter(item => item.id !== product.id)
  //   })
  // }
  // const clearCart = () => {
  //   setCart([])
  // }

  const { state, addToCart, removeToCart, clearCart } = useCartReducer()

  return (
  <CartContext.Provider value={{ cart: state, addToCart, removeToCart, clearCart }}>
    {children}
  </CartContext.Provider>
  )
}

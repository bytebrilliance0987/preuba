import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Headers } from './components/Headers'
// import { Footer } from './components/Footer'
// import { IS_DEVELOPMENT } from './config'
import { useFilter } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

export const App = () => {
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <main>
        <Headers />
        <Cart />
        <Products products={filteredProducts}/>
        {/* {IS_DEVELOPMENT && <Footer />} */}
      </main>
    </CartProvider>
  )
}

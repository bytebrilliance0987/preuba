import { useId } from 'react'
import { useFilter } from '../hooks/useFilters'
import './Filter.css'
export function Filter () {
  const { filters, setFilters } = useFilter()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const handleMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section>
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo: </label>
        <input type="range" name={minPriceFilterId} id={minPriceFilterId} max='1749' onChange={handleMinPrice} value={filters.minPrice}/>
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select name={categoryFilterId} id={categoryFilterId} onChange={handleCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Cremas</option>
        </select>
      </div>

    </section>
  )
}

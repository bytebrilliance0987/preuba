import { useFilter } from '../hooks/useFilters'
import './Footer.css'
export function Footer () {
  const { filters } = useFilter()
  return (
    <footer>Filter: {JSON.stringify(filters)}</footer>
  )
}

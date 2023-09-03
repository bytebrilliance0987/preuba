import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { FilterProvider } from './src/context/filter'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <FilterProvider>
      <App/>
    </FilterProvider>
  </StrictMode>
)

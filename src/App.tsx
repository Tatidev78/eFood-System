import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from './store'

import GlobalCss from './styles'
import Home from './components/Home'
import Pizza from './components/Pizza'
import { Footer } from './components/Footer'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pizza" element={<Pizza />} />
  </Routes>
)

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />

        <div className="App">
          <Rotas />
          <Footer />
        </div>

        {isOpen && <Cart />}
      </BrowserRouter>
    </Provider>
  )
}

export default App
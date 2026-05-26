import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import Rotas from './components/routes'

import GlobalCss from './styles'

import { Footer } from './components/Footer'

import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />

        <div className="App">
          <Rotas />
          <Footer />
        </div>

        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderBar, Banner, CartButton } from './styles'
import logo from '../../assets/images/logo.png'
import { RootState } from '../../store'
import { open } from '../../store/reducers/cart'

const PerfilHeader = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <>
      <HeaderBar>
        <div className='container'>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Restaurantes</h2>
          </Link>

          <img src={logo} alt="logo efood" />

          {/* ← AQUI: botão que abre o carrinho e mostra quantidade real */}
          <CartButton onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </div>
      </HeaderBar>

      <Banner>
        <div className="container">
          <h3>Italiana</h3>
          <h2>La Dolce Vita Trattoria</h2>
        </div>
      </Banner>
    </>
  )
}

export default PerfilHeader
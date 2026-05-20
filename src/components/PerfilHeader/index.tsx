import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderBar, Banner, CartButton } from './styles'
import logo from '../../assets/images/logo.png'
import { RootState } from '../../store'
import { open } from '../../store/reducers/cart'

type Props = {
  titulo?: string
  tipo?: string
  capa?: string
}

const PerfilHeader = ({ titulo, tipo, capa }: Props) => {
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

          <CartButton onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </div>
      </HeaderBar>

      <Banner $capa={capa}>
        <div className="container">
          <h3>{tipo}</h3>
          <h2>{titulo}</h2>
        </div>
      </Banner>
    </>
  )
}

export default PerfilHeader
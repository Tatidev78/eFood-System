import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Overlay, CartContainer, Sidebar, Price, CartItem, CheckoutButton } from './styles'
import { close, remove } from '../../store/reducers/cart'

// Função para formatar preço no padrão brasileiro
const formatarPreco = (preco: number): string => {
  return preco.toFixed(2).replace('.', ',')
}

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  const getTotalPrice = (): number => {
    return items.reduce((acc, item) => acc + (item.price || 0), 0)
  }

  const closeCart = () => {
    dispatch(close())
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.uniqueId}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <span>R$ {formatarPreco(item.price || 0)}</span>
              </div>
              <button
                onClick={() => dispatch(remove(item.uniqueId))}
                type="button"
                title="Remover item"
              >
                🗑️
              </button>
            </CartItem>
          ))}
        </ul>

        <Price>
          Valor total
          <span>R$ {formatarPreco(getTotalPrice())}</span>
        </Price>

        <CheckoutButton type="button">
          Continuar com a entrega
        </CheckoutButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Button from '../Button'
import {Overlay, CartContainer, Sidebar, Price, CartItem} from './styles'

const Cart = () => {
  const items = useSelector(
    (state: RootState) => state.cart.items
  )

  const getTotalPrice = () => {
  return items.reduce((acc, item) => acc + (item.price || 0), 0)
}

  const closeCart = () => {
    console.log('fechar carrinho')
  }

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
                <span>R$ {(item.price || 0).toFixed(2)}</span>
              </div>
            </CartItem>
          ))}
        </ul>

        {/* <p>{items.length} pratos no carrinho</p> */}

        <Price>
          Valor total 
          <span> R$ {getTotalPrice().toFixed(2)} </span>
        </Price>

        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
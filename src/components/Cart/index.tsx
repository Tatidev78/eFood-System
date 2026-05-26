import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import lixeira from '../../assets/images/lixeira.png'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Price,
  CartItem,
  CheckoutButton
} from './styles'
import {
  close,
  remove
} from '../../store/reducers/cart'
import Checkout from '../../pages/Checkout'

const formatarPreco = (preco: number): string => {
  return preco.toFixed(2).replace('.', ',')
}

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector(
    (state: RootState) => state.cart
  )
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const getTotalPrice = (): number => {
    return items.reduce(
      (acc, item) => acc + (item.preco || 0),
      0
    )
  }

  const closeCart = () => {
    dispatch(close())
  }

  // Abre checkout e fecha carrinho
  const goToCheckout = () => {
    dispatch(close())       // fecha carrinho no Redux
    setCheckoutOpen(true)    // abre checkout
  }

  const closeCheckout = () => {
    setCheckoutOpen(false)   // fecha checkout
  }

  // Se ambos fechados, não renderiza nada
  if (!isOpen && !checkoutOpen) {
    return null
  }

  return (
    <>
      {/* CARRINHO - só aparece quando isOpen = true */}
      {isOpen && (
        <CartContainer>
          <Overlay onClick={closeCart} />
          <Sidebar>
            <ul>
              {items.map((item) => (
                <CartItem key={item.uniqueId}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>
                      R$ {formatarPreco(item.preco || 0)}
                    </span>
                  </div>
                  <button
                    onClick={() => dispatch(remove(item.uniqueId))}
                    type="button"
                    title="Remover item"
                  >
                  <img
                      src={lixeira}
                      alt="Remover item"
                    />
                  </button>
                </CartItem>
              ))}
            </ul>

            <Price>
              Valor total
              <span>R$ {formatarPreco(getTotalPrice())}</span>
            </Price>

            <CheckoutButton type="button" onClick={goToCheckout}>
              Continuar com a entrega
            </CheckoutButton>
          </Sidebar>
        </CartContainer>
      )}

      {/* CHECKOUT */}
      {checkoutOpen && (
        <Checkout
          isOpen={checkoutOpen}
          onClose={closeCheckout}
        />
      )}
    </>
  )
}

export default Cart
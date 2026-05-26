import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import DeliveryForm, { DeliveryData } from './DeliveryForm'
import PaymentForm, { PaymentData } from './PaymentForm'
import Confirmation from './Confirmation'

import {
  Overlay,
  CheckoutContainer,
  Sidebar,
  Title,
  LoadingContainer
} from './styles'

type Step = 'delivery' | 'payment' | 'confirmation'

interface CheckoutProps {
  isOpen: boolean
  onClose: () => void
}

const Checkout = ({ isOpen, onClose }: CheckoutProps) => {
  const [step, setStep] = useState<Step>('delivery')

  const [orderId, setOrderId] = useState('')

  // CORREÇÃO AQUI
  const [deliveryData, setDeliveryData] =
    useState<DeliveryData | null>(null)

  const [apiError, setApiError] = useState('')

  const { items } = useSelector(
    (state: RootState) => state.cart
  )

  const dispatch = useDispatch()

  const [purchase, { isLoading }] =
    usePurchaseMutation()

  const goToPayment = (values: DeliveryData) => {
    setApiError('')
    setDeliveryData(values)
    setStep('payment')
  }

  const goToDelivery = () => {
    setApiError('')
    setStep('delivery')
  }

  const handlePayment = async (
    paymentValues: PaymentData
  ) => {
    if (!deliveryData) return

    setApiError('')

    const cleanCardNumber =
      paymentValues.cardNumber.replace(/\s/g, '')

    const cleanCep =
      deliveryData.cep.replace('-', '')

    const body = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),

      delivery: {
        receiver: deliveryData.fullName,

        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: cleanCep,
          number: Number(deliveryData.number),
          complement: deliveryData.complement
        }
      },

      payment: {
        card: {
          name: paymentValues.cardName,
          number: cleanCardNumber,
          code: Number(paymentValues.cvv),

          expires: {
            month: Number(paymentValues.expiryMonth),
            year: Number(paymentValues.expiryYear)
          }
        }
      }
    }

    try {
      const response = await purchase(body).unwrap()

      setOrderId(response.orderId)

      setStep('confirmation')

      dispatch(clear())
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        'Erro ao processar pagamento. Tente novamente.'

      setApiError(errorMessage)
    }
  }

  const handleConclude = () => {
    setStep('delivery')
    setOrderId('')
    setDeliveryData(null)
    setApiError('')
    onClose()
  }

  const handleBackToCart = () => {
    onClose()
  }

  const getTitle = () => {
    switch (step) {
      case 'delivery':
        return 'Entrega'

      case 'payment':
        return 'Pagamento - Valor a pagar R$ 190,90'

      case 'confirmation':
        return `Pedido realizado - ${orderId}`

      default:
        return ''
    }
  }

  if (!isOpen) return null

  if (isLoading) {
    return (
      <CheckoutContainer>
        <Overlay onClick={handleConclude} />

        <Sidebar>
          <LoadingContainer>
            Processando pagamento...
          </LoadingContainer>
        </Sidebar>
      </CheckoutContainer>
    )
  }

  return (
    <CheckoutContainer>
      <Overlay onClick={handleConclude} />

      <Sidebar>
        <Title>{getTitle()}</Title>

        {step === 'delivery' && (
          <DeliveryForm
            onContinue={goToPayment}
            onBackToCart={handleBackToCart}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            onFinish={handlePayment}
            onBack={goToDelivery}
            apiError={apiError}
          />
        )}

        {step === 'confirmation' && (
          <Confirmation
            orderId={orderId}
            onConclude={handleConclude}
          />
        )}
      </Sidebar>
    </CheckoutContainer>
  )
}

export default Checkout
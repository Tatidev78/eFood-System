import { useFormik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import {
  FormContainer,
  FormGroup,
  FormRow,
  ErrorMessage,
  ApiError,
  ButtonPrimary,
  ButtonSecondary
} from './styles'

export interface PaymentData {
  cardName: string
  cardNumber: string
  cvv: string
  expiryMonth: string
  expiryYear: string
}

interface PaymentFormProps {
  onFinish: (values: PaymentData) => void
  onBack: () => void
  apiError?: string
}

const PaymentSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(3, 'Nome muito curto')
    .required('O campo é obrigatório'),
  cardNumber: Yup.string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
    .required('O campo é obrigatório'),
  cvv: Yup.string()
    .matches(/^\d{3}$/, 'CVV inválido')
    .required('O campo é obrigatório'),
  expiryMonth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido (01-12)')
    .required('O campo é obrigatório'),
  expiryYear: Yup.string()
    .matches(/^\d{4}$/, 'Ano inválido')
    .test('ano-futuro', 'Ano deve ser futuro', (value) => {
      if (!value) return false
      return Number(value) >= new Date().getFullYear()
    })
    .required('O campo é obrigatório')
})

const PaymentForm = ({ onFinish, onBack, apiError }: PaymentFormProps) => {
  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: PaymentSchema,
    onSubmit: (values: PaymentData) => {
      onFinish(values)
    }
  })

  // Helper para verificar erro de forma segura
  const hasError = (fieldName: keyof PaymentData): boolean => {
    return Boolean(formik.touched[fieldName] && formik.errors[fieldName])
  }

  // Helper para pegar mensagem de erro
  const getError = (fieldName: keyof PaymentData): string => {
    const touched = formik.touched[fieldName]
    const error = formik.errors[fieldName]
    if (touched && typeof error === 'string') {
      return error
    }
    return ''
  }

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        {apiError && <ApiError>{apiError}</ApiError>}

        <FormGroup>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            placeholder="João Paulo de Souza"
            value={formik.values.cardName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={hasError('cardName') ? 'error' : ''}
          />
          {hasError('cardName') && (
            <ErrorMessage>{getError('cardName')}</ErrorMessage>
          )}
        </FormGroup>

        <FormRow>
          <FormGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              mask="9999 9999 9999 9999"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className={hasError('cardNumber') ? 'error' : ''}
                />
              )}
            </InputMask>
            {hasError('cardNumber') && (
              <ErrorMessage>{getError('cardNumber')}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label htmlFor="cvv">CVV</label>
            <InputMask
              mask="999"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="text"
                  id="cvv"
                  name="cvv"
                  className={hasError('cvv') ? 'error' : ''}
                />
              )}
            </InputMask>
            {hasError('cvv') && (
              <ErrorMessage>{getError('cvv')}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label htmlFor="expiryMonth">Mês de vencimento</label>
            <InputMask
              mask="99"
              value={formik.values.expiryMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="text"
                  id="expiryMonth"
                  name="expiryMonth"
                  placeholder="MM"
                  className={hasError('expiryMonth') ? 'error' : ''}
                />
              )}
            </InputMask>
            {hasError('expiryMonth') && (
              <ErrorMessage>{getError('expiryMonth')}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label htmlFor="expiryYear">Ano de vencimento</label>
            <InputMask
              mask="9999"
              value={formik.values.expiryYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="text"
                  id="expiryYear"
                  name="expiryYear"
                  placeholder="AAAA"
                  className={hasError('expiryYear') ? 'error' : ''}
                />
              )}
            </InputMask>
            {hasError('expiryYear') && (
              <ErrorMessage>{getError('expiryYear')}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>

        <ButtonPrimary type="submit">
          Finalizar pagamento
        </ButtonPrimary>
        <ButtonSecondary type="button" onClick={onBack}>
          Voltar para a edição de endereço
        </ButtonSecondary>
      </form>
    </FormContainer>
  )
}

export default PaymentForm
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import {
  FormContainer,
  FormGroup,
  FormRow,
  ErrorMessage,
  ButtonPrimary,
  ButtonSecondary
} from './styles'

export interface DeliveryData {
  fullName: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

interface DeliveryFormProps {
  onContinue: (values: DeliveryData) => void
  onBackToCart: () => void
}

const DeliverySchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Nome muito curto')
    .required('O campo é obrigatório'),
  address: Yup.string()
    .min(5, 'Endereço muito curto')
    .required('O campo é obrigatório'),
  city: Yup.string()
    .required('O campo é obrigatório'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    .required('O campo é obrigatório'),
  number: Yup.string()
    .required('O campo é obrigatório'),
  complement: Yup.string()
})

const DeliveryForm = ({ onContinue, onBackToCart }: DeliveryFormProps) => {
  const formik = useFormik<DeliveryData>({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: DeliverySchema,
    onSubmit: (values) => {
      onContinue(values)
    }
  })

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="João Paulo de Souza"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.fullName && formik.errors.fullName ? 'error' : ''}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <ErrorMessage>{formik.errors.fullName}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.address && formik.errors.address ? 'error' : ''}
          />
          {formik.touched.address && formik.errors.address && (
            <ErrorMessage>{formik.errors.address}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.city && formik.errors.city ? 'error' : ''}
          />
          {formik.touched.city && formik.errors.city && (
            <ErrorMessage>{formik.errors.city}</ErrorMessage>
          )}
        </FormGroup>

        <FormRow>
          <FormGroup>
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask="99999-999"
              value={formik.values.cep}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="text"
                  id="cep"
                  name="cep"
                  className={formik.touched.cep && formik.errors.cep ? 'error' : ''}
                />
              )}
            </InputMask>
            {formik.touched.cep && formik.errors.cep && (
              <ErrorMessage>{formik.errors.cep}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.number && formik.errors.number ? 'error' : ''}
            />
            {formik.touched.number && formik.errors.number && (
              <ErrorMessage>{formik.errors.number}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>

        <FormGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={formik.values.complement}
            onChange={formik.handleChange}
          />
        </FormGroup>

        <ButtonPrimary type="submit">
          Continuar com o pagamento
        </ButtonPrimary>
        <ButtonSecondary type="button" onClick={onBackToCart}>
          Voltar para o carrinho
        </ButtonSecondary>
      </form>
    </FormContainer>
  )
}

export default DeliveryForm
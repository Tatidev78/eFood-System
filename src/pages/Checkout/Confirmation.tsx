import {
  FormContainer,
  ConfirmationContent,
  ButtonPrimary
} from './styles'

interface ConfirmationProps {
  orderId: string
  onConclude: () => void
}

const Confirmation = ({ orderId, onConclude }: ConfirmationProps) => (
  <FormContainer>
    <ConfirmationContent>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </p>
    </ConfirmationContent>
    <ButtonPrimary type="button" onClick={onConclude}>
      Concluir
    </ButtonPrimary>
  </FormContainer>
)

export default Confirmation
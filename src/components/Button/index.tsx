import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  $cardapio?: 'home' | 'restaurante'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  $cardapio
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        $cardapio={$cardapio}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink
      to={to || '/'}
      title={title}
      $cardapio={$cardapio}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
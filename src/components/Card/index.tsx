import { JSX } from 'react'
import { Container } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    <div>{children}</div>
  </Container>
)

export default Card
import Tag from '../Tag'
import Button from '../Button'

import {
  Card,
  Titulo,
  Descricao,
  Content,
  InfosTags,
  TitleRating
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  nota?: number
  infos?: string[]
  link?: string
  cardapio?: 'home' | 'restaurante'
  onClick?: () => void
}

const Products = ({
  title,
  description,
  image,
  nota,
  infos,
  link,
  cardapio = 'home',
  onClick
}: Props) => {
  const isRestaurante = cardapio === 'restaurante'

  const buttonText = isRestaurante
    ? 'Adicionar ao carrinho'
    : 'Saiba mais'

  return (
    <Card $cardapio={cardapio}>
      <img src={image} alt={title} />

      <InfosTags>
        {infos?.map((info, index) => (
          <Tag key={`${info}-${index}`}>
            {info}
          </Tag>
        ))}
      </InfosTags>

      <Content>
        <TitleRating>
          <Titulo $cardapio={cardapio}>
            {title}
          </Titulo>

          {!isRestaurante && nota && (
            <span className="rating">
              {nota}

              <span className="star">
                ★
              </span>
            </span>
          )}
        </TitleRating>

        <Descricao $cardapio={cardapio}>
          {description}
        </Descricao>
      </Content>

      <Button
        type={isRestaurante ? 'button' : 'link'}
        to={link}
        onClick={onClick}
        title={buttonText}
        $cardapio={cardapio}
      >
        {buttonText}
      </Button>
    </Card>
  )
}

export default Products
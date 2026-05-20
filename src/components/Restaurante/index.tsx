import { useParams } from 'react-router-dom'

import { useGetRestauranteQuery } from '../../services/api'

import PerfilHeader from '../PerfilHeader'
import ProductsList from '../ProductsList'

import { Container } from './styles'

const Restaurante = () => {
  const { id } = useParams()

  const { data: restaurante } =
    useGetRestauranteQuery(Number(id))

  if (!restaurante) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <PerfilHeader
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
        capa={restaurante.capa}
      />

      <Container>
        <ProductsList
          pratos={restaurante.cardapio}
          cardapio="restaurante"
        />
      </Container>
    </>
  )
}

export default Restaurante
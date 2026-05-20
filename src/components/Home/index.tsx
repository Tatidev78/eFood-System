import Hero from '../Hero'
import Products from '../Products'
import { useGetRestaurantesQuery } from '../../services/api'
import { Restaurante } from '../../types'

import { Container } from './styles'

const Home = () => {
  const { data: restaurantes, isLoading } =
    useGetRestaurantesQuery(undefined)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Hero />

      <Container>
        {restaurantes?.map((restaurante: Restaurante) => (
          <Products
            key={restaurante.id}
            title={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            nota={restaurante.avaliacao}
            infos={[restaurante.tipo]}
            link={`/restaurante/${restaurante.id}`}
/>
        ))}
      </Container>
    </>
  )
}

export default Home
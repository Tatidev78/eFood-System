import { useState } from 'react'
import Products from '../Products'
import Modal from '../Modal'
import { Container, List } from './styles'
import { Prato } from '../../types'

export type Props = {
  title?: string
  pratos: Prato[]
  cardapio?: 'home' | 'restaurante'
}

const ProductsList = ({
  title,
  pratos,
  cardapio
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] =
    useState(false)

  const [pratoSelecionado, setPratoSelecionado] =
    useState<Prato | null>(null)

  const abrirModal = (prato: Prato) => {
    if (cardapio === 'restaurante') {
      setPratoSelecionado(prato)
      setModalEstaAberto(true)
    }
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setPratoSelecionado(null)
  }

  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>

        <List $cardapio={cardapio}>
          {pratos.map((prato) => (
            <li key={prato.id}>
              <Products
                title={prato.nome}
                description={prato.descricao}
                image={prato.foto}
                infos={[prato.porcao]}
                cardapio={cardapio}
                onClick={() => abrirModal(prato)}
              />
            </li>
          ))}
        </List>
      </div>

      {modalEstaAberto &&
        pratoSelecionado && (
          <Modal
            prato={pratoSelecionado}
            fecharModal={fecharModal}
          />
        )}
    </Container>
  )
}

export default ProductsList
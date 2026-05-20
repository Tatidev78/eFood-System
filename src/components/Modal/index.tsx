import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import { Prato } from '../../types'
import * as S from './style'

type Props = {
  prato: Prato
  fecharModal: () => void
}

const Modal = ({ prato, fecharModal }: Props) => {
  const dispatch = useDispatch()

  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(prato.preco)

  const adicionarEAbrirCarrinho = () => {
    dispatch(add(prato))
    dispatch(open())
    fecharModal()
  }

  return (
    <S.Overlay>
      <S.Container>
        <S.CloseButton onClick={fecharModal}>
          X
        </S.CloseButton>

        <img
          src={prato.foto}
          alt={prato.nome}
        />

        <S.Content>
          <h2>{prato.nome}</h2>

          <p>{prato.descricao}</p>

          <span>{prato.porcao}</span>

          <button onClick={adicionarEAbrirCarrinho}>
            Adicionar ao carrinho • {precoFormatado}
          </button>
        </S.Content>
      </S.Container>
    </S.Overlay>
  )
}

export default Modal
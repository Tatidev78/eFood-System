import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

import { Prato } from '../../types'
import * as S from './style'

type Props = {
  prato: Prato
  fecharModal: () => void
}

const Modal = ({ prato, fecharModal }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Overlay>
      <S.Container>
        <S.CloseButton onClick={fecharModal}>
          X
        </S.CloseButton>

        <img src={prato.image} alt={prato.title} />

        <S.Content>
          <h2>{prato.title}</h2>

          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa,
            que agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>

          <span>Serve de 2 a 3 pessoas</span>

          <button onClick={() => dispatch(add(prato))}>
            Adicionar ao carrinho - R$ 60,90
          </button>
        </S.Content>
      </S.Container>
    </S.Overlay>
  )
}

export default Modal
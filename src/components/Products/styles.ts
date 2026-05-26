import styled from 'styled-components'
import { cores } from '../../styles'

export type CardProps = {
  cardapio?: 'home' | 'restaurante'
}

export const Card = styled.div<{ $cardapio?: 'home' | 'restaurante' }>`
  width: 100%;
  min-height: 420px;
  max-height: 420px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: ${({ $cardapio }) => ($cardapio === "restaurante" ? "8px" : "0")};

  background-color: ${({ $cardapio }) =>
    $cardapio === 'restaurante'
      ? cores.vermelhoSuave
      : '#FFFFFF'};

  //border-radius: 16px;

  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 8px 24px
      rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;

    display: block;
  }

  button {
    display: block;
    width: 100%;
    border: none;
    padding: 4px 0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    margin-top: auto;

    transition: 0.3s ease;

    background-color: ${({ $cardapio }) =>
      $cardapio === 'restaurante'
        ? '#FFEBD9'
        : cores.vermelhoSuave};

    color: ${({ $cardapio }) =>
      $cardapio === 'restaurante'
        ? cores.vermelhoSuave
        : '#FFEBD9'};

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    min-height: auto;

    img {
      height: 200px;
    }
  }
`

export const InfosTags = styled.div`
  position: absolute;

  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;

  flex-wrap: wrap;

  max-width: 80%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  padding: 16px;

  flex: 1;
`

export const TitleRating = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 12px;

  .rating {
    display: flex;

    align-items: center;

    gap: 4px;

    font-size: 16px;

    font-weight: bold;

    color: ${cores.vermelhoSuave};

    white-space: nowrap;
  }

  .star {
    color: ${cores.vermelhoSuave};

    font-size: 18px;
  }
`

export const Titulo = styled.h3<{
  $cardapio?: 'home' | 'restaurante'
}>`
  color: ${({ $cardapio }) =>
    $cardapio === 'restaurante'
      ? '#FFEBD9'
      : cores.vermelhoSuave};

  font-size: 20px;

  line-height: 26px;

  font-weight: bold;

  margin: 0;
`

export const Descricao = styled.p<{
  $cardapio?: 'home' | 'restaurante'
}>`
  color: ${({ $cardapio }) =>
    $cardapio === 'restaurante'
      ? '#FFEBD9'
      : cores.vermelhoSuave};

  font-size: 15px;

  line-height: 24px;

  font-weight: 400;

  margin: 0;

  display: -webkit-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;

  overflow: hidden;
`

export const ModalOverlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.73);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 999;

  padding: 16px;
`
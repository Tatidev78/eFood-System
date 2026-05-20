import styled from 'styled-components'

export const Container = styled.section`
  padding: 32px 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul<{
  $cardapio?: 'home' | 'restaurante'
}>`
  display: grid;

  grid-template-columns: ${({ $cardapio }) =>
    $cardapio === 'restaurante'
      ? 'repeat(3, 1fr)'
      : 'repeat(2, 1fr)'};

  column-gap: ${({ $cardapio }) => ($cardapio === "restaurante" ? "32px" : "80px")};
  row-gap:48px;
  margin:80px 0;
  list-style: none;
  padding: 0;

  li {
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    row-gap: 24px;
  }
`

export const Title = styled.h2`
  font-size: 18px;

  font-weight: bold;

  margin-bottom: 16px;
`
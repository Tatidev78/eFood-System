import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;

  margin: 0 auto;

  padding: 40px 16px;

  display: grid;

  grid-template-columns: repeat(
    auto-fit,
    minmax(320px, 1fr)
  );

  gap: 24px;

  @media (max-width: 768px) {
    padding: 24px 16px;

    grid-template-columns: 1fr;
  }
`
import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  z-index: 999;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
    position: relative;
    width: 100%;
    max-width: 360px;
    height: 100vh;

    background-color: ${cores.vermelhoSuave};

    padding: 32px 16px 16px;

    overflow-y: auto;

    z-index: 1;
`

export const Price = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 14px; 
    font-weight: 400; 
    line-height: 22px;
    color: ${cores.branca};

    span{
    // display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${cores.branca};
    }
`
// export const Quantity = styled.p`
//     font-weight: bold; 
//     font-size: 14px; 
// `


export const CartItem = styled.li`
  display: flex;
  gap: 8px;

  padding: 8px;
  background-color: #ffe8d9;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;

    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }
`
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
  margin-top: 24px;

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.branca};
  }
`

export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px;
  background-color: #ffe8d9;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: ${cores.vermelhoSuave};
  }

  span {
    font-size: 14px;
    color: ${cores.vermelhoSuave};
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 4px 0;
  background-color: #ffe8d9;
  color: ${cores.vermelhoSuave};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;
`
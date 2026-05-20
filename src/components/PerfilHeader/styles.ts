import styled from "styled-components";
import fundo from "../../assets/images/fundo.png"

export const HeaderBar = styled.div`
  width: 100%;
  height: 186px;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  align-items: center;

  .container {
    font-size:18px;
    font-weight:900;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const Banner = styled.div<{ $capa?: string }>`
  width: 100%;
  height: 280px;
  display:block;
  background-image: url(${props => props.$capa || ''});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    content: '';
  }

  .container {
    position: relative;
    z-index: 1; 
    display: flex;
    flex-direction: column; 
    justify-content: space-between; 
    height: 100%;
    padding: 32px 0; 
    color: #fff; 
    max-width: 1024px; 
    margin: 0 auto;
  }

  h3 {
    font-weight: 100; 
    font-size: 32px;
    opacity: 0.8; 
  }

  h2 {
    font-weight: 900; 
    font-size: 32px;
  }
`

export const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 900;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
`
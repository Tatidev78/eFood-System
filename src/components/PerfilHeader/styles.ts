import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";

export const HeaderBar = styled.div`
  width: 100%;
  height: 186px;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 120px;
  }

  .container {
    font-size: 18px;
    font-weight: 900;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

    img{
    wigth: 100px;
    }

    @media (max-width: 768px) {
      padding: 0 12px;
      

      img {
        width: 60px;
      }

      h2,
      {
        font-size: 14px;
        white-space: nowrap;
      }

      button {
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }
`;

export const Banner = styled.div<{ $capa?: string }>`
  width: 100%;
  height: 280px;
  display: block;
  background-image: url(${props => props.$capa || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
  }

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
    padding: 32px 16px;
    color: #fff;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 16px 12px;
      justify-content: flex-end;
      gap: 8px;
    }
  }

  h3 {
    font-weight: 100;
    font-size: 32px;
    opacity: 0.8;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  h2 {
    font-weight: 900;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 900;
  color: inherit;
  cursor: pointer;
  font-family: inherit;

  @media (max-width: 768px) {
    font-size: 10px;
    white-space: nowrap;
  }
`;
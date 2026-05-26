import styled from 'styled-components';
import fundo from '../../assets/images/fundo.png';

export const HeroBar = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  width: 100%;
  overflow-x: hidden;  /* ← Impede scroll horizontal */

  @media (max-width: 768px) {
    padding: 24px 0;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 0 16px;  /* ← Padding dentro do container */
    box-sizing: border-box;  /* ← Padding não aumenta largura */

    @media (max-width: 768px) {
      height: auto;
      gap: 12px;        /* ← Menos espaço entre elementos */
      padding: 0 12px;  /* ← Padding menor no mobile */
    }
  }

  img {
    width: 125px;
    height: auto;

    @media (max-width: 768px) {
      width: 90px;    /* ← Logo um pouco menor */
    }
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    width: 550px;
    margin: 0 auto 30px;  /* ← Centralizado com margem inferior */
    line-height: 1.2;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      font-size: 28px;
      width: 450px;
    }

    @media (max-width: 768px) {
      font-size: 20px;      /* ← Um pouco menor */
      width: 100%;          /* ← Ocupa toda largura disponível */
      max-width: 320px;     /* ← Limite mais justo */
      margin: 0 auto 16px;  /* ← Margem compacta */
      padding: 0;
    }
  }

  .cta {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e66767;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s;

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 14px;
    }
  }

  .cta:hover {
    background-color: #c44545;
    transform: scale(1.05);
  }
`;
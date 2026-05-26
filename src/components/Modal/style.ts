import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;  /* ← MAIOR que tudo */
  padding: 16px;   /* ← Padding para não colar nas bordas */

  @media (max-width: 768px) {
    align-items: flex-end;  /* ← Modal embaixo no mobile */
    padding: 0;              /* ← Sem padding no mobile */
  }
`

export const Container = styled.div`
  width: 1024px;
  max-width: 90%;           /* ← Limita em desktop */
  max-height: 90vh;         /* ← Não ultrapassa a tela */
  overflow-y: auto;         /* ← Scroll se necessário */

  background-color: #E66767;
  padding: 32px;
  display: flex;
  gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;             /* ← Largura total no mobile */
    max-width: 100%;
    max-height: 85vh;        /* ← Um pouco menor */
    padding: 16px;
    gap: 12px;
    flex-direction: column;  /* ← Empilha no mobile */
    border-radius: 16px 16px 0 0;  /* ← Bordas arredondadas só em cima */
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;           /* ← Largura total */
      height: 200px;         /* ← Menor altura */
    }
  }
`

export const Content = styled.div`
  color: #fff;

  display: flex;
  flex-direction: column;
  flex: 1; /* ocupa o espaço restante */

  h2 {
    font-size: 18px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 20px;
      margin-bottom: 8px;
    }
  }

  span {
    display: block;
    margin-top: auto; /* ← EMPURRA PARA BAIXO */
    margin-bottom: 16px;

    @media (max-width: 768px) {
      margin-bottom: 8px;
    }
  }

  button {
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    padding: 8px 12px;
    font-weight: bold;
    cursor: pointer;
    align-self: flex-start; /* ← mantém tamanho original */

    @media (max-width: 768px) {
      width: 100%;
      padding: 12px;
      font-size: 16px;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
    font-size: 24px;        /* ← Maior para tocar fácil */
    padding: 8px;            /* ← Área de toque maior */
  }
`
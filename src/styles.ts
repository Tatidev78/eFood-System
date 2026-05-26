import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  preto: '#111111',
  vermelhoSuave: '#FF6B6B',
  fundo: '#FFF8F2',
  corTexto: '#FFEBD9',
  fundoTag: '#E66767'  
}

export const GlobalCss = createGlobalStyle`
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    font-family: 'Roboto', sans-serif; 
    list-style: none; 
  }

  html, body {
    overflow-x: hidden;        /* ← Impede scroll horizontal */
    max-width: 100vw;          /* ← Limita largura à viewport */
    width: 100%;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.vermelhoSuave};
    padding-top: 0;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;        /* ← Impede scroll horizontal */
    padding: 0 16px;           /* ← Padding lateral para não colar nas bordas */
    box-sizing: border-box;   /* ← Padding não aumenta largura */

    @media (max-width: 768px) {
      padding: 0 8px;          /* ← Menos padding no mobile */
    }
  }
`

export default GlobalCss
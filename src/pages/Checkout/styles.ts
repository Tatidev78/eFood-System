import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Sidebar = styled.div`
  position: relative;  // ← ADICIONAR: para z-index funcionar
  width: 360px;
  height: 100%;
  background-color: ${cores.fundoTag};
  padding: 32px 8px 32px 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.corTexto};
  margin-bottom: 16px;
`

export const FormContainer = styled.div`
  width: 100%;

  label {
    display: block;
    font-size: 14px;
    line-height: 100%;
    color: ${cores.corTexto};
    margin-bottom: 8px;
    font-weight: 700;
  }

  input {
    background: ${cores.corTexto};
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.corTexto};
    font-size: 14px;
    color: #4a4a4a;

    &.error {
      border-color: ${cores.vermelhoSuave};
    }

    &:focus {
      outline: none;
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
  margin-bottom: 8px;
`

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${cores.branca};
  margin-top: 2px;
`

export const ApiError = styled.div`
  background-color: #fdeaea;
  color: ${cores.vermelhoSuave};
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid ${cores.vermelhoSuave};
  margin-bottom: 16px;
`

export const ButtonPrimary = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.corTexto};
  color: ${cores.fundoTag};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: transparent;
  color: ${cores.corTexto};
  border: 1px solid ${cores.corTexto};
`

export const ConfirmationContent = styled.div`
  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.corTexto};
    margin-bottom: 16px;
  }
`

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 64px;
  font-size: 18px;
  color: ${cores.corTexto};
`
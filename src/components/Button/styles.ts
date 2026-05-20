import styled from "styled-components";
import { Link } from "react-router-dom";

type ButtonProps = {
  $cardapio?: "home" | "restaurante";
};

export const ButtonContainer = styled.button<ButtonProps>`
 background-color: ${({ $cardapio }) =>
    $cardapio === "restaurante" ? "#FFF8F2" : "#FF6670"};
  color: ${({ $cardapio }) =>
    $cardapio === "restaurante" ? "#E66767" : "#FFF8F2"};

  width: ${({ $cardapio }) => ($cardapio === "restaurante" ? "100%" : "auto")};
  display: ${({ $cardapio }) => ($cardapio === "restaurante" ? "block" : "inline-block")};
  margin: ${({ $cardapio }) => ($cardapio === "restaurante" ? "0" : "8px")};
  align-self: ${({ $cardapio }) => ($cardapio === "restaurante" ? "stretch" : "flex-start")};

  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold; 
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  background-color: ${({ $cardapio }) =>
    $cardapio === "restaurante" ? "#FFF8F2" : "#FF6670"};
  color: ${({ $cardapio }) =>
    $cardapio === "restaurante" ? "#E66767" : "#FFFFFF"};

  width: ${({ $cardapio }) => ($cardapio === "restaurante" ? "100%" : "auto")};
  display: ${({ $cardapio }) => ($cardapio === "restaurante" ? "block" : "inline-block")};
  margin: ${({ $cardapio }) => ($cardapio === "restaurante" ? "0" : "8px")};
  align-self: ${({ $cardapio }) => ($cardapio === "restaurante" ? "stretch" : "flex-start")};
  text-align: center;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold; 
  border: none;
  text-decoration:none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
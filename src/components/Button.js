import React from "react";
import styled from "styled-components";

const nhfBlue = "#4a90e2";
const nhfYellow = "#e7ff00";

const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  text-transform: uppercase;
  font-family: "Dosis";
  background-color: ${nhfBlue};
  color: #fff;
  border-radius: 0;
  margin-top: 4rem;
  width: 12rem;
  cursor: pointer;
  font-size: large;

  &:hover {
    background-color: ${nhfYellow};
    color: #000;
  }
`;

export default Button;

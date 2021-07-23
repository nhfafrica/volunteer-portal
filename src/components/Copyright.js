import React from "react";
import styled from "styled-components";

const Copyright = ({ ...props }) => {
  return (
      <CopyrightWrapper {...props}>
      &copy; {new Date().getFullYear()}{" "}
      <a href="//nhfafrica.org" target="_blank" rel="noopener noreferrer">
        Nyuma Harrison Foundation
      </a>
    </CopyrightWrapper>
  );
};

const CopyrightWrapper = styled.div`
  color: black;
  font-family: 'Roboto Condensed';
  font-size: ${({ formpage }) => (formpage ? "1.25rem" : "0.8rem")};

  & > a {
    text-decoration: none;
    color: black;
  }
`;

export default Copyright;

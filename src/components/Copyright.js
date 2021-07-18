import React from "react";
import styled from "styled-components";

const Copyright = (...props) => {
  return (
    <CopyrightWrapper>
      &copy; {new Date().getFullYear()}{" "}
      <a href="//nhfafrica.org" target="_blank" rel="noopener noreferrer">
        Nyuma Harrison Foundation
      </a>
    </CopyrightWrapper>
  );
};

const CopyrightWrapper = styled.div`
  color: black;
  font-size: 0.8rem;

  & > a {
    text-decoration: none;
    color: black;
  }
`;

export default Copyright;

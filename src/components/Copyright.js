import React from "react";
import styled from "styled-components";
const nhfBlue = "#4a90e2";

const Copyright = (...props) => {
  return (
    <CopyrightStyle>
      &copy; {new Date().getFullYear()}{" "}
      <a
        href="//nhfafrica.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nyuma Harrison Foundation
      </a>
    </CopyrightStyle>
  );
};

const CopyrightStyle = styled.div`
  color: #fff;
  font-size: 0.8rem;
  position: absolute;
  bottom: 3rem;
  margin-left: 2rem;

  & > a {
    text-decoration: none;
    color: white;
  }

  @media only screen and (max-width: 1024px) {
    bottom: 2rem;
  }

  @media only screen and (max-width: 786px) {
    position: relative;
    color: ${nhfBlue};
    margin-left: 0;
    align-self: center;
    bottom: 1rem;
  }
`;

export default Copyright;

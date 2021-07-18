import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoWrapper src="/images/logo.png" alt="NHF Logo" />;
};

const LogoWrapper = styled.img`
  width: 150px;
  margin-left: 4rem;
  margin-top: 5rem;
  position: absolute;

  @media only screen and (max-width: 786px) {
    width: 100px;
    margin-left: 2rem;
    margin-top: 3rem;
  }
`;

export default Logo;

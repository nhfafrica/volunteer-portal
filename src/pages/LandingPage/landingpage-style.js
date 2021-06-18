import styled from "styled-components";

const nhfBlue = "#4a90e2";
// const nhfYellow = "#e7ff00";

export const VolunterSplash = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${nhfBlue};
  width: 56%;
`;

export const Copyright = styled.div`
  color: #fff;
  position: absolute;
  bottom: 2%;
  margin-left: 2rem;
  font-size: 0.8rem;
`;

export const TitleText = styled.h1`
  font-family: "Roboto Slab";
  color: #fff;
  margin-left: 8rem;
  font-size: 7rem;
  font-weight: 400;
  margin-top: 12rem;
`;

export const SubtitleText = styled.h4`
  font-family: "Old Standard TT";
  color: #fff;
  margin-left: 8rem;
  margin-top: ${({ type }) => (type === "other-words" ? "2rem" : "0.1rem")};
  font-size: ${({ type }) => (type === "other-words" ? "1.4rem" : "2rem")};
  font-style: italic;

  & > span {
    font-family: "Roboto Slab";
    font-style: normal;
  }
`;

export const Definition = styled.p`
  font-family: "Roboto Slab";
  margin-left: 8rem;
  color: #fff;
  width: 30rem;
  font-size: 1.4rem;
  line-height: 1.5;
  margin-top: 2rem;
`;

export const WarningWrapper = styled.div`
  height: 100vh;
  background-color: #fff;
  width: 44%;
`;

export const Logo = styled.img`
  width: 150px;
  margin-left: 4rem;
  margin-top: 5rem;
`;

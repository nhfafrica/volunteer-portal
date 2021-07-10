import styled from "styled-components";
import Button from "../../components/Button";

const nhfBlue = "#4a90e2";
// const nhfYellow = "#e7ff00";

export const LandingPageComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LandingPageContainer = styled.div`
  width: 100%;
  background-color: #4a90e2;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VolunterSplash = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${nhfBlue};
  width: 56%;
  height: 100vh;

  @media only screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
`;

export const DefinitionContainer = styled.div`
  @media only screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }
`;

export const Copyright = styled.div`
  color: #fff;
  font-size: 0.8rem;
  position: absolute;
  bottom: 3rem;
  margin-left: 2rem;

  @media only screen and (max-width: 786px) {
    position: relative;
    color: ${nhfBlue};
    margin-left: 0;
    align-self: center;
    bottom: 1rem;
  }
`;

export const TitleText = styled.h1`
  font-family: "Roboto Slab";
  color: #fff;
  margin-left: 8rem;
  font-size: 7rem;
  font-weight: 400;
  margin-top: 12rem;

  @media only screen and (max-width: 786px) {
    font-size: 5rem;
    margin-left: 3rem;
    font-size: 4.14rem;
    margin-top: 0rem;
  }
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

  @media only screen and (max-width: 786px) {
    font-size: ${({ type }) =>
      type === "other-words" ? "0.863rem" : "1.4rem"};
    margin-left: 3rem;
    margin-top: ${({ type }) => (type === "other-words" ? "1.4rem" : "0.1rem")};
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

  @media only screen and (max-width: 786px) {
    margin-left: 3rem;
    font-size: 1.2rem;
    width: 76%;
  }
`;

export const WarningWrapper = styled.div`
  background-color: #fff;
  width: 44%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 786px) {
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 4rem;
  }
`;

export const Logo = styled.img`
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

export const WarningSubtitle = styled.h4`
  text-transform: uppercase;
  font-family: "Roboto Condensed";
  margin-top: 6.563rem;

  @media only screen and (max-width: 786px) {
    margin-top: 4rem;
  }
`;

export const WarningTitle = styled.h1`
  text-transform: uppercase;
  font-family: "PT Sans";
  font-size: 1.5rem;
  color: ${nhfBlue};

  @media only screen and (max-width: 786px) {
    margin-top: 5px;
  }
`;

export const WarningText = styled.div`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 1.172rem;
  margin-left: 6rem;
  margin-right: 6rem;
  margin-top: 2rem;

  & > p {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 786px) {
    margin-top: 0.5rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

export const ButtonStyle = styled(Button)`
  text-transform: uppercase;
  font-family: "Dosis";
  background-color: ${nhfBlue};
  color: #fff;
  border-radius: 0;
  margin-top: 4rem;
  width: 12rem;
`;

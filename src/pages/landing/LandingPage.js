import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Copyright from "../../components/Copyright";
import Logo from "../../components/Logo";
const nhfBlue = "#4a90e2";

function LandingPage() {
  return (
    <LandingPageComponent>
      <LandingPageContainer>
        <a href="//nhfafrica.org" target="_blank" rel="noopener noreferrer">
          <Logo />
        </a>
        <VolunterSplash>
          <DefinitionContainer>
            <TitleText>Volunteer</TitleText>
            <SubtitleText>
              noun <span>/vɑː.lənˈtɪr/</span>
            </SubtitleText>
            <Definition>
              A special person who lends a helping hand, a listening ear, offers
              care and support to those in need. They dedicate their time,
              energy, skills and knowledge to make a difference. Someone who is
              caring, generous, thoughtful and selfless.
            </Definition>
            <SubtitleText type="other-words">
              See also: ninja, magician
            </SubtitleText>
          </DefinitionContainer>
        </VolunterSplash>
        <WarningWrapper>
          <WarningSubtitle>Before Volunteering</WarningSubtitle>
          <WarningTitle>Please read this...</WarningTitle>
          <WarningText>
            <p>
              I understand that if selected, I will be a volunteer with NHF.
              This means that I will NOT be paid for my work, transportation,
              meals etc.
            </p>
            <p>
              I understand that as a volunteer, I am NOT entitled to the exact
              same opportunities and benefits that are given to
              full-time/official directors and chiefs of NHF.
            </p>
            <p>
              I understand that volunteering is not a promise for a leadership
              position or payment later.
            </p>
            <p>
              I verify that I have never been suspected of/accused of/
              investigated/ legally punished for any inappropriate behavior
              towards any child/children including verbal abuse, physical abuse,
              neglect.
            </p>
            <p>
              I verify that I have never been suspected of/accused of/
              investigated/ legally punished for stealing supplies, equipment or
              the misuse of organization funds.
            </p>
            <p>
              I understand that I can/will be held legally liable for publicly
              defaming (or attempting to defame) NHF, it’s leaders, its work,
              partners and the children it serves.
            </p>
            <p>
              I understand that I am not permitted to use NHF logos, identifying
              info, funds, pictures or documents without the direct consent of
              the Executive Director.
            </p>
            <p>
              I understand that NHF reserves the right to terminate their
              relationship with me at any time or for any reason and I reserve
              the right to do the same.
            </p>
          </WarningText>
          <Link to="/apply">
            <Button>I agree</Button>
          </Link>
        </WarningWrapper>
      </LandingPageContainer>
      <Copyright />
    </LandingPageComponent>
  );
}

// STYLES
const LandingPageComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingPageContainer = styled.div`
  width: 100%;
  background-color: #4a90e2;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

const VolunterSplash = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${nhfBlue};
  width: 56%;
  height: 100vh;
  justify-content: center;

  @media only screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
`;

const DefinitionContainer = styled.div`
  @media only screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }
`;

const TitleText = styled.h1`
  font-family: "Roboto Slab";
  color: #fff;
  margin-left: 8rem;
  font-size: 7rem;
  font-weight: 400;
  margin-top: 12rem;

  @media only screen and (max-width: 1024px) {
    font-size: 6rem;
    margin-left: 4rem;
  }

  @media only screen and (max-width: 786px) {
    font-size: 5rem;
    margin-left: 3rem;
    font-size: 4.14rem;
    margin-top: 0rem;
  }
`;

const SubtitleText = styled.h4`
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

  @media only screen and (max-width: 1024px) {
    margin-left: 4rem;
  }

  @media only screen and (max-width: 786px) {
    font-size: ${({ type }) =>
      type === "other-words" ? "0.863rem" : "1.4rem"};
    margin-left: 3rem;
    margin-top: ${({ type }) => (type === "other-words" ? "1.4rem" : "0.1rem")};
  }
`;

const Definition = styled.p`
  font-family: "Roboto Slab";
  margin-left: 8rem;
  color: #fff;
  width: 30rem;
  font-size: 1.4rem;
  line-height: 1.5;
  margin-top: 2rem;

  @media only screen and (max-width: 1024px) {
    margin-left: 4rem;
    width: 76%;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 786px) {
    margin-left: 3rem;
    font-size: 1.2rem;
    width: 76%;
  }
`;

const WarningWrapper = styled.div`
  background-color: #fff;
  width: 44%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 786px) {
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 4rem;
  }
`;

const WarningSubtitle = styled.h4`
  text-transform: uppercase;
  font-family: "Roboto Condensed";
  margin-top: 6.563rem;

  @media only screen and (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media only screen and (max-width: 786px) {
    margin-top: 4rem;
  }
`;

const WarningTitle = styled.h1`
  text-transform: uppercase;
  font-family: "PT Sans";
  font-size: 1.5rem;
  color: ${nhfBlue};

  @media only screen and (max-width: 786px) {
    margin-top: 5px;
  }
`;

const WarningText = styled.div`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 1.172rem;
  margin-left: 6rem;
  margin-right: 6rem;
  margin-top: 2rem;

  & > p {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-top: 1rem;
    font-size: 0.9rem;

    & > p {
      margin-top: 0.7rem;
    }
  }

  @media only screen and (max-width: 786px) {
    margin-top: 0.5rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

export default LandingPage;

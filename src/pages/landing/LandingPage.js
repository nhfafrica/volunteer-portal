import React from "react";
import { Link } from "react-router-dom";
import {
  LandingPageComponent,
  LandingPageContainer,
  VolunterSplash,
  Copyright,
  TitleText,
  SubtitleText,
  Logo,
  Definition,
  WarningWrapper,
  WarningSubtitle,
  WarningTitle,
  DefinitionContainer,
  WarningText,
  ButtonStyle,
} from "./landingpage-style";

function LandingPage() {
  return (
    <LandingPageComponent>
      <LandingPageContainer>
        <Logo src="/images/logo.png" />
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
            <ButtonStyle>I agree </ButtonStyle>
          </Link>
        </WarningWrapper>
      </LandingPageContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} Nyuma Harrison Foundation
      </Copyright>
    </LandingPageComponent>
  );
}

export default LandingPage;

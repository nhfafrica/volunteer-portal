import React from "react";
import {
  VolunterSplash,
  Copyright,
  TitleText,
  SubtitleText,
  Logo,
  Definition,
  WarningWrapper,
} from "./landingpage-style";

function LandingPage() {
  const date = new Date();
  return (
    <>
      <VolunterSplash>
        <Logo src="/images/logo.png" />
        <TitleText>Volunteer</TitleText>
        <SubtitleText>
          noun <span>/vɑː.lənˈtɪr/</span>
        </SubtitleText>
        <Definition>
          A special person who lends a helping hand, a listening ear, offers
          care and support to those in need. They dedicate their time, energy,
          skills and knowledge to make a difference. Someone who is caring,
          generous, thoughtful and selfless.
        </Definition>
        <SubtitleText type="other-words">
          See also: ninja, magician
        </SubtitleText>
        <Copyright>&copy; {date.getFullYear()} Nyuma Harrison Foundation</Copyright>
      </VolunterSplash>
      <WarningWrapper></WarningWrapper>
    </>
  );
}

export default LandingPage;

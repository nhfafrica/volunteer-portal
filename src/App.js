import { useEffect } from "react";
import WebFont from "webfontloader";
import { GlobalStyle, MainContent } from "./global-styles";
import { LandingPage } from "./pages";
import "./App.css";

function App() {
  //Load the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Old Standard TT",
          "Dosis",
          "Roboto Slab",
          "Roboto Condensed",
        ],
      },
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <MainContent>
        <LandingPage />
      </MainContent>
    </div>
  );
}

export default App;

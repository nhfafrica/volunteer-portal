import { GlobalStyle, MainContent } from "./global-styles";
import { LandingPage } from "./pages";
import "./App.css";

function App() {
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

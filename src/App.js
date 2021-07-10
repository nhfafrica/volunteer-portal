import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { GlobalStyle } from "./global-styles";
import { LandingPage, FormPage } from "./pages";
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
          "Roboto",
          "Roboto Condensed",
          "PT Sans",
        ],
      },
    });
  }, []);

    return (
    <div className="App">
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/apply" component={FormPage}></Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;

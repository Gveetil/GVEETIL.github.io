import React from 'react';
import path from 'path';
import 'fontsource-roboto';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';
import './App.css';
import theme from './utils/theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PortfolioDialog from './components/PortfolioDialog';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import { DialogProvider } from "./utils/DialogContext";

// Path to images folder
const IMAGE_PATH = path.join(process.env.PUBLIC_URL, "/images/");

// Styling for the application page body
const styles = theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${IMAGE_PATH}background.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "black",
    },
  }
});

// The main application root component
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <DialogProvider>
          <div className="App">
            <CssBaseline />
            <NavBar />
            <Switch>
              <Route exact path="/Portfolio" >
                <Portfolio />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
            <PortfolioDialog />
            <Footer />
          </div>
        </DialogProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default withStyles(styles)(App);

import React from 'react';
import 'fontsource-roboto';
import 'typeface-mada';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';
import { DialogProvider } from "./utils/DialogContext";
import utilities from "./utils/utilities";
import theme from './utils/theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PortfolioDialog from './components/PortfolioDialog';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';

// Styling for the application page body
const styles = theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${utilities.imageFolder}background.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#fff",
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

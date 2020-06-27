import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';

// Load breakpoint
const breakpoints = createBreakpoints({})

// Create a theme instance to be used to style the portfolio application.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[900],
            contrastText: '#fff',
        },
        secondary: {
            main: lightBlue[700],
            contrastText: '#fff',
        },
        background: {
            default: '#fff',
            contrastText: '#000',
        },
        text: {
            secondary: blueGrey[200],
        },
        portfolioOverlay: {
            main: blueGrey[700],
            contrastText: '#fff',
        },
        portfolioOverlayItems: {
            main: '#fff',
            contrastText: '#000',
        },
        portfolioFooter: {
            main: blueGrey[900],
            contrastText: blueGrey[100],
        }
    },
    typography: {
        fontFamily: '"Mada", Arial, Helvetica, sans-serif',
        overline: {
            fontSize: "small"
        },
        h5: {
            color: blueGrey[700],
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            fontWeight: "bold",
            marginTop: "1rem",
            marginBottom: "1rem",
            [breakpoints.up('md')]: {
                marginTop: "2.5rem",
                marginBottom: "2.5rem",
            }
        },
    },
    overrides: {
        MuiLink: {
            root: {
                color: lightBlue[400],
                "&:hover": {
                    color: lightBlue[600],
                }
            },
        },
    },
    toolbar: {
        border: "3px solid #04c2c9",
    },
});

export default theme;
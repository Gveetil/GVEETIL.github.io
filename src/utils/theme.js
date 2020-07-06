import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import teal from '@material-ui/core/colors/teal';

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
            main: blueGrey[800],
            contrastText: '#fff',
        },
        portfolioFooter: {
            main: blueGrey[700],
            contrastText: blueGrey[100],
            linkText: lightBlue[100],
            linkHover: "lightPink",
        },
        footer: {
            main: blueGrey[600],
            contrastText: blueGrey[900],
            border: teal[300],
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
        MuiChip: {
            sizeSmall: {
                margin: "0.2rem",
                height: "20px",
                borderRadius: 4,
                backgroundColor: blueGrey[50],
            },
            labelSmall: {
                fontWeight: "500",
                paddingLeft: "0.3rem",
                paddingRight: "0.3rem",
                margin: "0rem",
                color: '#000',
            }
        },
        MuiInputLabel: {
            root: {
                color: "grey",
            },
        }
    },
});

export default theme;
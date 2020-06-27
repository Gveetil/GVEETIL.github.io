import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const breakpoints = createBreakpoints({})

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[900],
            contrastText: '#fff',
        },
        secondary: {
            main: lightBlue[600],
            contrastText: '#fff',
        },
        background: {
            default: '#fff',
            contrastText: '#000',
        },
        text: {
            secondary: "gray",
        },
        portfolio: {
            main: blueGrey[700],
            contrastText: '#fff',
        }
    },
    typography: {
        h5: {
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
    }
});

export default theme;
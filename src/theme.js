import { createMuiTheme } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

export const theme = createMuiTheme({

    palette: createPalette({
        primary: {
          main: "#0F172A",
          contrastText: "#051117",
        },
        secondary: {
        main: '#134E4A',
        contrastText: "#BFC3C6",
        },
      }),
      shadows: ["none"],
  
      overrides: {
        MuiButton: {
          text: {
            color: "#3C3C3C",
            textTransform: "none",
            padding: "10px 30px",
            borderRadius: "0px",
            letterSpacing: "1.3px",
          }
        }
      }
  });
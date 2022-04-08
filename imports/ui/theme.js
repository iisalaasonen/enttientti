import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
/*
yellow green #dba40e
gunmetal gray #4b5a20
olive #787d12
olive green #7e6e13
*/
/*
mui breakpoints
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            body {
              height: 100vh;
              background-image: url("/imgs/forest.jpg");
              repeat:no-repeat;
            }
            a {
                text-decoration: none;
                color: #fff;
            }
          `,
    },
  },
  palette: {
    background: {
      default: "rgba(75, 90, 32, 0.8)",
      paper: "rgba(75, 90, 32, 1)",
    },
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#787d12",
    },
  },
  typography: {},
  spacing: 8,
});

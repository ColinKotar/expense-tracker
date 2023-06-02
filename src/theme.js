import { createTheme } from "@mui/material"

export const colors = {
  primaryMain: "rgba(245, 245, 245, 1)",
  secondaryMain: "rgba(133, 30, 198, 1)",
  secondaryLight: "rgba(133, 30, 198, 0.5)",
  textPrimary: "rgba(255, 255, 255, 1)",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  backgroundDark: "rgba(20, 20, 20, 1)",
  backgroundDefault: "rgba(30, 30, 30, 1)",
  backgroundLight: "rgba(40, 40, 40)",
  backgroundLighter: "rgba(50, 50, 50, 1)",
  backgroundLightest: "rgba(55, 55, 55, 1)",
}

export const theme = createTheme({
  transitions: {
    duration: {
      shortest: 125,
      shorter: 150,
      short: 175,
      standard: 200,
      complex: 300,
      enteringScreen: 100,
      leavingScreen: 50,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors.primaryMain,
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    background: {
      default: colors.backgroundDefault,
      dark: colors.backgroundDark,
      light: colors.backgroundLight,
      lighter: colors.backgroundLighter,
      lightest: colors.backgroundLightest,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Top level
        "#root": {
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
        html: {
          height: "100%",
          margin: 0,
          border: 0,
          scrollBehavior: "smooth",
        },
        body: { height: "100%" },
      },
    },
  },
})

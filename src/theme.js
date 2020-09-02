import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  // Customizing the palette
  palette: {
    secondary: {
      main: "#5f0937",
    },
  },

  typography: {
    h4: {
      fontWeight: 900,
      letterSpacing: "0.05em",
      fontSize: ".9rem",
    },

    h5: {
      fontWeight: 900,
      letterSpacing: "0.05em",
      fontSize: ".8rem",
    },

    h6: {
      fontWeight: 900,
      letterSpacing: "0.05em",
      fontSize: ".7rem",
    },

    body1: {
      fontWeight: 700,
      letterSpacing: "0.05em",
      fontSize: ".9rem",
    },

    body2: {
      fontWeight: 700,
      letterSpacing: "0.05em",
      fontSize: ".7rem",
    },
  },

  // Overriding components settings
  overrides: {
    MuiTypography: {
      gutterBottom: {
        gutterBottom: "false",
        marginBottom: "1em",
      },
    },

    MuiSvgIcon: {
      root: {
        fontSize: "1.1rem",
      },
    },

    MuiButton: {
      textSecondary: {
        color: "#ffffff",
      },

      containedSizeSmall: {
        fontSize: "0.6rem",
      },
    },

    MuiIconButton: {
      label: {
        color: "white",
      },
    },

    MuiTab: {
      root: {
        fontSize: "0.6rem",
        fontWeight: "900",
      },
    },

    MuiTabs: {
      root: {
        marginTop: 40,
        marginBottom: 40,
      },
    },

    MuiFormLabel: {
      root: {
        color: "red",
        fontSize: "0.9rem",
        fontWeight: 600,
      },
    },

    MuiMenuItem: {
      root: {
        fontSize: "0.7rem",
        fontWeight: 700,
      },
    },

    MuiInputBase: {
      input: {
        color: "red",
        fontSize: "0.7rem",
        fontWeight: 600,
      },
    },
  },

  // Overriding components settings with its props
  props: {
    MuiButton: {
      color: "secondary",
      variant: "contained",
      size: "small",
    },

    MuiTypography: {
      color: "secondary",
    },
  },
});

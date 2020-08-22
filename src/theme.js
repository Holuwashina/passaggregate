import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme( {

        // Customizing the palette 
         palette: {
           secondary: {
             main: "#5f0937",
           },
         },

         typography: {
           h6: {
             fontWeight: 900,
             letterSpacing: "0.05em",
             fontSize: "1rem",
           },

           h5: {
             fontWeight: 900,
             letterSpacing: "0.05em",
             fontSize: "1rem",
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

             label: {
               color: "white",
             },
           },

           MuiIconButton: {
             label: {
               color: "white",
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
             color: "seconadry",
           },
         },
       });

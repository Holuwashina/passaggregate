import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Features () {

  
  return (
      <Grid container>
          <Box width="100%" display="flex" justifyContent="center">
              <Typography variant="h6">LATEST FEATURES</Typography>
          </Box>
 
        <Grid item xs={4}>
        one
        </Grid>
      
        <Grid item xs={4}>
        two
        </Grid>
      
        <Grid item xs={4}>
        three
        </Grid>
      
      </Grid>
  );
}

export default Features;

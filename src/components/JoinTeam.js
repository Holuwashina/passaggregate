import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import team from "../images/Team.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  p: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(2),
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(21),
    },
  },

  buttonText: {
    color: "red",
    fontWeight: 700,
    fontSize: "0.7rem",
    letterSpacing: "0.06em",
  },
}));

function JoinTeam () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} md={6}>
          <img src={team} height='300px' width='90%' alt='' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className={classes.p}
            justifyContent='center'
            alignItems='center'
          >
            <Typography gutterBottom color='error' component='h5' variant='h5'>
              JOIN OUR TEAM
            </Typography>
            <Typography gutterBottom component='p' variant='body1'>
              We are looking forward to work with experienced developer,
              academic tutor, online instructor and anyone who is ready to add
              value to this project...
            </Typography>
            <Button className={classes.buttonText} variant='text'>
              Learn more...
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default JoinTeam;
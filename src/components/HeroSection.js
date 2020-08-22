import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import heroBg from "../images/hero-background.svg";
import heroRight from "../images/hero.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${heroBg})`,
    backgroundAttachment: "fixed",
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 700,
    },
  },

  order: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  textLeft: {
    [theme.breakpoints.up("sm")]: {
      alignItems: "start",
    },
  },
}));


function HeroSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.order}>
        <Grid item xs={12} md={5}>
          <Box
            className={classes.textLeft}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            style={{ height: "100%" }}
          >
            <Typography gutterBottom='true' color='error' variant='h5'>
              PASSAGGREGATE
            </Typography>
            <Typography gutterBottom='true' variant='h6'>
              Passaggregate is the best online learning plat-form in Nigeria, a
              broad plat-form for Universities, Polytechnics, Secondary Schools
              and Primary Schools.
            </Typography>
            <Button>Explore</Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <img src={heroRight} height='500px' width='100%' alt='hero image' />
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import heroBg from "../images/hero-bg.svg";
import heroRight from "../images/hero.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${heroBg})`,
    backgroundAttachment: "fixed",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 600,
    },
  },

  order: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  textLeft: {
    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(2),
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: theme.spacing(5),
      alignItems: "start",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(18),
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
            <Typography gutterBottom color='error' component='h5' variant='h5'>
              PASSAGGREGATE
            </Typography>
            <Typography gutterBottom component='p' variant='body1'>
              Passaggregate is the best online learning plat-form in Nigeria, a
              broad plat-form for Universities, Polytechnics, and Secondary
              Schools.
            </Typography>
            <Button endIcon={<ExpandMoreIcon />}>
              Explore
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <img src={heroRight} height='400px' width='100%' alt='hero' />
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;

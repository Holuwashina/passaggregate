import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { supportList } from "../listData/supportListData";

const useStyles = makeStyles((theme) => ({
  client: {
    textAlign: "center",
  },
  clientLogo: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  clientText: {
    textAlign: "center",
    marginTop: theme.spacing(6),
  },
}));

function Support() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.clientText}
        container
        justify='center'
        alignItems='center'
      >
        {supportList.map((list) => (
          <Grid key={list.index} className={classes.client} item xs={4}>
            <img className={classes.clientLogo} src={list.img} alt='' />
          </Grid>
        ))}
        <Grid className={classes.clientText} item xs={12} sm={8} md={5}>
          <Typography
            gutterBottom
            component='h5'
            variant='h5'
            style={{ color: "red" }}
          >
            SUPPORT THE PROJECT
          </Typography>
          <Typography gutterBottom component='p' variant='body1'>
            Passaggregate is looking for brands willing to support our project
            and be featured on our site.
          </Typography>
          <Button>Learn more</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Support;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      maxWidth: "420px",
      minWidth: "300px",
    },
  
    cardHeader: {
      color: "red",
    },
  
    details: {
      display: "flex",
      flexDirection: "column",
    },
  
    cover: {
      width: 200,
    },
  }));

function UtmePostutmeCard({btn, heading, price, img}) {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent>
                  <Typography
                    className={classes.cardHeader}
                    gutterBottom
                    component='h6'
                    variant='h6'
                  >
                    {heading}
                  </Typography>
                  <Typography gutterBottom component='p' variant='body2'>
                    Score very high in your upcoming {heading} practicing past
                    questions. No excuse for failure!!!
                  </Typography>
                  <Alert severity='info'>
                    <span>&#8358;</span>
                    {price} / Month
                  </Alert>
                </CardContent>
                <Divider variant='middle' />
                <CardActions>
                  {btn}               
               </CardActions>
              </div>
              <CardMedia className={classes.cover} image={img}></CardMedia>
            </Card>
        </>
    )
}

export default UtmePostutmeCard

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { postSchoolData } from "../listData/postSchoolData";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
  },
  cardRoot: {
    minWidth: 275,
    maxWidth: 290,
  },

  heading: {
    marginBottom: theme.spacing(3),
  },

  card1: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
  },

  card2: {
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
  },

  share: {
    color: "red",
  },

  cardButton: {
    color: "red",
    fontWeight: 700,
    fontSize: "0.7rem",
    letterSpacing: "0.06em",
  },

  cardText: {
    marginTop: theme.spacing(2),
  },
}));

function PostSchool() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} component='h5' variant='h5'>
        UTME / POST-UTME
      </Typography>
      <Grid container justify='center' spacing={3}>
        {postSchoolData.map((list) => {
          return (
            <Grid key={list.index} item xs={12} sm={6}>
              <Box
                display='flex'
                className={list.index === 0 ? classes.card1 : classes.card2}
              >
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt=''
                      height='140'
                      image={list.image}
                      title=''
                    />
                    <CardContent>
                      <Typography component='h5' variant='h5'>
                        {list.platform}
                      </Typography>
                      <Typography component='h6' variant='h6'>
                        {list.number}
                      </Typography>
                      <Typography
                        className={classes.cardText}
                        component='p'
                        variant='body2'
                      >
                        {list.message}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <ShareIcon className={classes.share} />
                    </IconButton>
                    <Button className={classes.cardButton} variant='text'>
                      start
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default PostSchool;

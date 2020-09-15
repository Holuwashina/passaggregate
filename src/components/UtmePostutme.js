import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from "@material-ui/core";
import jamb from "../images/jamb.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
  },

  grid: {
    display: "flex",
    justifyContent: "center",
  },

  card: {
    display: "flex",
    maxWidth: "420px",
    minWidth: "300px",
  },

  cardHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    padding: "10px 15px",
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },

  cover: {
    width: 200,
  },

  btnText: {
    color: "red",
    fontWeight: 700,
    fontSize: "0.6rem",
    letterSpacing: "0.06em",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UtmePostutme() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label='Utme' {...a11yProps(0)} />
        <Tab label='Post-utme' {...a11yProps(1)} />
      </Tabs>

      <TabPanel key={value} value={value} index={0}>
        <Grid container justify='center' alignItems='center'>
          <Grid className={classes.grid} item xs={12} sm={10} md={8}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <Typography
                  className={classes.cardHeader}
                  component='h6'
                  variant='h6'
                >
                  UTME / JAMB CBT
                </Typography>
                <CardContent>
                  <Typography gutterBottom component='p' variant='body2'>
                    Score very high in your upcoming utme practicing past
                    questions. No excuse for failure!!!
                  </Typography>
                  <Alert severity='info'>
                    <span>&#8358;</span>1000 / Month
                  </Alert>
                </CardContent>
                <Divider variant='middle' />
                <CardActions>
                  <Button
                    className={classes.btnText}
                    variant='text'
                    endIcon={<CenterFocusWeakIcon />}
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </div>
              <CardMedia className={classes.cover} image={jamb}></CardMedia>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}

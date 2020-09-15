import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
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
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { universityData, polytechnicData } from "../listData/selectSchoolData";
import jamb from "../images/jamb.jpg";
import postUtme from "../images/post-utme.jpg";
import University from "../components/University";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    color: "red",
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },

  cover: {
    width: 200,
  },

  form: {
    margin: "15px 0",
    minWidth: "250px",
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
  const [radio, setRadio] = React.useState("university");
  const [isVisible, setIsVisible] = React.useState(false);

  const handleIsVisible = () => {
    setIsVisible(true);
  };

  const handleRadio = (event) => {
    setRadio(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label='Utme' {...a11yProps(0)} />
        <Tab label='Post-utme' {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container justify='center' alignItems='center'>
          <Grid className={classes.grid} item xs={12} sm={10} md={8}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent>
                  <Typography
                    className={classes.cardHeader}
                    gutterBottom
                    component='h6'
                    variant='h6'
                  >
                    UTME / JAMB CBT
                  </Typography>
                  <Typography gutterBottom component='p' variant='body2'>
                    Score very high in your upcoming UTME practicing past
                    questions. No excuse for failure!!!
                  </Typography>
                  <Alert severity='info'>
                    <span>&#8358;</span>
                    {"1,000"} / Month
                  </Alert>
                </CardContent>
                <Divider variant='middle' />
                <CardActions>
                  <Button endIcon={<CenterFocusWeakIcon />}>Subscribe</Button>
                </CardActions>
              </div>
              <CardMedia className={classes.cover} image={jamb}></CardMedia>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container justify='center' alignItems='center'>
          <Grid className={classes.grid} item xs={12} sm={10} md={8}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent>
                  {isVisible ? (
                    <>
                      <RadioGroup
                        row
                        aria-label='School'
                        value={radio}
                        onChange={handleRadio}
                      >
                        <FormControlLabel
                          label='University'
                          value='university'
                          control={<Radio />}
                        />
                        <FormControlLabel
                          label='Polytechnic'
                          value='polytechnic'
                          control={<Radio />}
                        />
                      </RadioGroup>

                      {radio === "university" && (
                        <University platform={universityData} />
                      )}
                      {radio === "polytechnic" && (
                        <University platform={polytechnicData} />
                      )}
                    </>
                  ) : (
                    <>
                      <Typography
                        className={classes.cardHeader}
                        gutterBottom
                        component='h6'
                        variant='h6'
                      >
                        POST-UTME CBT
                      </Typography>
                      <Typography gutterBottom component='p' variant='body2'>
                        Score very high in your upcoming POST-UTME practicing
                        past questions. No excuse for failure!!!
                      </Typography>
                      <Alert severity='info'>
                        <span>&#8358;</span>
                        {"1,500"} / Month
                      </Alert>
                    </>
                  )}
                </CardContent>
                <Divider variant='middle' />
                <CardActions>
                  <Button
                    onClick={handleIsVisible}
                    endIcon={<SlowMotionVideoIcon />}
                  >
                    Start
                  </Button>
                  <Button endIcon={<CenterFocusWeakIcon />}>Subscribe</Button>
                </CardActions>
              </div>
              {isVisible ? null : (
                <CardMedia
                  className={classes.cover}
                  image={postUtme}
                ></CardMedia>
              )}
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}

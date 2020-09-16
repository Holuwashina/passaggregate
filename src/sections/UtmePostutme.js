import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import jamb from "../images/jamb.jpg";
import postUtme from "../images/post-utme.jpg";
import UtmePostutmeCard from "../components/UtmePostutmeCard";
import RadioBtn from "../components/RadioBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  grid: {
    display: "flex",
    justifyContent: "center",
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
  const [isVisible, setIsVisible] = React.useState(false);

  const handleIsVisible = () => {
    setIsVisible(true);
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
            <UtmePostutmeCard 
            btn= {<Button size='small' endIcon={<GraphicEqIcon />}>Explore</Button> } 
            heading= "UTME"
            img= {jamb}
            price= "1,000"
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container justify='center' alignItems='center'>
          <Grid className={classes.grid} item xs={12} sm={10} md={8}>
          {
          isVisible 
          ? 
          <RadioBtn />
          : 
          <UtmePostutmeCard 
          btn= {<Button onClick={handleIsVisible} size='small' endIcon={<GraphicEqIcon />}>Explore</Button> }
          heading= "POST-UTME"
          img= {postUtme}
          price= "1,500"
          />
          }
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Box, Grid } from "@material-ui/core";
import {
  selectSchoolData,
  universityData,
  polytechnicData,
  secondaryData,
} from "../listData/selectSchoolData";
import University from "../components/University";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  img: {
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
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

export default function SchoolSelection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label='University' {...a11yProps(0)} />
        <Tab label='Polytechnic' {...a11yProps(1)} />
        <Tab label='Secondary School' {...a11yProps(2)} />
      </Tabs>

      {selectSchoolData.map((platform) => (
        <TabPanel key={platform.index} value={value} index={platform.index}>
          <Grid container justify='center' alignItems='center'>
            <Grid className={classes.grid} item xs={12} sm={5}>
              <img src={platform.img} className={classes.img} alt='' />
            </Grid>

            <Grid className={classes.grid} item sm={12} md={7}>
              
                  {platform.index === 0 && (
                    <University platform={universityData} />
                  )}

                  {platform.index === 1 && (
                    <University platform={polytechnicData} />
                  )}

                  {platform.index === 2 && (
                    <University platform={secondaryData} />
                  )}
                
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}

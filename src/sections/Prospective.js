import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Grid } from '@material-ui/core';
import PostUtme from '../components/PostUtme';
import uniStudent from '../images/uni-student.svg';
import Utme from '../components/Utme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  order: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  img: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },

  grid: {
    display: 'flex',
    justifyContent: 'center',
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Prospective() {
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

      <TabPanel value={value} index={0}>
        <Grid container className={classes.order} justify='center' alignItems='center'>
          <Grid className={classes.grid} item sm={12} md={6}>
            <Utme />
          </Grid>

          <Grid className={classes.grid} item xs={12} sm={5}>
            <img src={uniStudent} className={classes.img} alt='' />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container className={classes.order} justify='center' alignItems='center'>
          <Grid className={classes.grid} item sm={12} md={6}>
            <PostUtme />
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={5}>
            <img src={uniStudent} className={classes.img} alt='' />
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}

export default Prospective;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import SendIcon from "@material-ui/icons/Send";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@material-ui/core";
import {
  selectSchoolData,
  universityList,
  polyList,
  secList,
} from "../listData/selectSchoolData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  img: {
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  card: {
    minWidth: "400px",
    [theme.breakpoints.only("xs")]: {
      minWidth: "300px",
    },
  },

  grid: {
    display: "flex",
    justifyContent: "center",
  },

  typo: {
    margin: theme.spacing(2),
  },

  cardAction: {
    flexDirection: "column",
    justifyContent: "center",
  },

  textField: {
    marginBottom: 15,
  },

  alert: {
    marginBottom: theme.spacing(2),
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
  const [university, setUniversity] = React.useState("DEFAULT");
  const [value, setValue] = React.useState(0);

  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setUniversity("DEFAULT");
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label='University' {...a11yProps(0)} />
        <Tab label='Polytechnic' {...a11yProps(1)} />
        <Tab label='Secondary School' {...a11yProps(2)} />
      </Tabs>

      {selectSchoolData.map((tab) => (
        <TabPanel key={tab.index} value={value} index={tab.index}>
          <Grid container justify='center' alignItems='center'>
            <Grid className={classes.grid} item xs={12} sm={5}>
              <img src={tab.img} className={classes.img} alt='' />
            </Grid>

            <Grid className={classes.grid} item sm={12} md={7}>
              <Card className={classes.card}>
                <CardContent>
                  <Alert className={classes.alert} severity='info'>
                    Select your school below to continue
                  </Alert>
                  <FormControl size='small' fullWidth variant='outlined'>
                    <InputLabel id='demo'>{tab.platform}</InputLabel>
                    <Select
                      id={tab.platform}
                      value={university}
                      onChange={handleUniversity}
                      label={tab.platform}
                    >
                      <MenuItem value='DEFAULT'>DEFAULT</MenuItem>

                      {tab.index === 0 &&
                        universityList.map((uni) => (
                          <MenuItem key={uni.index} value={uni.school}>
                            {uni.school}
                          </MenuItem>
                        ))}

                      {tab.index === 1 &&
                        polyList.map((poly) => (
                          <MenuItem key={poly.index} value={poly.school}>
                            {poly.school}
                          </MenuItem>
                        ))}

                      {tab.index === 2 &&
                        secList.map((sec) => (
                          <MenuItem key={sec.index} value={sec.school}>
                            {sec.school}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </CardContent>
                <CardActions className={classes.cardAction}>
                  <TextField
                    className={classes.textField}
                    variant='outlined'
                    id='outlined-disabled'
                    disabled
                    label='Selected'
                    value={university}
                  />
                  <Button
                    size='small'
                    disabled={university === "DEFAULT"}
                    endIcon={<SendIcon />}
                  >
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}

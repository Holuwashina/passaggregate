import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tabs,
  Tab,
  Typography,
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
import { selectSchoolData } from "../listData/selectSchoolData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
  },

  formControl: {
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  img: {
    borderRadius: "50%",
    width: 240,
    height: 240,
    margin: "auto",
  },

  muiBox: {
    margin: "auto",
    [theme.breakpoints.only("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
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
    setValue( newValue );
    setUniversity( "DEFAULT" );
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label='University' {...a11yProps(0)} />
        <Tab label='Polytechnic' {...a11yProps(1)} />
        <Tab label='Secondary School' {...a11yProps(2)} />
      </Tabs>

      {selectSchoolData.map((school) => {
        return (
          <TabPanel key={school.index} value={value} index={school.index}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} sm={5}>
                <Box display='flex' justifyContent='center'>
                  <img src={school.img} className={classes.img} alt='' />
                </Box>
              </Grid>

              <Grid item sm={12} md={7}>
                <Box
                  className={classes.muiBox}
                  p={1}
                  dispaly='flex'
                  justifyContent='center'
                >
                  <Card>
                    <CardContent>
                      <Typography className={classes.typo} component="h6" variant='h6'>
                        CHOOSE YOUR SCHOOL BELOW TO CONTINUE
                      </Typography>
                      <FormControl
                        size='small'
                        fullWidth
                        variant='outlined'
                        className={classes.formControl}
                      >
                        <InputLabel id='demo'>{school.platform}</InputLabel>
                        <Select
                          id={school.platform}
                          value={university}
                          onChange={handleUniversity}
                          label={school.platform}
                        >
                          <MenuItem value={school.schoolLists.default}>
                            {school.schoolLists.default}
                          </MenuItem>
                          <MenuItem value={school.schoolLists.one}>
                            {school.schoolLists.one}
                          </MenuItem>
                          <MenuItem value={school.schoolLists.two}>
                            {school.schoolLists.two}
                          </MenuItem>
                          <MenuItem value={school.schoolLists.three}>
                            {school.schoolLists.three}
                          </MenuItem>
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
                      <Button size='small' disabled={university === "DEFAULT"}>
                        Continue
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        );
      })}
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Box } from "@material-ui/core";
import logo from "../images/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CallIcon from "@material-ui/icons/Call";
import MenuIcon from "@material-ui/icons/Menu";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WigetIcon from "../listRenderingComponents/WigetIcon";
import wigetIconsData from "../listData/wigetIconsData";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  logo: {
    maxWidth: 100,
    maxHeight: 24,
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Wiget() {
  const classes = useStyles();

  const IconsList = wigetIconsData.map((icon) => (
    <WigetIcon key={icon.id} icon={icon}></WigetIcon>
  ));

  return (
    <AppBar color='secondary' position='fixed'>
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>

        <Link href='#'>
          <img className={classes.logo} src={logo} alt='passaggregate' />
        </Link>

        <div style={{ width: "100%" }}>
          <Box display='flex' justifyContent='center'>
            {IconsList}
          </Box>
        </div>

        <IconButton>
          <AccountCircle className={classes.icons} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Wiget;

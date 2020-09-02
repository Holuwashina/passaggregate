import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { wigetIconsData } from "../listData/wigetIconsData";
import logo from "../images/logo.png";

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

            {wigetIconsData.map((icon) => (
              <Link key={icon.id} href={icon.link}>
                <IconButton>{icon.name}</IconButton>
              </Link>
            ) )}
            
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

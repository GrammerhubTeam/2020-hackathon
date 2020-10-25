import React from "react";
// import Layout from "../components/MyLayout";
// import AboutUs from "../components/Home/AboutUs/AboutUs";
// import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, /*makeStyles,*/ Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));


const MiniNavbar = () => {
  // const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" /*className={classes.menuButton}*/ color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" /*className={classes.title}*/>
          BURRRR
        </Typography>
        <Button color="inherit">YOOOO</Button>
      </Toolbar>
    </AppBar>
)};

export default MiniNavbar;

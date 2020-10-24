import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Camera from "@material-ui/icons/Camera"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const style = {
    position: "absolute",
    bottom: 0,
    width: "100%"
}

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div style={style}>

        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            /*className={classes.root}*/
            >
            <BottomNavigationAction label="Recents" icon={<ArrowBack />} />
            <BottomNavigationAction label="Scan QR" icon={<Camera />} />
            <BottomNavigationAction label="Nearby" icon={<ArrowForward />} />
        </BottomNavigation>
    </div>

  );
}
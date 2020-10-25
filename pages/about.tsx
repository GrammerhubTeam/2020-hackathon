import React from "react";
import Layout from "../components/MyLayout";
// import AboutUs from "../components/Home/AboutUs/AboutUs";
// import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, /*makeStyles,*/ Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
let QrReader: any = null
if (typeof window !== 'undefined') {
  QrReader = require('react-qr-reader')
}
import Story from "Services/Story";

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


const About = () => {
  const isBrowser = typeof window !== 'undefined'
  const [result, setResult] = React.useState<any>('No Result')
  React.useEffect(() => {
    console.log(result)
  }, [result])

  const previewStyle = {
    height: 450,
    // width: 320,
    width: '100%'
  }

  const handleScan = (data: any) => {
    if (data) setResult(data)
  }
  const handleError = (err: any) => {
    console.log("ERRRR:", err)
  }
  // const classes = useStyles();
  return (
  <Layout>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" /*className={classes.menuButton}*/ color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" /*className={classes.title}*/>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    {isBrowser && QrReader && <QrReader
      delay={300}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />}
    <Story />
  </Layout>
)};

export default About;

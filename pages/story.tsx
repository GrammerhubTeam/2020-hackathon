import React from "react";
import axios from 'axios';
import Layout from "../components/MyLayout";
// import AboutUs from "../components/Home/AboutUs/AboutUs";
// import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, /*makeStyles,*/ Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

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


const StoryPage = (props: any) => {
  const [idx, setIdx] = React.useState(0)

  const onNextStory = () => {
    if (idx < (props.stories?.length || 0)) {
      setIdx(idx + 1)
    }
  }
  
  // const classes = useStyles();
  return (
  <Layout onNextStory={onNextStory}>   
    
    <Story idx={idx} stories={props.stories} />
  </Layout>
)};

StoryPage.getInitialProps = async (props: any) => {
  try {
    const storiesResp = await axios.get('https://arcane-depths-05392.herokuapp.com/stories')
    return {
      stories: storiesResp.data
    }
  } catch (err) {
    console.log('STORIES ERR', err)
    return {}
  }
}

export default StoryPage;

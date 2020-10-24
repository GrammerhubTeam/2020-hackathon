import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import services from './services.js'
const array = {
    story: {
         slide1: {
             Id: "001",
             image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
             text: "I am Slide 1",
             completed: {
                 textyes: "yes",
                 textno: "no"
             }
         },
         slide2: {
             Id: "001",
             image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
             text: "I am Slide 2",
             completed:{
                textyes: "yes",
                textno: "no"
             }
            
         },
         slide3: {
             Id: "001",
             image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
             text: "I am Slide 3",
             completed:{
                textyes: "yes",
                textno: "no"
            }
         },
         slide4: {
             Id: "001",
             image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
             text: "I am Slide 4",
             completed:{
                textyes: "yes",
                textno: "no"
            }
         }
     }
 }




const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  
  export function ImgMediaCard() {
    const classes = useStyles();
  
    return (
   <Card
   className={classes.root}
   />

    )}


const Story = (props: any)=> { 
    console.log(array);
    return <div>
         {/* <div>{array.story.slide1}</div> */}
        <img src={array.story.slide1.image} />
        
        </div>
  
    // <div>{JSON.stringify(props?.story)
     
    //  }</div>
  }
  
  Story.getInitialProps = async () => {

    // const res = [await fetch('services.json')]
    // const json = await res.json()

    return { story: services}
  }

  
  export default Story
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import css from 'static\css\style.scss'
import services from './services.js'
import Layout from "components/MyLayout";




const story = {    
    backgroundColor: "#FE9806",
justifyContent: "center",
display: "Flex",
FlexDirection: "column",
alignItems: 'center',
marginTop: 15,
height: "80vh",

textAlign: "center",
// paddingLeft: 15,
// paddingRight: 11,
// paddingTop: 11
}

const image=  {
justifyContent: "center",
display: "Flex",
alignItems: 'center',


}

const header ={
    marginBottom: 50,
    
}


// const array = {
//     story: {
//          slide1: {
//              Id: "001",
//              image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
//              text: "I am Slide 1",
//              completed: {
//                  textyes: "yes",
//                  textno: "no"
//              }
//          },
//          slide2: {
//              Id: "001",
//              image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
//              text: "I am Slide 2",
//              completed:{
//                 textyes: "yes",
//                 textno: "no"
//              }
            
//          },
//          slide3: {
//              Id: "001",
//              image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
//              text: "I am Slide 3",
//              completed:{
//                 textyes: "yes",
//                 textno: "no"
//             }
//          },
//          slide4: {
//              Id: "001",
//              image: 'https://tse2.mm.bing.net/th?id=OIP.p6_V6WAn8CkXi9rpwVTVzQHaHa&pid=Api&P=0&w=300&h=300',
//              text: "I am Slide 4",
//              completed:{
//                 textyes: "yes",
//                 textno: "no"
//             }
//          }
//      }
//  }




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
  async function Halloweenie () {

    const res = await fetch('https://arcane-depths-05392.herokuapp.com/stories')
    const data = await res.json();
    setData(data);
   
    

    return { story: services}
  }
const [data, setData] = useState()

  useEffect(() => {
    Halloweenie();
    
   }, [])
  
    return (<div style={story}>
        <div style = {image}>
         {/* <div>{array.story.slide1}</div> */}
        {/* <img src={data.story.slide1.image} /> */}
        </div>
    
        {/* <div style={header}>{data.story.slide1.text} */}
 

  </div>)
    // <div>{JSON.stringify(props?.story)
    
    //  }</div>
  }

  
  // Story.getInitialProps = async () => {


  
  export default Story
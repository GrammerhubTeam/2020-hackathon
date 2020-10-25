import React, { CSSProperties, useEffect, useState } from 'react';
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
import axios from 'axios';
// import Layout from "components/MyLayout";


interface IProps {
  story: any | null
 name: string
  text:  string
  image: any

}



const story: CSSProperties= {    

backgroundColor: "#FE9806",
// width: "fit-content",
position: 'relative',
height: '85vh'
// justifyContent: "center",
// display: "Flex",
// flexDirection: "column",
// alignItems: 'center',
// marginTop: 15,
// height: "80vh",
// textAlign: "center",
// paddingLeft: 15,
// paddingRight: 11,
// paddingTop: 11
}

const image=  {
  maxHeight: "50vh",
  maxWidth: '100%',
  textAlign: "center",
  position: 'relative'

}

const header={
marginBottom: 10,
fontSize: 15,
padding: '0 1rem'
    
}

  const name={
    marginBottom: 30,
    fontSize: 41,
    textAlign: "center",
    paddingRight: 15,
    paddingLeft: 15
  
        
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
  

const Story = (props: any) => { 
  // const [data, setData] = useState<any[]>([])
  // async function Halloweenie () {

  //   const res = await axios.get('https://arcane-depths-05392.herokuapp.com/stories')
  //   const datas = res.data;
  //   setData(datas);
  //   console.log('DATASSSSS', datas);


  //   return { story: services}
  // }

  // useEffect(() => {
  //   console.log('THESE ARE MY STORIES', props.stories)
  //   // Halloweenie();

  //  }, [])

  //  useEffect(() => {
  //   console.log(data);
  //   }, [data])




    
   return (<div style={story}>
        <div style={image}>
      
         <img src={props.stories[props.idx]?.photoLink} style={{ maxWidth: '100%' }} />  
        </div>
    
        <div style={name}>{props.stories[props.idx]?.name}</div>
    
    <div style={header}>{props.stories[props.idx]?.text}</div>

    </div>)
    // <div>{JSON.stringify(props?.story)
    
    //  }</div>
  }

  
  // Story.getInitialProps = async () => {


  
  export default Story
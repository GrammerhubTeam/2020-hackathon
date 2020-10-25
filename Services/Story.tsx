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
// import Layout from "components/MyLayout";


interface IProps {
  story: any | null
 name: string
  text:  string
  image: any

}



const story: CSSProperties= {    

backgroundColor: "#FE9806",
width: "fit-content",
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
  height: "80vh",
  textAlign: "center"

}

const header={
marginBottom: 50,
fontSize: 30,
    
}


const name={
  marginBottom: 50,
  fontSize: 30,
  textAlign : "center"
      
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
  const [data, setData] = useState<any[]>([])
  async function Halloweenie () {

    const res = await fetch('https://arcane-depths-05392.herokuapp.com/stories')
    const datas = await res.json();
    setData(datas);
    console.log(datas);


    return { story: services}
  }

  useEffect(() => {
    Halloweenie();

   }, [])

   useEffect(() => {
    console.log(data);
    }, [data])




    
   return (<div style={story}>
        <div style={image}>
      
         <img src={data[0]?.photoLink} />  
        </div>
    
        <div style={name}>{data[0]?.name} 
    
    <div style={header}>{data[0]?.text} 
    </div>
    </div>

    </div>)
    // <div>{JSON.stringify(props?.story)
    
    //  }</div>
  }

  
  // Story.getInitialProps = async () => {


  
  export default Story
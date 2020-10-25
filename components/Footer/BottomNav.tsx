import { BottomNavigation, BottomNavigationAction /*, makeStyles*/ } from "@material-ui/core";
import React from "react";
import axios from 'axios'
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Camera from "@material-ui/icons/Camera"
import css from './Footer.scss'
let QrReader: any = null
if (typeof window !== 'undefined') {
  QrReader = require('react-qr-reader')
}

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
// });

const style = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 6
}

export default function BottomNav(props: any) {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const isBrowser = typeof window !== 'undefined'
  const [result, setResult] = React.useState<any>('')
  const [scanning, setScanning] = React.useState(false)
  const [userQR, setUserQR] = React.useState(null)

  const updateUserVisited = async (visitedId, user) => {
    try {
      const beenVisited = user.visitedStories?.filter(s => s === visitedId)
      if (!beenVisited?.length) {
        const updateResp = await axios.put(`http://localhost:1337/users/${user.id}`, {
          visitedStories: [ ...(user.visitedStories || []), visitedId ]
        })
        console.log('WHOAAAAAA', updateResp.data)
        setResult('')
        setScanning(false)
      }
    } catch(err) {
      console.log('OUCHHHHH', err)
      setResult('')
      setScanning(false)
    }
  }

  const onGetCandies = () => {
    if (userQR) {
      setUserQR('')
      return
    }
    if (typeof window !== 'undefined') {
      const preUser = window.localStorage.getItem('__goatUser__')
      console.log('PREUSER', preUser)
      if (preUser) {
        const user = JSON.parse(preUser)
        setUserQR(user.photoLink)
      }
    }
  }

  React.useEffect(() => {
    console.log('[[[[[[[[[[', result)
    if (typeof window !== 'undefined' && result?.data?.id) {
      const preUser = window.localStorage.getItem('__goatUser__')
      if (preUser) {
        const user = JSON.parse(preUser)
        console.log(user)
        updateUserVisited(result.data.id, user)
        // update visited ================================
      }
    }
  }, [result])

  const previewStyle = {
    height: 450,
    // width: 320,
    zIndex: 7,
    width: '100%',
  }

  const handleScan = (data: any) => {
    if (data) setResult(JSON.parse(data))
  }
  const handleError = (err: any) => {
    console.log("ERRRR:", err)
  }



  return (
    <>
    {isBrowser && ((scanning && QrReader) || userQR) && (
          <div className={css.centerImage} style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            height: '100vh', 
            width: '100vw', 
            zIndex: 1, 
            backgroundColor: 'rgba(0,0,0,0.7)' }}>
              {userQR && <img src={userQR || ''} />}
          </div>
          )
        }
    <div className={result ? css.greenOutline : undefined} style={style}>
        {isBrowser && scanning && QrReader && <QrReader
          delay={300}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />}
        

        <BottomNavigation
            value={value}
            style={{ zIndex: 4 }}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            /*className={classes.root}*/
            >
            <BottomNavigationAction onClick={onGetCandies} label="Get Candies" /*icon={<ArrowBack />}*/ />
            <BottomNavigationAction onClick={() => setScanning(!scanning)} label="Scan QR" icon={<Camera />} />
            <BottomNavigationAction onClick={() => props.onNextStory()} label="Next" icon={<ArrowForward />} />
        </BottomNavigation>
    </div>
            </>
  );
}
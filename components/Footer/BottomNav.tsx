import { BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import React, { CSSProperties } from "react";
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

const style: CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 6
}

export default function BottomNav() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const isBrowser = typeof window !== 'undefined'
  const [result, setResult] = React.useState<any>('')
  const [scanning, setScanning] = React.useState(false)
  React.useEffect(() => {
    console.log(result)
    if (typeof window !== 'undefined' && result?.data?.id) {
      const preUser = window.localStorage.getItem('__goatUser__')
      if (preUser) {
        // const user = JSON.parse(preUser)
        // updateUserVisited()
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
    if (data) setResult(data)
  }
  const handleError = (err: any) => {
    console.log("ERRRR:", err)
  }



  return (
    <>
    {isBrowser && scanning && QrReader && (
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            height: '100vh', 
            width: '100vw', 
            zIndex: 1, 
            backgroundColor: 'rgba(0,0,0,0.7)' }} />
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
            <BottomNavigationAction label="Recents" icon={<ArrowBack />} />
            <BottomNavigationAction onClick={() => setScanning(!scanning)} label="Scan QR" icon={<Camera />} />
            <BottomNavigationAction label="Nearby" icon={<ArrowForward />} />
        </BottomNavigation>
    </div>
            </>
  );
}
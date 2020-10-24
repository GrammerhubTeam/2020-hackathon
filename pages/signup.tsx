import classes from "*.module.css";
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import Layout from "components/MyLayout";
import React from "react";

//logo = #9B28C4
//button = #FE9806  

const divStyle = {
    justifyContent: "center",
    display: "Flex",
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
}

const center = {
    textAlign: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25
}

const space = {
    height: 15
}

const footer = {
    // display: "flex",
    position: "absolute",
    bottom: 0,
    width: "90%",
    textAlign: "center",
    borderTop: "1px solid black",
    paddingTop: 5,
    paddingBottom: 25,
    marginRight: "5%",
    marginLeft: "5%"
}

const button = {
    width: 220,
    backgroundColor: "#FE9806",
    height: 43,
    borderRadius: 4,
    border: "none",
    color: "White",
    fontSize: 27,
    fontWeight: "bold"
}

const logo = {
    color: "#9B28C4",
    fontSize: 35,
    fontFamily: "Bangers, cursive"
}

const orange = {
    color: "#FE9806",
}

const started = {
    fontSize: 20
}

const Signup = () => {
    // const classes = useStyles();
    const [state, setState] = React.useState<{ age: string | number; name: string }>({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const name = event.target.name as keyof typeof state;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  

    return (
        // <Layout>
            <>
                <p style={{...center, ...logo}}>Grammerhood</p>
                <p style={center}>Sign up to play interactive scavenger hunt throughout your neighborhood</p>
                <p style={{...center,...started}}><strong>Lets get started!</strong></p>
                <form noValidate autoComplete="off">
                    <div style={divStyle}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </div>
                    <div style={divStyle}>
                        <TextField id="outlined-basic1" label="Email" variant="outlined" />
                    </div >
                    <div style={divStyle}>
                        {/* <TextField label="Age" variant="outlined" /> */}
                        <FormControl variant="outlined" /*className={classes.formControl}*/>
                            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                            <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="Age              "
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                            >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={divStyle}>
                        <TextField label="Phone" variant="outlined" />
                    </div>
                    <div style={divStyle}>
                        {/* <TextField label="Outlined" variant="outlined" /> */}
                        <button style={button} >Next</button>
                    </div>
                    {/* <div style={divStyle}>
                        <TextField label="Outlined" variant="outlined" />
                    </div> */}
                </form>

                <div style={footer}>Already have an account? <strong style={orange}>Sign up</strong></div>
            </>
        // </Layout>
    );
} 

export default Signup;

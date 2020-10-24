import { Button, FormControl, InputLabel, MobileStepper, Select, TextField, useTheme } from "@material-ui/core";
import React from "react";
import css from "../Signup/SignupComp.scss"

//logo = #9B28C4
//button = #FE9806  

const SignupComp = () => {
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
    // const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 2;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  

    return (
        // <Layout>
            <>
                <p className={`${css.center} ${css.logo}`}>Grammerhood</p>
                <p className={css.center}>Sign up to play interactive scavenger hunt throughout your neighborhood</p>
                <p className={`${css.center} ${css.started}`}><strong>Lets get started!</strong></p>
                <form noValidate autoComplete="off">
                    <div className={css.divStyle}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </div>
                    <div className={css.divStyle}>
                        <TextField id="outlined-basic1" label="Email" variant="outlined" />
                    </div >
                    <div className={css.divStyle}>
                        {/* <TextField label="Age" variant="outlined" /> */}
                        <FormControl variant="outlined" style={{  width: 220, color: "red" }} /*className={classes.formControl}*/>
                            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Age"
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
                    <div className={css.divStyle}>
                        <TextField label="Phone" variant="outlined" />
                    </div>
                    <div className={css.divStyle}>
                        {/* <TextField label="Outlined" variant="outlined" /> */}
                        <button className={css.button} >Next</button>
                    </div>
                    {/* <div style={divStyle}>
                        <TextField label="Outlined" variant="outlined" />
                    </div> */}
                </form>

                <div className={css.footer}>Already have an account? <strong className={css.orange}>Sign up</strong></div>

                {/* <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? "<" : ">"}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? "> ": "<"}
                        Back
                    </Button>
                    }
                /> */}
            </>
        // </Layout>
    );
} 

export default SignupComp;

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
                {activeStep === 0 ? 
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
                                
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>Nonya</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={css.divStyle}>
                            <TextField label="Phone" variant="outlined" />
                        </div>
                        <div className={css.divStyle}>
                            {/* <TextField label="Outlined" variant="outlined" /> */}
                            <button className={css.button} onClick={handleNext}>Next</button>
                        </div>
                        {/* <div style={divStyle}>
                            <TextField label="Outlined" variant="outlined" />
                        </div> */}
                    </form>

                    <div className={css.footer}>Already have an account? <strong className={css.orange}>Sign up</strong></div>
                </> :
                <>
                    <div onClick={handleBack}><span className="material-icons">keyboard_arrow_left</span> <span className={css.purple}>Back</span></div>

                    <p className={`${css.center} ${css.started}`}><strong>Welcome to</strong></p>
                    <p className={`${css.center} ${css.logo}`}>Grammerhood</p>
                    <p className={`${css.center} ${css.started}`}><strong>One more step</strong></p>
                    <p className={css.center}>PLease upload a picture of yourself</p>
                    <p className={css.center}>We want to see your amazing costumes</p>
                    <form noValidate autoComplete="off">
                        <div className={css.picDiv}>
                            <div className={css.item}>
                                <span className={css.tex}>Take a Photo or Video</span>
                                <span className={`material-icons md-light ${css.matI}`}>camera_alt</span>
                            </div>
                            <div className={css.itemMid}>
                                <span className={css.tex}>Photo Library</span>
                                <i className={`material-icons ${css.matI}`}>content_copy</i>
                            </div>
                            <div className={css.item}>
                                <span className={css.tex}>Browse</span>
                                <i className={`material-icons ${css.matI}`}>more_horiz</i>
                            </div>
                        </div>

                        <div className={css.divStyle}>
                            <button className={css.cancelButton} onClick={handleNext}>Cancel</button>
                        </div>

                    </form>

                    
                </>
                }


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

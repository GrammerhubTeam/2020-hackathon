import SignupComp from "components/Signup/SignupComp";
import React from "react";
import axios from 'axios'


const Signup = (props: any) => {
    React.useEffect(() => {
        console.log("PROPS", props)
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('__goatNeighborhood__', JSON.stringify(props.neighborhood))
        }
    }, [])

    return (
        <SignupComp />
    );
} 

Signup.getInitialProps = async (_props: any) => {
    try {
        let neighborhood = null
        const neighborhoodResponse = await axios.get('http://localhost:1337/neighborhoods')
        console.log(neighborhoodResponse.data)
        if (Array.isArray(neighborhoodResponse.data) && neighborhoodResponse.data.length) {
            neighborhood = neighborhoodResponse.data[0] // temporary for demo
        }

        return {
            neighborhood,
        }
    } catch (err) {
        console.log("Errrrr:", err)
        return {}
    }
}

export default Signup;

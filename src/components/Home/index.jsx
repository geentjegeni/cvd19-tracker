import React from "react";
import World from "./World";
import StateData from "./StateData";
import WorldHeader from "./WorldHeader";


const Home = () => {
    return(
        <div>
            <WorldHeader/>
            <World/>
            <StateData/>
            <p align={'center'} style={{ fontSize:'11px'}}>Created by Gent Jegeni / API from https://disease.sh/docs/#/ </p>
        </div>
    )
}

export default Home;
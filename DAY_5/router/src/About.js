import React from "react";
import { useOutletContext } from "react-router-dom";
function About(){
    let {data,setData}=useOutletContext()
    return(
        <div>
            <h1>About</h1>
        </div>
    );
}
export default About;
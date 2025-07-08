import React from "react";
import Parent from "./Parent.jsx";
function Grandparent(){
    var data="hello future";
    return(
        <>
        <h1>Grandparentparent</h1>
        <Parent a={data}/>
        </>
    )
}
export default Grandparent;
import React from "react";
import Child from "./Child.jsx";
function Parent({a}){
    return(
    <>
    <h1>Parent</h1>
    <Child b={a}/>
    </>);
}
export default Parent;
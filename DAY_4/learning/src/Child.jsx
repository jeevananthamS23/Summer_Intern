import React from "react";
import Grandchild from "./Grandchild";
function Child({b}){
    return(
    <>
    <h1>Child</h1>
    <Grandchild c={b}/>
    </>);
}
export default Child;
import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
function Mobile(){
    const {id}=useParams();
    const {data,setData}=useOutletContext();
    const  val={color:"red", height:"50px",width:"80px"}
    return(
        <div>
             <h1>mobile {id}</h1>
             <h2>{data}</h2>
            <button style={val}onClick={()=>setData(data+1)}>click me</button>
        </div>
       
    );
}

export default Mobile;
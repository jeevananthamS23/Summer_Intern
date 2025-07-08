import React, { useState } from "react";
import "./Table.css";
import { useNavigate ,NavLink} from "react-router-dom";
function Table({ data }) {
   const navigate=useNavigate();
   const [page,setPage]=useState(1);
   const prepage=5;
   const Stindex=(page-1)*prepage;
   const endIndex=Stindex+prepage;
   const splitdata=data.slice(Stindex,endIndex);
   const totalPages=Math.ceil(data.length/prepage);
  return (
    <div className="tablecnt">
      <table className="table">
        <thead>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {splitdata.map((user) => (
            <tr key={user.id}>
             <td onClick={()=>{navigate(`/mobile/${user.title}`)
             }}>{user.id}</td> 
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="page">
        <button onClick={()=>{ if(page>1){setPage(page-1)} } }>Previous</button>
        <span>{page}</span>
        <button onClick={()=>{if(page<totalPages){setPage(page+1)}}}>Next</button>
      </div>
    </div>
  );
}

export default Table;

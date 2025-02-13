import React from 'react';
import { Thiru } from "./Data/Thiru"; 
// console.log(Thiru)
export function Table() {
    return (
        <>
      <h1></h1>  
      <table cellPadding="12px" cellSpacing="2px" border="5px">
        
       
        <thead>
            <tr>
            {Object.keys(Thiru[0]).map((val,ind)=>(
                    <th>
                        {val}
                    </th>
            ))}
            </tr>
        </thead>
        <tbody>
            {Thiru.map((val)=>(
               <tr>
                {Object.values(val).map((e,ind)=>(
                     <td key={ind}>{e?e:"N/A"}</td>//null or undefine  condition check () ? : ternary
                ))}
               </tr>
               
            ))}
        </tbody>
      </table>
      </>
    )
}

export default Table;

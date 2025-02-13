import { Student } from "./Data/student"
 const Students=()=>{

     console.log(Student)
    return(

        <>
   <h1>vbcdh</h1>
<table>
    <thead>
        <tr>
   {Object.keys(Student[0]).map((v,i)=>(
<th>{v}</th>
))}
</tr>
       
</thead>
<tbody>
    {Student.map((v,i)=>( 
<tr>
    {Object.keys(Student[0]).map((val,i)=>(
          <td>{v[val]?v[val]:"N/A"}</td>
    ))}
    </tr>
     ))}
</tbody>

</table>
   </>
    )
}
    

export default Students

import React from "react";
import "./style.css";

function Row({ results }) {
    console.log(results, results[0], "row")
    // let employees = results[0];

    return (
        <tr>
            {results.map((employee, index) => (
                    <th scope="row" key={index}>{employee.email}</th>
            ))}
        </tr>
    );
};



// <div>
//     {results.map((result, index) => (
//         <tr key={index}>
//             <th scope="row">
//                 
//                 <td>{result.name.late}</td>
//                 <td>{result.email}</td>
//                 <td>{result.phone}</td>
//                 <td>{result.location.city}{result.location.state}{result.location.country}</td>
//             </th>
//         </tr>
//     ))}
// </div>
export default Row;

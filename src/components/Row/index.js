import React from "react";
import "./style.css";

function Row(results) {
    console.log(results)
    return ( <p>hello</p> );
};

export default Row;
// {props.results.map((result, index) => (
//     <tr key={index}>
//         <th scope="row">
//             <td>{result.name.first}</td>
//             <td>{result.name.late}</td>
//             <td>{result.email}</td>
//             <td>{result.phone}</td>
//             <td>{result.location.city}{result.location.state}{result.location.country}</td>
//         </th>
//     </tr>
// ))}
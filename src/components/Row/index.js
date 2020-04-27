import React from "react";
import "./style.css";

function Row(props) {
    console.log(props.sortType, props.currentSort, "row")
    let results = props.results
    return (
        <tbody>
            {[...results].map((result, index) => (
                <tr  key={result.email}>
                    <th scope="row" >{index}</th>
                    <td>{result.name.first}</td>
                    <td>{result.name.last}</td>
                    <td>{result.email}</td>
                    <td>{result.phone}</td>
                    <td>{result.location.city}, {result.location.state}, {result.location.country}</td>  
                </tr>
            ))}
      </tbody>
    );
};

export default Row;

import React from "react";
import "./style.css";

function Row(props) {
    return (
        <tr>
    {props.results.map(result => (
        <th scope="row">
        <td>{result.name.first}</td>
        <td>{result.name.late}</td>
        <td>{result.email}</td>
        <td>{result.phone}</td>
        <td>{result.location.city}{result.location.state}{result.location.country}</td>
        </th>
    ))}
    </tr>
    );
};

export default Row;
import React from "react";
import Row from '../Row'

function Table(props) {
    console.log(props, "table")
 
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col"> <button type="button" 
                    onClick={() => props.handleInputChange('email')}>
                    Email
                    </button></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
         <Row {...props} />
        </table>
    )
};

export default Table;

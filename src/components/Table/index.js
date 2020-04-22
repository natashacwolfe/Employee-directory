import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    )
};

export default Table;

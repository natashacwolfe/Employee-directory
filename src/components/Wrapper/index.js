import React from "react";
import Table from "../Table"

function Wrapper(props) {
  console.log(props)
  let results = props.results
  return <div className="container-fluid">
    <Table results={results} />
  </div>
  
};

export default Wrapper;
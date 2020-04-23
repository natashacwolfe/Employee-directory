import React from "react";
import Table from "../Table"

function Wrapper(props) {
  console.log(props, "wrapppper")
  let results = props.results
  console.log(results, "wrapper")
  if (!Array.isArray(results)) return 'results are not array';

  

  return <div className="container-fluid">
    <Table results={results} />
  </div>
  
};

export default Wrapper;
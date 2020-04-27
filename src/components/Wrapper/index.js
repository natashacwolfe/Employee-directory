import React from "react";
import Table from "../Table"

function Wrapper(props) {
  console.log(props, "wrapper")

  return <div className="container-fluid">
    <Table {...props} />
  </div>
  
};

export default Wrapper;
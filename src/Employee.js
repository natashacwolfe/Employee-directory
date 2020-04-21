import React, { Component } from 'react';
import API from './utils/API'
import Wrapper from './components/Wrapper';
// import Table from './components/Table';
// import Row from './components/Row';
// import { render } from '@testing-library/react';

class Employee extends Component {
state = {
    results: []
};

    componentDidMount() {
        API.generateUsers()
        .then(res => {
            this.setState({ results: res.data.results});
            console.log(res.data.results)
            // let employeesArr = results.map(employee => {
            //     setId(employee.id);
            //     setName(`${employee.name.first} ${employee.name.last}`);
            //     setEmail(employee.email);
            //     setPhone(employee.phone);
            //     setLocation(`${employee.location.city} ${employee.location.state} ${employee.location.country}`);
                
            // }) 
           
        })
        .catch(err => console.log(err));
    };

render(){
      return (
        <div>
        <Wrapper>
        </Wrapper>
        </div>
    );
};
  
    

};

export default Employee;
import React, { Component } from 'react';
import API from './utils/API'
import Wrapper from './components/Wrapper';
import Table from './components/Table';
import Row from './components/Row';
import { render } from '@testing-library/react';

class Employee extends Component {
state = {
    results: []
};

    componentDidMount() {
   console.log("Wahoo!")
    };

    searchRandomUser() {
        API.generateUsers()
        .then((res) => {
            this.setState({ results: res.data.results})
            console.log(this.state);
            
        })
        .catch(err => console.log(err));
    };

render(){
      return (
        <div>
        <Wrapper>
        <Table>
        <Row results={this.state.results} />
        </Table>
        </Wrapper>
        </div>
    );
};
  
    

};

export default Employee;
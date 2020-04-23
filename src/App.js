import React, { Component } from 'react';
import API from './utils/API'
import Wrapper from './components/Wrapper';
import Table from './components/Table';
import Row from './components/Row';
import './App.css';

class App extends Component {
  state = {
    results: []
};

componentDidMount() {
   this.generateRandomUsers();
};

generateRandomUsers() {
  API.generateUsers()
.then((res) => {
    this.setState({ results: res.data.results })
    console.log(this.state);
})
.catch(err => console.log(err));
};


render() {
    return (
        <div>
            <Wrapper>
        
            </Wrapper>
        </div>
    );
};
  
};
    // <Table>
    //         {this.state.results.map((result, index) => (
    //           <Row 
    //           key={index}
    //           id={index}
    //           first={result.name.first}
    //           last={result.name.last}
    //           email={result.email}
    //           />
    //           ))}
    //           </Table>
export default App;

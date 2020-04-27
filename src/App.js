import React, { Component } from 'react';
import API from './utils/API'
import Wrapper from './components/Wrapper';
// import Table from './components/Table';
// import Row from './components/Row';
import './App.css';

class App extends Component {
    state = {
        results: [],
        currentSort: 'default',
    };


    componentDidMount = () => {
        this.generateRandomUsers();
    };

  
    generateRandomUsers = () => {
        API.generateUsers()
            .then((res) => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = () => {
        let sortedUsers = this.state.results.sort((a,b) => (a.email > b.email) ? 1 : -1)
        this.setState({ results: sortedUsers})
    };
      
    render() {
        return (
            <div>
                <Wrapper
                    results={this.state.results}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    };

};

export default App;

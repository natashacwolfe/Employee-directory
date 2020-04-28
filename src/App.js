import React, { Component } from 'react';
import API from './utils/API'
import Wrapper from './components/Wrapper';

class App extends Component {
    state = {
        results: [],
        sortedField: ""
    };

    componentDidMount = () => {
        this.generateRandomUsers();
    };

    generateRandomUsers = () => {
        API.generateUsers()
            .then((res) => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = (sortedField) => {
        this.setState({ sortedField: sortedField })
        this.sort(sortedField)
    };

    sort = (sortedField) => {
        let sortedUsers = [];
        switch (sortedField) {
            case "first":
                sortedUsers = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
                return this.setState({ results: sortedUsers });
            case "last":
                sortedUsers = this.state.results.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
                return this.setState({ results: sortedUsers });
            case "email":
                sortedUsers = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1);
                return this.setState({ results: sortedUsers });
            case "location":
                sortedUsers = this.state.results.sort((a, b) => (a.location.city > b.location.city) ? 1 : -1);
                return this.setState({ results: sortedUsers });
            default:
                break;
        };
    };

    render() {
        return (
            <div>
                <Wrapper
                    results={this.state.results}
                    handleInputChange={this.handleInputChange}
                    sortedField={this.state.sortedField}
                />
            </div>
        );
    };

};

export default App;

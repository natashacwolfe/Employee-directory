import React from 'react';
import Employee from './Employee';
import Wrapper from './components/Wrapper'; 
import Table from './components/Table';
import Row from './components/Row';
import './App.css';


function App() {
  return (
    <Wrapper>
    <Table>
    <Row />
    </Table>
    </Wrapper>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import Wrapper from '../components/Wrapper';
import Table from '../components/Table';
import Row from '../components/Row';

function Employee() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [location, setLocation] = useState();

    useEffect(() => {
        API.generateUsers()
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }, []);
  

};

export default Employee;
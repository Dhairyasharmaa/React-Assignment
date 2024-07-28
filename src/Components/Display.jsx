import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Display = () => {
  const [mydata, setMydata] = useState([]);
  const [cnt, setCnt] = useState(0);

  const dec = () => {
    if (cnt <= 0) {
      alert("Negative values not allowed");
    } else {
      setCnt(cnt - 1);
    }
  };

  const loadData = () => {
    let url = "http://localhost:3000/student";
    axios.get(url).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Display Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Emp id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Basic Salary</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((key) => (
            <tr key={key.id}>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
              <td>{key.fees}</td>
              <td>{key.salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>


      <hr size="8" color="brown"/>
      <br />
      <h2>Counter Page:</h2>
      <h4>Count: {cnt}</h4>
      <Button variant="primary" onClick={() => setCnt(cnt + 15)}>Increase by 15</Button>{' '}
      <Button variant="primary" onClick={() => setCnt(cnt - 15)}>Decrease by 15</Button>{' '}
      <Button variant="primary" onClick={() => setCnt(0)}>Reset</Button>{' '}
      
    </>
  );
};

export default Display;

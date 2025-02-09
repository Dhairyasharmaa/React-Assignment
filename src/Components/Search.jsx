import { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const Search = () => {
const [rollno, setRollno]=useState("");
const [mydata, setMydata]=useState([]);  

const mySearch=()=>{
    let url=`http://localhost:3000/student/?rollno=${rollno}`
    axios.get(url).then((res)=>{
      // console.log(res.data);
      setMydata(res.data)
    });

}
const ans=mydata.map((key)=>{
  return (
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
    </>
  )


})
  return (
    <>
    <h1>Search Data</h1>
    Enter Roll no: <input type='text' value={rollno}
    onChange={(e)=>{setRollno(e.target.value)}}/>


    <button onClick={mySearch}>Search</button>
    <hr />
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
        {ans}
      </tbody>
      </Table>
    </>
  )
}

export default Search;
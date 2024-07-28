import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import edit from "../images/th.jpg"
import del from "../images/del.jpg"
import { useNavigate } from 'react-router-dom';

const Update = () => {
const [mydata, setMydata]=useState([]);  

const myNav= useNavigate();

const loadData=()=>{
  let url="http://localhost:3000/student";
  axios.get(url).then((res)=>{
    setMydata(res.data)
  })
}
useEffect(()=>{
  loadData();
}, [])

const myDel=(myid)=>{
  let url=`http://localhost:3000/student/${myid}`;
  axios.delete(url).then((res)=>{
    alert("Record Deleted!!")
    loadData();
  })

}

const myEdit=(myid)=>{
  myNav(`/myedit/${myid}`)

}

const ans=mydata.map((key)=>{
  return (
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
      <td>
  
    <a href="#">
      <img src={edit} alt="" width={"30px"} height={"30px"} onClick={()=>{myEdit(key.id)}}/>
      </a>
      <a href="#">
      <img src={del} alt="" width={"30px"} height={"30px"} onClick={()=>{myDel(key.id)}} />
      </a>
      </td>
    </tr>
    </>
  )


})

return (
  <>
  <h1>Update Data</h1>

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

export default Update;






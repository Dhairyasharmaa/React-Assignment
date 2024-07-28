import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';


const Editdata = () => {
    const {id}= useParams();

    const [mydata, setMydata]= useState({});

    const loadData=()=>{
        let api=`http://localhost:3000/student/${id};`
        axios.get(api).then((res)=>{

            setMydata(res.data);
        })
    }

    useEffect(()=>{
      loadData();
    }, [])

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setMydata(values=>({...values, [name]:value}));
   }
   const handleSubmit=()=>{
       let url=`http://localhost:3000/student/${id}`
       console.log(mydata);
       axios.put(url, mydata).then((res)=>{
           alert("Data updated!!!")
       })
   }

  return (
    <>

    <h1>Edited Data:</h1>

    <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formRollno">
                    <Form.Label>Emp id</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="rollno" 
                        value={mydata.rollno || ''} 
                        onChange={handleInput} 
                    />
                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        value={mydata.name || ''} 
                        onChange={handleInput} 
                    />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="city" 
                        value={mydata.city || ''} 
                        onChange={handleInput} 
                    />
                </Form.Group>

                <Form.Group controlId="formFees">
                    <Form.Label>Department</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="fees" 
                        value={mydata.fees || ''} 
                        onChange={handleInput} 
                    />
                </Form.Group>
                <Form.Group controlId="formsalary">
                    <Form.Label>Basic Salary</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="fees" 
                        value={mydata.salary || ''} 
                        onChange={handleInput} 
                    />
                </Form.Group>

                <br />
                <Button variant="primary" type="submit">
                    
                    Data Save
                </Button>
            </Form>

    
    </>
  )
}

export default Editdata;
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {
  const [input, setInput] = useState({})

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:3000/student";
    axios.post(api, input).then((res) => {
      console.log(res);
      alert("data saved !!");
    })
  }

  return (
    <>
      <Form style={{ width: "45%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicRollno">
          <Form.Label>Enter Emp id</Form.Label>
          <Form.Control type="text" value={input.rollno || ''} name="rollno" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" value={input.name || ''} name="name" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" value={input.city || ''} name="city" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFees">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" value={input.fees || ''} name="fees" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSalary">
          <Form.Label>Basic Salary</Form.Label>
          <Form.Control type="text" value={input.salary || ''} name="salary" onChange={handleInput} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Insert;

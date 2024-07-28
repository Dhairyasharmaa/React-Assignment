import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const StudentMarksForm = () => {
  const [student, setStudent] = useState({
    rollno: '',
    name: '',
    phy: '',
    che: '',
    math: '',
    eng: '',
    hindi: ''
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const calculateResults = () => {
    const phy = parseInt(student.phy);
    const che = parseInt(student.che);
    const math = parseInt(student.math);
    const eng = parseInt(student.eng);
    const hindi = parseInt(student.hindi);

    const total = phy + che + math + eng + hindi;
    const percentage = (total / 500) * 100;

    let division;
    if (percentage >= 60) {
      division = 'First Division';
    } else if (percentage >= 45) {
      division = 'Second Division';
    } else if (percentage >= 33) {
      division = 'Third Division';
    } else {
      division = 'Fail';
    }

    setResult({
      total,
      percentage: percentage.toFixed(2),
      division
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults();
  };

  return (
    <>
      <h1>Student Marks Form</h1>
      <Form onSubmit={handleSubmit} style={{ width: '45%' }}>
        <Form.Group className="mb-3">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control
            type="text"
            name="rollno"
            value={student.rollno}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={student.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Physics Marks</Form.Label>
          <Form.Control
            type="number"
            name="phy"
            value={student.phy}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Chemistry Marks</Form.Label>
          <Form.Control
            type="number"
            name="che"
            value={student.che}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Math Marks</Form.Label>
          <Form.Control
            type="number"
            name="math"
            value={student.math}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>English Marks</Form.Label>
          <Form.Control
            type="number"
            name="eng"
            value={student.eng}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hindi Marks</Form.Label>
          <Form.Control
            type="number"
            name="hindi"
            value={student.hindi}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Calculate
        </Button>
      </Form>
      {result && (
        <div className="result" style={{ marginTop: '20px' }}>
          <h2>Results</h2>
          <p>Total Marks: {result.total}</p>
          <p>Percentage: {result.percentage}%</p>
          <p>Division: {result.division}</p>
        </div>
      )}
    </>
  );
};

export default StudentMarksForm;

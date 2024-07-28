import React from 'react';

const Home = () => {
  const outerCircleStyle = {
    width: '700px',
    height: '200px',
    backgroundColor: 'yellow', // Blue background
    border: '2px solid yellow', // Blue border
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const middleRectangleStyle = {
    width: '400px',
    height: '100px',
    backgroundColor: 'blue', // Yellow background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: 'px solid #9C27B0', // Purple border
    // borderRadius: '30px'
  };

  const innerCircleStyle = {
    width: '200px',
    height: '50px',
    backgroundColor: 'red', // Red background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black', // Blue border
    borderRadius: '30%'
  };

  const textStyle = {
    fontWeight: 'bold',
    color: 'white' // Red text color
  };

  return (
    <>
      <h1>Welcome to Homepage</h1>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '100px' }}>
        <div style={outerCircleStyle}>
          <div style={middleRectangleStyle}>
            <div style={innerCircleStyle}>
              <span style={textStyle}>CYBROM</span>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;

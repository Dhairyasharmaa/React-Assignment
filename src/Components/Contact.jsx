import React, { useState, useEffect } from 'react';

const Contact = () => {

  const [cnt, setCnt] = useState(0);
  const [multi, setMulti] = useState(0);

  useEffect(() => {
    setMulti(cnt * 2);
  }, [cnt]);

  return (
    <>
      <h1>Contact Us!!</h1>

      <h4>Counter: {cnt}</h4>
      <h4>My multi: {multi}</h4>

      <button onClick={() => { setCnt(cnt + 1); }}>Click Here</button>
    </>
  );
}

export default Contact;

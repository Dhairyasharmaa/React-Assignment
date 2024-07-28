import React from 'react';

//  function App() {
//    const outerBoxStyle = {
//      width: '300px',
//      height: '200px',
//      backgroundColor: 'blue', // Yellow
//      border: '5px solid blue', // Red border
//      borderRadius:"30px",
//      display: 'flex',
//      justifyContent: 'center',
//      alignItems: 'center',
//      borderRadius:'6px'
//    };

//    const middleBoxStyle = {
//      width: '200px',
//      height: '100px',
//      backgroundColor: 'yellow', // Light Purple
//      display: 'flex',
//      justifyContent: 'center',
//      alignItems: 'center',
//      border: '5px solid #9C27B0', // Purple border
//      borderRadius:"30px"
//    };

//    const innerBoxStyle = {
//      width: '100px',
//      height: '50px',
//      backgroundColor: 'red', // Light Blue
//      display: 'flex',
//      justifyContent: 'center',
//      alignItems: 'center',
//      border: '5px solid #00BCD4', // Blue border
//      borderRadius:"30px",
//    };

//    const textStyle = {
//      fontWeight: 'bold',
//      color: '#D32F2F' // Red text color
//    };

//    return (
//      <div style={{display:"flex",justifyContent:"center",margin:"100px"}}>
//      <div style={outerBoxStyle}>
//        <div style={middleBoxStyle}>
//          <div style={innerBoxStyle}>
//            <span style={textStyle}>CYBROM</span>
//          </div>
//        </div>
//      </div>
//      </div>
//    );
//  }


// ===========================================================================================================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Insert from "./Components/Insert";
import Contact from "./Components/Contact";
import Update from "./Components/Update";
import Display from "./Components/Display";
import Search from "./Components/Search";
import Editdata from "./Components/Editdata";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="insert" element={<Insert />} />
          <Route path="display" element={<Display />} />
          <Route path="search" element={<Search />} />
          <Route path="update" element={<Update />} />
          <Route path="contact" element={<Contact />} />
          <Route path="myedit/:id" element={<Editdata />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useToken from './useToken';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login/>}>  </Route>
       <Route path="/home" element={<Home/>}>  </Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}
export default App;

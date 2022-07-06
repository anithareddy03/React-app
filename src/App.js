import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FaPlus, FaAngleDown } from 'react-icons/fa';
import './App.css';
import HomePage from './Components/HomePage';
import Tutorials from './Components/Tutorials';

const App =()=>{
  return(
    <div className="main-wrapper">
    <Router>
      <header>
        <div className="lhs">
          <div className="logo-wrap"></div>
        </div>
        <div className="rhs">
          <nav className="nav-wrap">
            <ul id="nav-list" className="list">
              <li className="list-item">Store List</li>
              <li className="list-item">Tour Locator</li>
              <li className="list-item">System Pages <FaAngleDown className='expand-icon'/></li>
              <li className="list-item">Layout Variants <FaAngleDown className='expand-icon'/></li>
              <li className="list-item"> 
                <Link to="Tutorials">Tutorials</Link>
             </li>
           </ul>
          </nav>
          <div className="submit-btn">
            <FaPlus className="add-icon"/>
            <span>Submit a Tour</span>
          </div>
        </div>
      </header>
      <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/Tutorials" element={<Tutorials />} />
       </Routes>
   </Router>
    </div>
    );
}
export default App;
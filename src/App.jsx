import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx";

import "./styles/App.scss"
import "./styles/Header.scss"

function App() {
  

  return (
    <Router>
      
      <Header />
      <Routes>  
        <Route path= "/" element={<Home />}/>
      </Routes>

    </Router>
  )
}

export default App

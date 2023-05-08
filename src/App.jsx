import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";


import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"

function App() {
  

  return (
    <Router>
      
      <Header />
      <Routes>  
        <Route path= "/" element={<Home />}/>
        <Route path= "/contact" element={<Contact />}/>

      </Routes>
      <Footer />

    </Router>
  )
}

export default App

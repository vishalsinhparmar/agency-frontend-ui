import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Layout from './Layout'


import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Myteam from './components/Myteam'
import Myservices from './components/Myservices'
import ContactUs from './components/ContactUs'
import Mytestmonial from './components/Mytestmonial'
import Homepage from './components/Homepage'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index path='home' element={<Homepage />} />
        <Route path='services' element={<Myservices />} />
        <Route path='testimonial' element={<Mytestmonial />} />
        <Route path='team' element={<Myteam />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

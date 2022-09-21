import React from 'react'
import Header from '../common/header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import PageNotFound from '../404/PagenotFound';
import About from './about/About';
import Services from './services/Services';
import Price from './pricing/Price'
import Blog from './blog/Blog'
import Contact from './contact/Contact';
import Login from '../login/Login'
import Register from '../register/Register'

const Pages= ()=> {
  return (<>
   <Router>
        <Header/>
        <Routes>
<<<<<<< HEAD
=======

>>>>>>> 1a15b2a7eb776944b09add9e8e87ccb0173c80ba
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route  path="*" exact element ={<PageNotFound />}/>
          <Route  path="/"  element ={<Home />}/>
          <Route  path="/about"  element ={<About/>}/>
          <Route path="/services"  exact element ={<Services/>}/>
          <Route path="/pricing"  exact element ={<Price/>}/>
          <Route path="/blog"  exact element ={<Blog/>}/>
          <Route path="/contact"  exact element ={<Contact/>}/>

<<<<<<< HEAD
=======

          <Route  path="*"  element ={<PageNotFound />}/>
          <Route exact path="/"  element ={<Home />}/>
          <Route  path="/about"  element ={<About />}/>

>>>>>>> 1a15b2a7eb776944b09add9e8e87ccb0173c80ba
        </Routes>
        {/* <Footer /> */}
    </Router>
  </>) 
  
}

export default Pages

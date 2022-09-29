import React from 'react'
import Header from '../common/header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import PageNotFound from '../404/PagenotFound';
import About from './about/About';
import Services from './services/Services';
import Price from './price/Price'
import Blog from './blog/Blog'
import Contact from './contact/Contact';
import Login from '../login/Login'
import Register from '../register/Register'
import Modal from '../modal/Modal';

const Pages= ()=> {
  return (<>
   <Router>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route  path="*" exact element ={<PageNotFound />}/>
          <Route  path="/"  element ={<Home />}/>
          <Route  path="/about"  element ={<About/>}/>
          <Route path="/services"  exact element ={<Services/>}/>
          <Route path="/pricing"  exact element ={<Price/>}/>
          <Route path="/blog"  exact element ={<Blog/>}/>
          <Route path="/contact"  exact element ={<Contact/>}/>
          <Route path="/houseview"  exact element ={<Modal/>}/>

          <Route exact path="/"  element ={<Home />}/>
          <Route  path="/about"  element ={<About />}/>

        </Routes>
        <Footer />
    </Router>
  </>) 
  
}

export default Pages

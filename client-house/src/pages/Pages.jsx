import React from  'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './home/Home';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import About from './about/About'
import Services from './services/Services';
import Price from './pricing/Price'
import Blog from './blog/Blog'
import Contact from './contact/Contact';

const Pages= ()=> {
  return (<>
   <Router>
   <Header/>
        <Routes>
          {/* <Route path="/"  exact element ={<Home />}/> */}
          <Route path="/about"  exact element ={<About/>}/>
          <Route path="/services"  exact element ={<Services/>}/>
          <Route path="/pricing"  exact element ={<Price/>}/>
          <Route path="/blog"  exact element ={<Blog/>}/>
          <Route path="/contact"  exact element ={<Contact/>}/>

        </Routes>
        <Footer />
    </Router>
  </>) 
  
}

export default Pages

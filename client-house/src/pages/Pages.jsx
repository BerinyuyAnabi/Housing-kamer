import React from 'react'
import Header from '../components/common/header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import Footer from '../components/common/footer/Footer';
import PageNotFound from './404/PagenotFound';
import About from './about/About';

const Pages= ()=> {
  return (<>
   <Router>
        <Header/>
        <Routes>
          <Route  path="*"  element ={<PageNotFound />}/>
          <Route  path="/"  element ={<Home />}/>
          <Route  path="/about"  element ={<About />}/>
        </Routes>
        <Footer />
    </Router>
  </>) 
  
}

export default Pages

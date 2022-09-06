import React from 'react'
import Header from '../components/header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import Footer from '../components/footer/Footer';

const Pages= ()=> {
  return (<>
   <Router>
   <Header/>
        <Routes>
          <Route  path='/' exact component={Home}/>
        </Routes>
        <Footer />
    </Router>
  </>) 
  
}

export default Pages

import React from "react"
import Heading from "../../common/Heading"
import { useState,useEffect } from "react";
import "./hero.css"
import Form from 'react-bootstrap/Form';
import SearchOptions from '../../common/SearchOptions'
import Recent from "../recent/Recent";
import { list, price } from "../../data/Data"

const Hero = () => { 
  const [data, setdata] = useState({
    data:list
  });
  
  const [input, setInput] = useState({
  price: '',
  location: '',
    sortOrder: '',
    sortOrders: ['highestfirst', 'lowestfirst'],
    locations:['Up Quarter','Down Quarter']
  })

  useEffect(() => {
    setdata({
      data:filterOut()
    })
  }, [input]);
  

  const filterOut = () => {
    let result = list
    const {price,location,sortOrder} = input
    if (price) {
        result = list.filter(item => item.price >= price
      )
    }
    if (location) {
      result = list.filter(item => item.location.toLowerCase().includes(location.toLowerCase()))
    }

    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => b.price - a.price)
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => a.price - b.price)
      }
    }
    return result
     
  }
  const priceChange = e => {
    setInput(prevState => ({ ...prevState, price: e.target.value }))
  }
  const locationChange = e => {
    setInput(prevState => ({ ...prevState, location: e.target.value }))
  }
  const sortchange = e => {
    setInput(prevState => ({ ...prevState, sortOrder: e.target.value }))
  }
  // searchFilter()

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Hostel ' subtitle='Bringing premium Houses in and around University of Bamenda to your finger tips' />
          <Form className="mr-1">
            <Form.Label>Refine your result</Form.Label>

            <div className="d-md-flex justify-content-evenly">
              <Form.Group className="d-flex align-items-center justify-content-center  m-1" controlId="formBasicEmail">
                <Form.Label>Price From:</Form.Label>

                <Form.Control
                  name="price"
                  type="number"
                  placeholder="120k"
                   min="100"
                  max="1000"
                  value={input.price}
                  onChange = {priceChange}
                />

              </Form.Group>
              <Form.Group className="d-flex align-items-center justify-content-center m-1" controlId="formBasicPassword">
                <Form.Label>location:</Form.Label>
                <select
                  value={input.location}
                  onChange={locationChange}
                  className="form-select" id="postcode">
                  <option value="">Choose...</option>
                  <SearchOptions datalist={input.locations}/>
                  </select>
              
              </Form.Group>
              <Form.Group className="d-flex align-items-center justify-content-center  m-1" controlId="formBasicCheckbox">
                <Form.Label>sort order:</Form.Label>
                <select
                  className="form-select"
                  id="sortorder"
                  name="sortOrder"
                  value={input.sortOrder}
                  onChange={sortchange}
                >
                  <option value="">Choose...</option>
                  <SearchOptions datalist={input.sortOrders}/>
                  </select>
              </Form.Group>
            </div>
            </Form>
        </div>
      </section>
      <Recent list={ data.data}/>
    </>
  )
}

export default Hero

import React from "react"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
     <div className='pricing'>
            <h6>With us there is a gurantee</h6>
            <h1>Subsidized Fees</h1>
        </div>
       
      <section className='price padding'>
        <div className='container'>
          <h1>Select Your House</h1> 
          <h6>Our various packages are available at moderate prices likewise very affordable and of remarkable quality.</h6>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
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
          <h1>Select Your Package</h1> 
          <h6>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</h6>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
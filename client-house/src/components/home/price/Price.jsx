import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Our various packages are available at moderate prices likewise very affordable and of remarkable quality.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price

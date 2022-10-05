import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location available hostel' subtitle="Stress free accommodation search in Cameroon . Whether it’s Douala, Yaounde, Buea, Limbe etc, we can help you find your dream home in Cameroon. Click on each town's image below to view available properties." />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='item.name' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  {/* <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location

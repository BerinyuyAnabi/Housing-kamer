import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = ({list}) => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          {/* <Heading title='Welcome!!! Recent Hostels Listed' subtitle='we have new and well Tarnish houses here in our application in just a click you will get a house to rent and study at a good house rent price' /> */}
          <RecentCard list={ list}/>
        </div>
      </section>
    </>
  )
}

export default Recent

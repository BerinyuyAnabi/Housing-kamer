
import React from "react"
import "./blog.css"
import BlogCard from "./BlogCard.jsx"

const Recent = () => {
  return (
    <>
      <section className='blog padding'>
        <div className='container'>
          <h1>Recent Property Listed</h1>
          <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Recent
import React from "react"
// import Heading from "../../common/Heading"
import "./blog.css"
import BlogCard from "./BlogCard"

const Blog = ({list}) => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          {/* <Heading title='Welcome!!! Recent Hostels Listed' subtitle='We have new and well Tarnish houses here in our application in just a click you will get a house to rent and study at a good house rent price' /> */}
          <BlogCard list={ list}/>
        </div>
      </section>
    </>
  )
}

export default Blog

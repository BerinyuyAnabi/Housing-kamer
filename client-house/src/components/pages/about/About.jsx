import React from "react"
import './about.css'
import image from './skyme.jpg'

const About = () => {
    return (<>
        <div className='about'>
            <h6>About Us</h6>
            <h1>About Page</h1>
        </div>
        <div className="content">
            <h1>Our Agency</h1>
            <div className="description flex">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quae iste corrupti nobis dolor? Eum iure ea consequuntur ullam amet nulla odio. Minus perspiciatis debitis, quasi ratione non quisquam error expedita commodi officia nulla laboriosam libero et vitae facere recusandae ullam nemo. Vel, quasi impedit. Corporis fugit deserunt repellat? Eos.</p>
                <img src= {image} alt="" />
            </div>
        </div>
    </>
    )
}

export default About

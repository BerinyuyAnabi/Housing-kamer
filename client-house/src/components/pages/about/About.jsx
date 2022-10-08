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
                <p>We are technophiles, individuals passionate about community impact with respect to technology.
                    We are currently studying to obtain a Bachelors Degree in technology related fields.</p>
                <img src= {image} alt="" />
            </div>
            <button className="but">More About Us</button>
        </div>
    </>
    )
}

export default About

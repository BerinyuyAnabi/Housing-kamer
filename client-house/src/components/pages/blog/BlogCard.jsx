import React from "react";
import { list } from "../../data/Data"
import { Link } from 'react-router-dom'

export const propertyContext = React.createContext()
// export const PropertyConsumer = propertyContext.Consumer

const BlogCard = () => {
  return (
    <> 
      <div className='content grid3 mtop'>
        {list.map((val) => {
          const { id, cover, category, location, name, price, type } = val
          return (
            <>
              
                <div className='box shadow' key={id}  >
                  <div className='img' >
                    <img src={cover} alt='' />
                  </div>
                  <div className='text'>
                    <div className='category flex'>
                      <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                      <i className='fa fa-heart'></i>
                    </div>
                  

                    <p>
                      <i className='fa fa-location-dot'></i> {location}
                    </p>
                  </div>
                  <div className='button flex'>
                    <div>
                      <button className="btn2 openModalBtn"
                      >{price}k/yr</button>
                    </div>
                    <span>{type}</span>
                </div>
                <div className="mx-auto">
                  <Link className= " d-flex justify-content-center align-items-center btn btn-primary " to={`/details/${id}`}>
                    Go to property
                  </Link>
                </div>
                  
                

                </div>
              </>
          )
        })}

</div>
    </>
)}

export default BlogCard

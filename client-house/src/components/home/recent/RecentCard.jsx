import React from "react";
import { list } from "../../data/Data"
import { Link } from 'react-router-dom'



const RecentCard = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const handleClick = (event,key) => {
  //   console.log(event.target.id);
  //   console.log('key index: ', key);
  // };
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val) => {
          const { id, cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={id}  >
              <div className='img' id="{cover}">
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <Link to='/houseview'>
                  <h4 onClick={console.log(id)}>{name}</h4>
                </Link>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className="btn2 openModalBtn"
                   >{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default RecentCard

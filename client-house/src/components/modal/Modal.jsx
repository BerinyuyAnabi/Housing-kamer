import React from "react";
import "./modal.css";
import { detailedList } from "../data/Data"
// import { Link } from 'react-router-dom'
// import ReactDOM from 'react-dom/client';
// import Caard  from "../../components/home/recent/Caard";

const Modal = () => {
      return (
            <>
                  <div className=' modal'>
                        <div className="leftModal">
                        {detailedList.map((val) => {
                              const { id, cover, category, location, name, price, type, details } = val
                              return (
                                    <>
                                          <div className='leftBox' key={id}  >
                                                <div className='img1' >
                                                      <img src={cover} alt='' />
                                                </div>
                                                <div className='text'>
                                                      <div className='category'>
                                                            <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                                                            <i className='fa fa-heart'></i>
                                                      </div>
                                                      <h4>
                                                            {name}</h4>
                                                      <p>
                                                            <i className='fa fa-location-dot'></i> {location}
                                                      </p>
                                                </div>
                                                <div className='button'>
                                                      <div>
                                                            <button className="btn2 openModalBtn"
                                                            >{price}</button>
                                                      </div>
                                                      <span>{type}</span>
                                                      <div>{details}</div>
                                                </div>
                                          </div>

                                    </>
                              )
                        })}
                        </div>
                        <div className="rightModal">
                              {detailedList.map((val) => {
                                    const { id, cover, category, location, name, price, type, details } = val
                                    return (
                                          <>
                                                <div className='rightBox' key={id}  >
                                                      <div className='img2' >
                                                            <img src={cover} alt='' />
                                                      </div>
                                                      <div className='text'>
                                                            <div className='category'>
                                                                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                                                                  <i className='fa fa-heart'></i>
                                                            </div>
                                                            <h4>
                                                                  {name}</h4>
                                                            <p>
                                                                  <i className='fa fa-location-dot'></i> {location}
                                                            </p>
                                                      </div>
                                                      <div className='button'>
                                                            <div>
                                                                  <button className="btn2 openModalBtn"
                                                                  >{price}</button>
                                                            </div>
                                                            <span>{type}</span>
                                                            <p>{details}</p>
                                                      </div>
                                                </div>

                                          </>
                                    )
                              })}
                        </div>
                  </div>
            </>
      )
}

export default Modal;

 // <div className='box shadow' key={id}>
            //   <div className='img'>
            //     <img src={props.cover} alt='' />
            //   </div>
            //   </div>
            // {/* <div> */}
      // {/* <img src={props.cover} alt="" /></div> */}
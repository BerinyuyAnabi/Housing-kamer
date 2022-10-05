import React from "react";
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image'
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function DetailCard({ filtersingle }) {
    const data = filtersingle()
    const {cover, name, location, category, price, type, details, id} = data
    return (
        <Container className="p-4">
            <Col md-4>
            <Card   >
                    <Card.Img
                        className="mx-auto pt-3 rounded" style={{ maxWidth: '50rem', maxHeight: '300px' }} variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text className="d-md-flex justify-content-between align-items-center">
                            {/* <div className="">{category}</div> */}
                                <Alert>{category}</Alert>
                                <span><i className='fa fa-heart'></i></span>    
                        </Card.Text>
                        <hr />
                        <Card.Text>
                            <span><i className='fa fa-location-dot px-3'></i></span>
                            {location}</Card.Text>
                        <div className="d-md-flex justify-content-between align-items-center">
                            <Card.Text className="bg-success rounded font-weight-bold text-light p-3">
                                <i class="fa-solid fa-money-check-dollar px-2 text-info h-6 w-6"></i>
                                {price}</Card.Text>
                            <Card.Text>
                                {type}
                            </Card.Text>
                        </div>
                    <Card.Text className="text-dark">{ details}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Container>
       
    )
    
}

export default DetailCard;

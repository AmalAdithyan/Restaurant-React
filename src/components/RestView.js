import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Restview.css'
import Review from './Review';
import OperatingTime from './OperatingTime';
import { useSelector } from 'react-redux';
import { Container } from "react-bootstrap";

function RestView() {
 

  const params = useParams()



  useEffect(() => {
  
  }, [])

  const {restaurantList} =useSelector(state=>state.restaurantReducer)
  const restaurant = restaurantList.find(item => item.id == params.id)
  //console.log(restaurant);
  return (
    <>
      {
        restaurant ? (
          <div className="bg-black">
            <Container className="px-5">
              <Row className="p-5">
                <Col id="popefect" lg={6} md={6} className="mt-1">
                  <img
                    className="rounded border p-2"
                    style={{height:"51rem"}}
                    src={restaurant.photograph}
                    alt="..."
                  />
                </Col>
                <Col lg={6} md={6} className="mb-2 overflow-hidden">
                  <Row id="popefect">
                    <Col className="pt-1">
                      <ListGroup className="p-2 rounded border text-white">
                        <span className="p-3 bg-dark rounded">
                          <h2 className=" text-white fw-bold overflow-hidden">
                            {restaurant.name}
                          </h2>
                          <hr />
                          <p className="fs-4"><span className="fw-bold ">Cuisine Type :</span>{" "}
                            {restaurant.cuisine_type}
                          </p>
                          <p className="fs-4"><span className="fw-bold ">Address :</span>{" "}
                            {restaurant.address}
                          </p>
                          <p className="fs-4"><span className="fw-bold ">Neighborhood :</span>{" "}
                            {restaurant.neighborhood}
                          </p>
                          <hr/>
                          <Row>
                            <Col className=" text-center">
                              <OperatingTime timeData={restaurant.operating_hours} />
                              <Review reviewData={restaurant.reviews} />
                            </Col>
                          </Row>
                        </span>
                      </ListGroup>
                    </Col>
                  </Row>
  
                  <Row id="popefect">
                    <Col className="text-center">
                      <img
                        className="rounded border w-100 p-2 mt-2"
                        src="https://imgs.search.brave.com/hoD2DSYlF_HnGAFpPheECKhD4ywt8vSUMxzMuljgpbc/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzUwMjYy/MC9zY3JlZW5zaG90/cy8xODQ2NDA1L2No/ZWYuZ2lm.gif"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        ) : ""
      }
    </>
  )
}

export default RestView
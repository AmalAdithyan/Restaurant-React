import { createStore, combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { restReducer } from "../reducers/restReducer";

//reducer
const reducer=combineReducers({
restaurantReducer:restReducer
})

//create middleware
const middleware=[thunk]

//create store
 const store=createStore(reducer,applyMiddleware(...middleware))

 export default store;



 /*import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Restview.css'
import Review from './Review';
import OperatingTime from './OperatingTime';
import { useSelector } from 'react-redux';
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
          <Row>

<Col id='cal' lg={6} md={6} className='ps-5 pt-5 pb-5 ms-5 text-center'>
  <img className='rounded border border-warning' style={{ height: '600px', borderWidth: '4px' }} src={restaurant.photograph} alt="Restaurant"></img>
</Col>


            <Col id='cal' className='me-5 mt-5'>

              <ListGroup variant="flush">
                <ListGroup.Item><h1 className='text-warning'>{restaurant.name}</h1></ListGroup.Item>
                <ListGroup.Item><p>Neighborhood  :<strong className='fs-5'>{restaurant.neighborhood}</strong></p></ListGroup.Item>
                <ListGroup.Item><p>Cuisine  :<strong className='fs-5'>{restaurant.cuisine_type}</strong></p></ListGroup.Item>
                <ListGroup.Item><p>Address  :<strong className='fs-6'>{restaurant.address}</strong></p></ListGroup.Item>
                <ListGroup.Item>
                  <div className='mt-4'><OperatingTime timeData={restaurant.operating_hours}/></div>
                  <div className='mt-3'><Review reviewData={restaurant.reviews}/></div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>) : ""
      }
    </>
  )
}

export default RestView*/
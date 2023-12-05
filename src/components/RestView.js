import {React, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function RestView() {
  
  var[Allrestaurants,setRestaurants]=useState([])

  const fetchRest=async()=>{
    const result=await fetch('/restaurants.json')
    result.json().then(data=>{
      setRestaurants(data.restaurants)
    })
  }

  const params=useParams()
  
  const restaurant=Allrestaurants.find(item=>item.id==params.id)
  console.log(restaurant);

  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <>
   { 
   restaurant?(
     <Row>
        <Col lg={6} md={6} className='p-5 ms-5 text-center'>
            <img className='rounded border' style={{height:'600px'}} src={restaurant.photograph}></img>
        </Col>

        <Col lg={6} md={6} className='p-5 ms-5 text-center'>
        <ListGroup variant="flush">
        <ListGroup.Item>{restaurant.name}</ListGroup.Item>
        <ListGroup.Item>{restaurant.neighborhood}</ListGroup.Item>
        <ListGroup.Item>{restaurant.address}</ListGroup.Item>
        <ListGroup.Item>{restaurant.cuisine_type}</ListGroup.Item>
        


      </ListGroup>
        </Col>
    </Row>):""
  }
  </>
  )
}

export default RestView
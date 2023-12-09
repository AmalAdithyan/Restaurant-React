import { React, useState, useEffect } from 'react'
import Restcards from '../Restcards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restList } from '../actions/restaction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Restaurant() {
  // state to hold data from api
  //var [restaurantList, setRestaurant] = useState([])

  // function call API
  //const fetchData = async () => {
    //const result = await fetch('/restaurants.json')
    //result.json().then(
      //data => {
        //setRestaurant(data.restaurants)
      //}
   // )
  //}

 // console.log(restaurantList);

  const dispatch=useDispatch()

  useEffect(() => {
   // fetchData()

    dispatch(restList())
  }, [])

  const {restaurantList} =useSelector(state=>state.restaurantReducer)

  return (
    <Row>
      {
        restaurantList.map(item => (
          <Col className='p-5' lg={4} md={6} >
            <Restcards restdata={item}></Restcards>
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurant
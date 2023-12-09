import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Reviews({reviewData}) {

    const [open, setOpen] = useState(false);

  return (
    <>
    
    <Button 
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='rounded m-2 border '
        variant='success'
        id='popefect'
      >
        Reviews
      </Button>
      
        <Collapse in={open} >
          <div id="example-collapse-text" className='border rounded'>
            {
                reviewData.map(item=>(

                <Card body style={{ width: '100%' }} className='bg-dark text-white rounded'>
                    <h4 className='overflow-hidden'>{item.name} | {item.date}</h4>
                    <h5 className='text-warning overflow-hidden '>Rating : {item.rating}</h5>
                    <p>Comments : {item.comments}</p>
                </Card>

                ))
            
            }
          </div>
        </Collapse>
     

    </>
  )
}

export default Reviews
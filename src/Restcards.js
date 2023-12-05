import React from 'react'
import Card from 'react-bootstrap/Card';

function Restcards({restdata}) {
    return (
        <>  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={restdata.photograph} />
            <Card.Body>
                <Card.Title>{restdata.name}</Card.Title>
                <Card.Text>
                    <p>
                       <strong>Cuisine Type :</strong> {restdata.cuisine_type}
                    </p>
                      <p>
                    <strong>Location :</strong> {restdata.neighborhood}
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Restcards
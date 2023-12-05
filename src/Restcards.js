import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcards({ restdata }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginBottom: '10px' }}>
      <Link to={`/view-restaurant/${restdata.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <Card style={{ width: '18rem', textAlign: 'center' }}>
          <Card.Img variant="top" src={restdata.photograph} />
          <Card.Body>
            <Card.Title>{restdata.name}</Card.Title>
            <Card.Text>
              <p>
                <strong>Cuisine Type:</strong> {restdata.cuisine_type}
              </p>
              <p>
                <strong>Location:</strong> {restdata.neighborhood}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Restcards;


/*import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcards({restdata}) {
    return (
        <> <Link to={`/view-restaurant/${restdata.i}`} style={{textDecoration:'none'}}> <Card style={{ width: '18rem' }}>
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
        </Link>
        </>
    )
}

export default Restcards
*/
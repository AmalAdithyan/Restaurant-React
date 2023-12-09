import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restcard.css';

function Restcards({ restdata }) {
  return (
    <div id='cal1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <Link to={`/view-restaurant/${restdata.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <Card id="popefect" className="ms-auto me-auto bg-black text-white border rounded p-1" style={{ width: "18rem", height: '75vh' }}>
          <Card.Img variant="top" className="rounded-top" style={{ overflowY: 'hidden' }} src={restdata.photograph} />
          <Card.Body>
            <span className="fs-3 fw-bold">{restdata.name}</span>
            <Card.Text>
              <p>Cuisine type: {restdata.cuisine_type}</p>
              <p>{restdata.address}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Restcards;

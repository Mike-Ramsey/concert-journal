import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


export default function UpdateConcert() {
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [notes, setNotes] = useState('');
  const [id, setID] = useState(null);
  
  const updateConcertData = () => {
    axios.put(`https://625a4d66cda73d132d1e5031.mockapi.io/concerts/${id}`, {
      artist, date, venue, notes
    });
  }

  useEffect(() => {
    setID(localStorage.getItem('id'));
    setArtist(localStorage.getItem('Artist'));
    setDate(localStorage.getItem('Date'));
    setVenue(localStorage.getItem('Venue'));
    setNotes(localStorage.getItem('Notes'));
  }, []);
  


  return (
    <div id="update-concert">
      <Form className='create-form'>
        <Form.Group>
          <Form.Label>Artist </Form.Label>
          <Form.Control type='text' value={artist} onChange={(e) => setArtist(e.target.value)} />
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Date </Form.Label>
          <Form.Control type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Venue </Form.Label>
          <Form.Control type='text' value={venue} onChange={(e) => setVenue(e.target.value)}/>
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Notes </Form.Label>
          <Form.Control as='textarea' value={notes} rows={3} onChange={(e) => setNotes(e.target.value)}/>
        </Form.Group>
        <Button type='button' onClick={updateConcertData}>Update</Button>
      </Form>
    </div>
  )
}

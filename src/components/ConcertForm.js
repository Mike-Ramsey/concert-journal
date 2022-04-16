import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createConcert, getConcerts } from '../services/ConcertService';


export default function ConcertForm() {
  const [concerts, setConcerts] = useState([])
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [notes, setNotes] = useState('');

  const refreshConcerts = async () => {
    await getConcerts();
    
  };

  const addConcert = () => {
    createConcert({artist, date, venue, notes});
    refreshConcerts();
  }

  useEffect(() => {
    refreshConcerts();
  }, [])

  return (
    <div>
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
        <Button onClick={addConcert} type='button'>Submit</Button>
      </Form>
    </div>
  )
}

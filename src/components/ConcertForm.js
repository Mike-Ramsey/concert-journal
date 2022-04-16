import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { createConcert, getConcerts } from '../services/ConcertService';


export default function ConcertForm() {
  const [concerts, setConcerts] = useState([])
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [notes, setNotes] = useState('');


  // const addConcert = () => {
  //   axios.post('https://625a4d66cda73d132d1e5031.mockapi.io/concerts', {
  //     artist, date, venue, notes });
  //     setArtist(() => '');
  //     setDate(() => '');
  //     setVenue(() => '');
  //     setNotes(() => '');
  // }

  // const concert = {
  //   id: concert.id,
  //   artist: concert.artist,
  //   date: concert.date,
  //   venue: concert.venue,
  //   notes: concert.notes
  // };

  const refreshConcerts = async () => {
    const freshConcerts = await getConcerts();
    setConcerts((freshConcerts) ? freshConcerts : []);
  };
  useEffect(() => {

    refreshConcerts();
  }, [])


  const addConcert = () => {
    createConcert({artist, date, venue, notes});
    refreshConcerts();
  }

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

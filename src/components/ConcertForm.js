import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createConcert, getConcerts } from '../services/ConcertService';


export default function ConcertForm({ artist, setArtist, date, setDate, venue, setVenue, notes, setNotes, addConcert }) {

  return (
    <div>
      <Form>
      <Form.Group>
          <Form.Label>Date </Form.Label>
          <Form.Control type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist </Form.Label>
          <Form.Control type='text' value={artist} onChange={(e) => setArtist(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Venue </Form.Label>
          <Form.Control type='text' value={venue} onChange={(e) => setVenue(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes </Form.Label>
          <Form.Control as='textarea' value={notes} rows={3} onChange={(e) => setNotes(e.target.value)}/>
        </Form.Group>
        <Button onClick={addConcert} variant="primary" size='sm' type='button'>Submit</Button>
      </Form>
    </div>
  )
}

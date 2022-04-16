import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { deleteConcert, getConcerts, updateConcert } from '../services/ConcertService';
// import '../App.css';

export default function Concerts({ artist, setArtist, date, setDate, venue, setVenue, notes, setNotes, addConcert }) {
  const [updateForm, setUpdateForm] = useState('hideUpdateForm');
  const [concertData, setConcertData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [editDate, setEditDate] = useState('');
  const [editArtist, setEditArtist] = useState('');
  const [editVenue, setEditVenue] = useState('');
  const [editNotes, setEditNotes] = useState('');
  
  const refreshConcerts = async () => {
    const freshConcerts = await getConcerts();
    setConcertData((freshConcerts) ? freshConcerts : []);
  };
  
  useEffect(() => {
    setEditDate(localStorage.getItem('Date'))
    setEditArtist(localStorage.getItem('Artist'))
    setEditVenue(localStorage.getItem('Venue'))
    setEditNotes(localStorage.getItem('Notes'))
  }, [])

  const handleDelete = async (concert) => {
    await deleteConcert(concert);
    refreshConcerts();
  }

  const changeStyle = () => {
    setUpdateForm('showUpdateForm');
  }

  const setData = (data) => {
    console.log(data);
    let { date, artist, venue, notes } = data;
    localStorage.setItem('Date', date);
    localStorage.setItem('Artist', artist);
    localStorage.setItem('Venue', venue);
    localStorage.setItem('Notes', notes);
    changeStyle();
  }

  // const handleUpdate = async (concert) => {
  //   await updateConcert(concert);
  //   refreshConcerts();
  // }

  return (
    <>
    <div className={updateForm}>
      <Form>
      <Form.Group>
          <Form.Label>Date </Form.Label>
          <Form.Control type='date' value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
        </Form.Group>        
        <Form.Group>
          <Form.Label>Artist </Form.Label>
          <Form.Control type='text' value={editArtist} onChange={(e) => setEditArtist(e.target.value)} />
        </Form.Group>       
        <Form.Group>
          <Form.Label>Venue </Form.Label>
          <Form.Control type='text' value={editVenue} onChange={(e) => setEditVenue(e.target.value)}/>
        </Form.Group>       
        <Form.Group>
          <Form.Label>Notes </Form.Label>
          <Form.Control as='textarea' rows={3} value={editNotes} onChange={(e) => setEditNotes(e.target.value)}/>
        </Form.Group>
        <Button type='button'>Update</Button>
      </Form>
    </div>
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Artist</th>
            <th scope='col'>Venue</th>
            <th scope='col'>Notes</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {concertData.map((data) => {
            return (
              <tr key={data.id}>
                <td key={`date-${data.id}`}>{data.date}</td>
                <td key={`artist-${data.id}`}>{data.artist}</td>
                <td key={`venue-${data.id}`}>{data.venue}</td>
                <td key={`notes-${data.id}`}>{data.notes}</td>
                <td><Button variant='success' size='sm' onClick={() => setData(data)}>Edit</Button></td>
                <td><Button variant='danger' size='sm' onClick={() => handleDelete(data)}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </>
  )
}

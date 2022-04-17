import React, { Component, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getConcerts, createConcert, updateConcert, deleteConcert } from './services/ConcertService';
import ConcertForm from './components/ConcertForm';
import Concerts from './components/Concerts';
import UpdateConcert from './components/UpdateConcert';
import './App.css';

export default function App() {
  const [concerts, setConcerts] = useState('');
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [notes, setNotes] = useState('');
  const [concertForm, setConcertForm] = useState('hideForm');
  const [addButton, setAddButton] = useState('showButton')
  
  const changeStyle = () => {
    setConcertForm('showForm');
    setAddButton('hideButton');
  }
  const addConcert = () => {
    createConcert({date, artist, venue, notes});
    refreshConcerts();
  }

  const refreshConcerts = async () => {
    const freshConcerts = await getConcerts();
    setConcerts((freshConcerts) ? freshConcerts : []);   
  };
  useEffect(() => {
    refreshConcerts();
  }, [])


  return (
    <div className='main'>
      <h1 className='main-header'>Concert Journal</h1>
      <br/>

      <div>
        <UpdateConcert />
      </div>

      {/* <div>
        <UpdateConcert />
      </div> */}
      <div>
        <Concerts />
      </div>
      <div className={addButton}>
      <Button onClick={changeStyle} >Add a New Concert</Button>
      </div>
      <div  className={concertForm}>
        <ConcertForm 
          artist={artist}
          setArtist={setArtist}          
          date={date}
          setDate={setDate}
          venue={venue}
          setVenue={setVenue}
          notes={notes}
          setNotes={setNotes}
          addConcert={addConcert}
          />
      </div>
    </div>
  )
}

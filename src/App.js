import React, { Component, useEffect, useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { getConcerts, createConcert, updateConcert, deleteConcert } from './services/ConcertService';
import CreateConcert from './components/ConcertForm';
import Concerts from './components/Concerts';
import UpdateConcert from './components/UpdateConcert';
import './App.css';

export default function App() {

  return (
    <div className='main'>
      <h1 className='main-header'>Concert Journal</h1>
      <div id='create-concert'>
        <CreateConcert />
      </div>
      <br/>
      <br/>
      {/* <div>
        <UpdateConcert />
      </div> */}
      <div>
        <Concerts />
      </div>
    </div>
  )
}

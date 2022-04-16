import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { deleteConcert, getConcerts } from '../services/ConcertService';

export default function Concerts() {

  const [concertData, setConcertData] = useState([]);
  
  const refreshConcerts = async () => {
    const freshConcerts = await getConcerts();
    setConcertData((freshConcerts) ? freshConcerts : []);
  };
  
  useEffect(() => {
    refreshConcerts();
  }, [])

  const handleDelete = async (concert) => {
    await deleteConcert(concert);
    refreshConcerts();

  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Artist</th>
            <th scope='col'>Date</th>
            <th scope='col'>Venue</th>
            <th scope='col'>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {concertData.map((data) => {
            return (
              <tr key={data.id}>
                <td key={`artist-${data.id}`}>{data.artist}</td>
                <td key={`date-${data.id}`}>{data.date}</td>
                <td key={`venue-${data.id}`}>{data.venue}</td>
                <td key={`notes-${data.id}`}>{data.notes}</td>
                <td><Button onClick={() => handleDelete(data)}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

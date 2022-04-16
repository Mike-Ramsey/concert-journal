import axios from 'axios';
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
  // axios.get('https://625a4d66cda73d132d1e5031.mockapi.io/concerts')
  //   .then((response) => {
  //     setConcertData(response.data);
  //   })
    refreshConcerts();
  }, [])

  // const setData = (data) => {
  //   let { artist, date, venue, notes } = data;
  //   localStorage.setItem('Artist', artist);
  //   localStorage.setItem('Date', date);
  //   localStorage.setItem('Venue', venue);
  //   localStorage.setItem('Notes', notes);
  // }

  const handleDelete = async (concert) => {
    // axios.delete(`https://625a4d66cda73d132d1e5031.mockapi.io/concerts/${id}`)
    //   .then(() => {
    //     getData();
    //   })
    await deleteConcert(concert);
    refreshConcerts();

  }

  // const getData = () => {
  //   axios.get(`https://625a4d66cda73d132d1e5031.mockapi.io/concerts`)
  //     .then((getData) => {
  //       setConcertData(getData.data);
  //     })
  // }

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
              <tr>
                <td>{data.artist}</td>
                <td>{data.date}</td>
                <td>{data.venue}</td>
                <td>{data.notes}</td>
                <td><Button onClick={() => handleDelete(data)}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

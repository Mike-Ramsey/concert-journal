const CONCERT_ENDPOINT = 'https://625a4d66cda73d132d1e5031.mockapi.io/concerts';

const getFetchOptions = (method, data) => ({ 
  method: method, 
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});

export const getConcerts = async () => {
  try {
      const response = await fetch(CONCERT_ENDPOINT);
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const createConcert = async (concert) => {
  try {
      // const concert = {
      //   artist: concert.artist,
      //   date: concert.date,
      //   venue: concert.venue,
      //   notes: concert.notes
      // }
      const response = await fetch(CONCERT_ENDPOINT, getFetchOptions("POST", concert))
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const updateConcert = async (concert) => {
  try {
      const concertWithoutId = { 
        artist: concert.artist,
        date: concert.date,
        venue: concert.venue,
        notes: concert.notes
      };
      const response = await fetch(CONCERT_ENDPOINT + "/" + concert.id, getFetchOptions("PUT", concertWithoutId));
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const deleteConcert = async (concert) => {
  try {
      const response = await fetch(CONCERT_ENDPOINT + "/" + concert.id, { method: "DELETE" })
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

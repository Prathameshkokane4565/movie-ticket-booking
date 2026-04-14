import React, { useState } from 'react';

const movies = [
  { id: 1, title: 'Pushpa 2', price: 200 },
  { id: 2, title: 'Singham Again', price: 150 },
  { id: 3, title: 'Avengers', price: 250 }
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [seats, setSeats] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎬 Movie Ticket Booking</h1>
      <div>
        <label>Select Movie: </label>
        <select onChange={(e) => setSelectedMovie(movies.find(m => m.id == e.target.value))}>
          {movies.map(m => <option key={m.id} value={m.id}>{m.title} (₹{m.price})</option>)}
        </select>
      </div>
      <div style={{ marginTop: '20px' }}>
        <input type="number" placeholder="Enter Seats" onChange={(e) => setSeats(e.target.value)} />
        <p>Total Price: ₹{seats * selectedMovie.price}</p>
        <button onClick={() => alert('Booking Successful!')}>Book Now</button>
      </div>
    </div>
  );
}

export default App;

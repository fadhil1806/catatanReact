// import axios from 'axios';
'use client'
import React from 'react';
import PokemonList from './pokemon/components/PokemonList/Pokemon.List';

// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/data/tag');
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* <button onClick={fetchData}>Klik</button> */}
      <PokemonList />
    </>
  );
}

export default App;

import axios from 'axios'
import PokemonList from './components/PokemonList/Pokemon.List'
const data = () => {
  axios.get('http://localhost:5000/api/data/tag').then(data => console.log(data.data))
}
function App() {
  return (
    <>
      <h1>Hello</h1>
      <button onClick={data}>Klik</button>
      <PokemonList/>
    </>
  )
}

export default App
 
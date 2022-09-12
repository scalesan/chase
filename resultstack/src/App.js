import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState({
    name:""
  })

const handleNameEnteredChange = (e) => {
  axios.get("https://docs.github.com/en/free-pro-team@latest/rest)")
  .then((response) => {
    const users = response.filter(
      e => response.name.includes(e.target.value)).map(filteredName => (
        <li>
          {e.target.value}
        </li>
      ))
    }
  )}
  
 
  return (
    <div>
      <form>
        Please begin typing the name: 
        <input 
          type="text" 
          onChange={handleNameEnteredChange}
          placeholder = "Name"
          />
      </form>
      <ul>
        <li>
        </li>
      </ul>
    </div>
  )
}



export default App;

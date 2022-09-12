import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState({
    name:""
  })
  const [email, setEmail] = useState({
    email:""
  })


const handleNameEnteredChange = e => {
  axios.get("https://docs.github.com/en/free-pro-team@latest/rest")
  .then((response) => {
    const users = response.filter(
    
    
  )})}

  const handleEmailEnteredChange = e => {
    axios.get("https://docs.github.com/en/free-pro-team@latest/rest")
    .then((response) => {
      const users = response.filter(
      
      
    )})}
  
 
  return (
    <div>
      <form>
        Please begin typing the name: 
        <input 
          type="text" 
          onChange={handleNameEnteredChange}
          placeholder = "Name"
          />or enter email here
          <input
            type="text"
            onChange = {handleEmailEnteredChange}
            placeholder = "Email"
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

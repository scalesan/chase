import axios from 'axios';
import { useState } from 'react';

const App = () => {
const handleNameEnteredChange = e => {
  axios.get("https://docs.github.com/en/free-pro-team@latest/rest")
  .then((response) => {
    if ((e.target.value).includes('@')){
      const users = response.filter(
      
      
    )}
    else
      {
        
      }})}
  
  return (
    <div>
      <form>
        Please begin typing the name or email: 
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

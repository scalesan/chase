import "./App.css";
import { useState, useEffect } from "react";


const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch("http://localhost:3000/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      });
  };

  return (
    <div className="App">
      {userData.length > 0 && (
        <ul>
          {userData.map((user) => (
            <table>
              <tr>
                <td className="borderOnRight">{user.ticker}</td>
                <td className="borderOnRight">{user.assetClass}</td>
                <td>{user.price}</td>
              </tr>
            </table>
          
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

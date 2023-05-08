import "./App.css";
import { useState, useEffect } from "react";
import _ from "lodash";

const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);
  const sortByAssetClass = () => {
    let sortedUserData = _.orderBy(userData, "assetClass", "asc");
    setUserData(sortedUserData);
  };

  const sortByTicker = () => {
    let sortedUserData = _.orderBy(userData, "ticker", "asc");
    setUserData(sortedUserData);
  };

  const sortByPrice = () => {
    let sortedUserData = _.orderBy(userData, "price", "desc");
    setUserData(sortedUserData);
  };
  const fetchUserData = () => {
    fetch("http://localhost:3004/items")
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
        <div>
          {userData.map((user, index) => (
            <table key={index}>

              <tbody>
                <tr>
                  <td className="borderOnRight color">{user.assetClass}</td>
                  <td className="borderOnRight">{user.price}</td>
                  <td>{user.ticker}</td>
                </tr>
              </tbody>
            </table>
          ))}
          <button id="firstButtonMargin" onClick={sortByAssetClass}>
            Sort by Asset Class
          </button>
          <button onClick={sortByPrice}>Sort by Price</button>
          <button onClick={sortByTicker}>Sort by Ticker</button>
        </div>
      )}
    </div>
  );
};

export default App;

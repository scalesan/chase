import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [sortedUserDataByAssetClass, setSortedUserDataByAssetClass] = useState(
    []
  );
  const [sortedPriceDescendingOrder, setSortedPriceDescendingOrder] = useState(
    []
  );
  const [tickerInAlphabeticalOrder, setTickerInAlphabeticalOrder] = useState(
    []
  );

  useEffect(() => {
    fetchUserData();
  }, []);
  const sortByTicker = () =>
    [...userData].sort((a, b) => a.assetClass - b.assetClass);
  const sortByAssetClass = () =>
    [...userData].sort((a, b) => {
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].assetClass === "Equities") {
          return 1;
        }
        if (a.assetClass === "Macro") {
          return 1;
        }
        if (b.assetClass === "Macro") {
          return 1;
        }
        if (a.assetClass === "Credit") {
          return 1;
        } else {
          return 0;
        }
      }
    });

  const sortByPrice = () => [...userData].sort((a, b) => a.price - b.price);
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
        <div>
          {userData.map((user, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td className="borderOnRight">{user.assetClass}</td>
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

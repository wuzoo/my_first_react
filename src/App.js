import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(1);
  const [money, setMoney] = useState(1);

  function mymoney(event) {
    setMoney(event.target.value);
  }

  function coinSelected(event) {
    setCoin(event.target.value);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=40")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={coinSelected}>
            {coins.map((coin) => {
              return (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
          <br />
          <input onChange={mymoney} placeholder="Dollars" type="text" />
          <br />
          <br />
          <div>
            <span>You can get </span>
            <input
              value={money === 1 ? null : Math.floor(money / coin)}
              type="number"
            />
            <span> Coins</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;

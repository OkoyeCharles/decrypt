import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMarkets from '../redux/actions';
import Coin from './Coin';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.markets);
  const [marketLoaded, setMarketLoaded] = useState(false);

  useEffect(() => {
    if (!marketLoaded) {
      dispatch(fetchMarkets());
      setMarketLoaded(true);
    }
  });

  return (
    <div className="home">
      <div className="home__container">
        <ul className="home__grid">
          {markets?.map((coin) => (
            <Coin
              key={coin.rank}
              id={coin.id}
              symbol={coin.symbol}
              price={coin.price_usd}
              change={coin.percent_change_24h}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
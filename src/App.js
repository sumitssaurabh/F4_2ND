
import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div  className='table1'>
      <h1>Cryptocurrency Table</h1>
      <table>
        <thead>
          <tr>
          <th>Image</th>
            <th>Name</th>
            <th>ID</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
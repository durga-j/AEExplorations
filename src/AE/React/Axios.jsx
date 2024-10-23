import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching= () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map(data => (
        <ul key={data.id}>
          <li>{data.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default DataFetching;

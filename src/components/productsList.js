import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get('/data/data.json')
        .then((res) => {
          setProducts(res.data);
        })
        .catch(console.log);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

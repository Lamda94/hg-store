import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get('/data/data.json')
        .then((res) => {
          const data = res.data.filter((Produc) => Produc.id == id);
          setProduct(data);
        })
        .catch(console.log);
    }, 2000);
  }, [id]);

  return (
    <div className="row d-flex justify-content-center p-5">
      {product.map((pro) => (
        <Detail key={pro.id} data={pro} />
      ))}
    </div>
  );
}

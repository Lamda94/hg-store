import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(async () => {
    try {
      let data;
      const querySnapshot = await db.collection('Products').get();
      querySnapshot.forEach((doc) => {
        if (doc.id == id) {
          setProduct({ ...doc.data(), id: id });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return (
    <div className="row d-flex justify-content-center p-5">
      <Detail key={product.id} data={product} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import { db } from '../firebase';

export default function FilterProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log(products, id);
  useEffect(async () => {
    try {
      let data = [];

      const querySnapshot = await db
        .collection('Products')
        .where('category', '==', id)
        .get();
      querySnapshot.forEach((doc) => {
        let d = doc.data();
        d.id = doc.id;
        data.push(d);
      });
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [id]);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
        {loading ? (
          <Spinner />
        ) : (
          products.map((product) => <Product key={product.id} data={product} />)
        )}
      </div>
    </div>
  );
}

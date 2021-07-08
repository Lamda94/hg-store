import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Products from '../components/ProductFilter';
import { Link } from 'react-router-dom';

export default function Filter() {
  const [category, setCategory] = useState([]);
  useEffect(async () => {
    try {
      let data = [];
      const querySnapshot = await db.collection('Category').get();
      querySnapshot.forEach((doc) => {
        let d = doc.data();
        d.id = doc.id;
        data.push(d);
      });
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="d-flex justify-content-center categories">
      <div className="col-2 pt-5 mt-5 border-start bg-light">
        <ul>
          <li>
            <h2>Categorias</h2>
          </li>
          {category.map((data) => {
            return (
              <Link
                key={data.id}
                className="text-secondary a"
                to={`/category/${data.id}`}
              >
                <li>{data.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="col-7 border-start border-end bg-light">
        <div className="d-flex justify-content-end">
          <p className="pt-5 mt-5">
            <Link className="text-secondary" to="/">
              Inicio
            </Link>{' '}
            / <span className="text-muted">Productos</span>
          </p>
          <div className="input-group search me-4 ms-3 mt-5 pt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar producto"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
}

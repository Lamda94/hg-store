import React, { useEffect, useState, useContext } from 'react';
import Products from '../components/productsList';
import { Link } from 'react-router-dom';
import Spinner from '../components/spinner';
import axios from 'axios';

export default function Store() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/data/category.json').then((res) => {
      setCategory(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center categories">
      <div className="col-2 pt-5 mt-5 border-start bg-light">
        <ul>
          <li>
            <h2>Categories</h2>
          </li>
          {loading ? (
            <Spinner />
          ) : (
            category.map((data) => {
              return (
                <Link className="text-secondary a" to={`/category/${data.id}`}>
                  <li>{data.name}</li>
                </Link>
              );
            })
          )}
        </ul>
      </div>
      <div className="col-7 border-start border-end bg-light">
        <div className="d-flex justify-content-end">
          <p className="pt-5 mt-5">
            <Link className="text-secondary" to="/">
              Home
            </Link>{' '}
            / <span className="text-muted">Store</span>
          </p>
          <div className="input-group search me-4 ms-3 mt-5 pt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search product"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
        <Products filtro={'Products'} />
      </div>
    </div>
  );
}

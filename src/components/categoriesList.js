import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { db } from '../firebase';

export default () => {
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    try {
      let data = [];
      const querySnapshot = await db.collection('Category').get();
      querySnapshot.forEach((doc) => {
        let d = doc.data();
        d.id = doc.id;
        data.push(d);
      });
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="d-flex justify-content-evenly g-4">
      {categories.map((category) => {
        return (
          <Link
            key={category.name}
            className="text-light a"
            to={`/category/${category.id}`}
          >
            <Category data={category} />
          </Link>
        );
      })}
    </div>
  );
};

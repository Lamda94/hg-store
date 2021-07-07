import { db } from '../firebase';
import axios from 'axios';

axios
  .get('/data/seeds.json')
  .then((res) => {
    res.data.map(async (product) => {
      await db.collection('Category').doc().set(product);
      console.log('Listo!');
    });
  })
  .catch(console.log);

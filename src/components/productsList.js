import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Product from './Product'

export default () => {
    const [products, setProducts] = useState([]);
    console.log(products); 
    useEffect(() => {           
        setTimeout(() => {
            axios('/data/data.json')
            .then((res) => {
                setProducts(res.data);
            })
            .catch(console.log);
        }, 2000);
    }, []);
        
    return ( 
        <div className="row row-cols-1 row-cols-md-3 g-4" key="0">
            {    
                products.map(product=>{
                    return <Product name={product.name} descr={product.description} src={product.images} availability={product.availability}></Product>
                })
            }
        </div>
    )           
}

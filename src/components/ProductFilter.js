import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Product from './Product'
import {useParams} from 'react-router-dom'

export default function FilterProduct(){
    const {id} = useParams();  
    console.log("id:"+id);
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {             
        setTimeout(() => {
            axios.get('/data/data.json')
            .then((res) => {                
                const data = res.data.filter(product => product.category == id ); 
                setProducts(data);
            })
            .catch(console.log);
        }, 2000);
    }, [id]);
        
    return ( 
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3" >
                {    
                    products.map((product)=><Product key={product.id} data={product}/>)
                }
            </div>
        </div>        
    )           
}
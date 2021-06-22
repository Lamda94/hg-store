import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Detail from '../components/Detail'
import {useParams} from 'react-router-dom'

export default function ProductDetails(){
    const {id} = useParams();  
    console.log("id:"+id);
    const [product, setProduct] = useState([]);
    console.log(product);
    useEffect(() => {             
        setTimeout(() => {
            axios.get('/data/data.json')
            .then((res) => {                
                const data = res.data.filter(product => product.id == id ); 
                setProduct(data);
            })
            .catch(console.log);
        }, 2000);
    }, [id]);
        
    return ( 
        <div className="row d-flex justify-content-center p-5" >
            {    
                product.map((pro)=><Detail key={pro.id} data={pro}/>)
            }
        </div>     
    )           
}

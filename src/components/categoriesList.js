import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Category from './Category';

export default () => {
    const [categories,setCategories] = useState([]);

    useEffect(() => {        
         axios.get("/data/category.json").then(res=>setCategories(res.data));
    }, []);

    return (
        <div className="d-flex justify-content-evenly g-4" >
            {
                categories.map(category=>{
                    return(
                        <Link key={category.name} className="text-light a" to={`/category/${category.id}`}>
                            <Category data={category}/>
                        </Link>
                    )
                })
            }
        </div>
        
    )
}

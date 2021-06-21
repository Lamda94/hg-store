import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Category from './Category';
export default () => {
    const [categories,setCategories] = useState([]);
    console.log(categories);
    useEffect(() => {        
         axios.get("/data/category.json").then(res=>setCategories(res.data));
    }, []);

    return (
        <div className="d-flex justify-content-evenly g-4" >
            {
                categories.map(category=><Category key={category.id} data={category}/>)
            }
        </div>
        
    )
}

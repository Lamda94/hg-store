import React from 'react';
import Product from './Product'

const productsList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Product name={"Product 1"} descr={"Product description 1."} src={"img/product.png"}></Product>
            <Product name={"Product 2"} descr={"Product description 2."} src={"img/product.png"}></Product>
            <Product name={"Product 3"} descr={"Product description 3."} src={"img/product.png"}></Product>
            <Product name={"Product 4"} descr={"Product description 4."} src={"img/product.png"}></Product>
            <Product name={"Product 5"} descr={"Product description 5."} src={"img/product.png"}></Product>
            <Product name={"Product 6"} descr={"Product description 6."} src={"img/product.png"}></Product>
        </div>
    );
}

export default productsList;

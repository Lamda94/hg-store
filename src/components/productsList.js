import React from 'react';
import Product from './Product'

const productsList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Product name={"Producto 1"} descr={"Descripcion producto 1."} src={"img/product.png"}></Product>
            <Product name={"Producto 2"} descr={"Descripcion producto 2."} src={"img/product.png"}></Product>
            <Product name={"Producto 3"} descr={"Descripcion producto 3."} src={"img/product.png"}></Product>
            <Product name={"Producto 4"} descr={"Descripcion producto 4."} src={"img/product.png"}></Product>
            <Product name={"Producto 5"} descr={"Descripcion producto 5."} src={"img/product.png"}></Product>
            <Product name={"Producto 6"} descr={"Descripcion producto 6."} src={"img/product.png"}></Product>
        </div>
    );
}

export default productsList;

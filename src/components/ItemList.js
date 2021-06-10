import React, { Component } from 'react'
import Item from './Item'

export default function ItItemListem (){    
    return (
        <div className="container">
        <div className="row align-items-start">
            <div className="col">
                 <Item nombre={'Producto 1'} descr={"Description del producto."}></Item>
            </div>
        </div>                
    </div>   
    )
}
import React, { Component } from 'react'

export default function Item ({nombre, descr}){    
        return (
            <div className="card">
                <img src="#" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descr}</p>
                    <a href="#" className="btn btn-primary">Añadir al Carrito</a>
                </div>
            </div>
        )
}

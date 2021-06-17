import React, { useState } from 'react'

export default function Product({name, descr, src, availability}) {
    const [number, setNumber] = useState(0);
    const [ava, setAva] = useState(availability)

    const Add = ()=>{
        if (number < ava) {
            return setNumber(number+1);
        }        
    }

    const Diminish =()=>{
        return setNumber(()=>{
            if (number > 0) {
                return number-1;
            }else{
                return number;
            }
        });
    }

    return (
        <div className="col">
            <div className="card text-dark bg-light mb-3">
                <img src={src} className="card-img-top card-header" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{descr}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={Add}>+</button>
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">{number}</label>
                        <button type="button" className="btn btn-primary" onClick={Diminish}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

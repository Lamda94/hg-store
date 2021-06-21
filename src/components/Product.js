import React, { useState } from 'react'
import Modal from './Modal'
export default function Product({data}) {
    const [number, setNumber] = useState(0);
    const [ava, setAva] = useState(data.availability)

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
        <div className="col d-flex justify-content-center">
            <div className="card text-dark bg-light mb-3">
                <img src={data.img} className="card-img-top card-header" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={Add}>+</button>
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">{number}</label>
                        <button type="button" className="btn btn-primary" onClick={Diminish}>-</button>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`Modal${data.id}`}>Details</button>
                    <Modal data={data}/>
                </div>
            </div>
        </div>
    )
}

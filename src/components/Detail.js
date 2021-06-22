import React, {useState} from 'react';

export default function Detail({data}) {
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
        <div className="row col-9 categories pb-5 d" >
            <div className="card mb-3 pt-5 mt-5 ms-2" style={{"width": "80%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.images} alt="Imagen del producto." width="80%" className="ms-4"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.description}</p>
                            <ul className="border-top mt-3 row pt-3">
                                <li>Price:{` ${data.price} USD`}</li>
                                <li>Delivery time: {`${data.time} Dias` } </li>
                                <li>Availability: {(data.availability == 0 ? "Anavailable" : "Available")}</li>
                            </ul>
                            <div className="btn-group me-2" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary" onClick={Diminish}>-</button>
                                <label className="btn btn-outline-secondary" htmlFor="btnradio2">{number}</label>
                                <button type="button" className="btn btn-secondary" onClick={Add}>+</button>
                            </div>
                            <button type="button" className="btn btn-primary ms-2">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

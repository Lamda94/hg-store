import React from 'react'

export default function ItItemListem ({msj}){    
    return (
        <div className="container">
        <div className="row align-items-start">
            <div className="col">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1>{msj}</h1>
                </div>                
            </div>
        </div>                
    </div>   
    )
}
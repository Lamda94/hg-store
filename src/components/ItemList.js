import React from 'react'

export default function ItItemListem ({msj}){    
    return (
        <div className="row align-items-start bg-dark p-5">
            <div className="col p-5">
                <h1 className="text-center p-5 text-light">{msj}</h1>            
            </div>
        </div>     
    )
}
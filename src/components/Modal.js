import React from 'react'

export default function Modal({data}) {
    return (
        <div class="modal fade" id={`Modal${data.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{data.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src={data.img} alt="" /> 
                    <ul>
                        <li>Price:{` ${data.price} USD`}</li>
                        <li>Delivery time: {data.time } </li>
                        <li>Availability: {(data.availability == 0 ? "unavailable" : "available")}</li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

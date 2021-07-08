import React from 'react';

export default function ItItemListem({ msj }) {
  return (
    <div className="row shadow-lg align-items-start pt-5 banner">
      <div className="col p-5 d-flex align-items-center justify-content-center">
        <h1 className="p-5 text-light" style={{ marginTop: '15%' }}>
          {msj}
        </h1>
      </div>
    </div>
  );
}

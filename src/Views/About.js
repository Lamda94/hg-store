import React from 'react';
import { Link } from 'react-router-dom';

export default function Store() {
  return (
    <div className="d-flex justify-content-center categories">
      <div className="col-9 border-start border-end bg-light">
        <div className="d-flex justify-content-end pe-4">
          <p className="pt-5 mt-5">
            <Link className="text-secondary" to="/">
              Inicio
            </Link>{' '}
            / <span className="text-muted">Nosotros</span>
          </p>
        </div>
        <div className="d-flex align-items-center flex-column" style={{"height":"100vh"}}>
          <div className="col-7 mt-5 mb-5">
              <h1 className="text-center mb-4">Quienes Somos</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eveniet beatae. Qui quasi magni assumenda distinctio itaque maxime, porro doloremque alias provident cum maiores reiciendis nostrum. Sit amet similique consequuntur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic delectus earum consequuntur sed minima, architecto blanditiis nisi ad eligendi possimus labore animi minus, cum non amet modi recusandae dolor! 
              </p>
          </div>  
          <div className="col-7 mt-5 mb-5">
              <h1 className="text-center mb-4">Mision y Vision</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eveniet beatae. Qui quasi magni assumenda distinctio itaque maxime, porro doloremque alias provident cum maiores reiciendis nostrum. Sit amet similique consequuntur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic delectus earum consequuntur sed minima, architecto blanditiis nisi ad eligendi possimus labore animi minus, cum non amet modi recusandae dolor! 
              </p>
          </div>  
          <div className="col-7 mt-5 mb-5">
              <h1 className="text-center mb-4">Historia</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eveniet beatae. Qui quasi magni assumenda distinctio itaque maxime, porro doloremque alias provident cum maiores reiciendis nostrum. Sit amet similique consequuntur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic delectus earum consequuntur sed minima, architecto blanditiis nisi ad eligendi possimus labore animi minus, cum non amet modi recusandae dolor! 
              </p>
          </div>  
        </div>
      </div>
    </div>
  );
}

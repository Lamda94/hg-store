import React from 'react';
import NavItem from './NavItem';
import {Link} from 'react-router-dom';

export default function navBar() {
   
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">HG Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavItem name={"Home"} src={"/"} active={true}/>
                            <NavItem name={"Store"} src={"/Store"} activo={false}/>
                            <NavItem name={"About"} src={"/About"} activo={false}/>
                            <NavItem name={"Contact"} src={"/Contact"} activo={false}/>                            
                        </ul>  
                    </div>
                   <div className="d-flex">
                     <img className="img" src="img/cart.svg"/>
                   </div>
                </div>
            </nav>
        )
}

import React from 'react';
import NavItem from './NavItem';

export default function navBar() {
   
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">HG Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavItem name={"Home"} src={"#"} active={true}/>
                            <NavItem name={"Products"} src={"#"} activo={false}/>
                            <NavItem name={"Contacts"} src={"#"} activo={false}/>                            
                        </ul>  
                    </div>
                   <div className="d-flex">
                     <img className="img" src="img/cart.svg"/>
                   </div>
                </div>
            </nav>
        )
}

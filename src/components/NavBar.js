import React, { useContext, useEffect, useState } from 'react';
import NavItem from './NavItem';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function () {
  const location = useLocation();
  const page = location.pathname;
  const [cart, setCart] = useContext(CartContext);
  const [img, setImg] = useState(
    'https://firebasestorage.googleapis.com/v0/b/hg-store-293e9.appspot.com/o/cart-ligth.svg?alt=media&token=496e3d29-fad8-40d2-93ae-b45a267178f9'
  );
  const [css, setCss] = useState(
    'navbar navbar-expand-lg fixed-top bg-transparent navbar-dark'
  );
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    let n = 0;
    cart.forEach((c) => {
      n += c.amount;
    });
    setAmount(n);
  }, [cart]);

  const changeNavbar = (e) => {
    if (window.scrollY >= 80) {
      setImg(
        'https://firebasestorage.googleapis.com/v0/b/hg-store-293e9.appspot.com/o/cart.svg?alt=media&token=d60920bb-bd11-4b2c-baed-ecba78b66dac'
      );
      setCss('navbar navbar-expand-lg fixed-top bg-light navbar-light');
    } else {
      setImg(
        'https://firebasestorage.googleapis.com/v0/b/hg-store-293e9.appspot.com/o/cart-ligth.svg?alt=media&token=496e3d29-fad8-40d2-93ae-b45a267178f9'
      );
      setCss('navbar navbar-expand-lg fixed-top bg-transparent navbar-dark');
    }
  };

  window.addEventListener('scroll', changeNavbar);

  return (
    <nav
      className={
        page == '/'
          ? css
          : 'navbar navbar-expand-lg fixed-top bg-light navbar-light border-bottom'
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HG Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem name={'Inicio'} src={'/'} active={true} />
            <NavItem name={'Productos'} src={'/Store'} activo={false} />
            <NavItem name={'Nosotros'} src={'/About'} activo={false} />
            <NavItem name={'Contacto'} src={'/Contact'} activo={false} />
          </ul>
        </div>
        <Link to="/cart" className="a">
          <div className="d-flex">
            <span
              className="count me-1 rounded-pill text-light pt-2 ps-3 pe-3"
              style={{ background: 'red' }}
            >
              {amount}
            </span>
            <img
              className="img"
              src={
                page == '/'
                  ? img
                  : 'https://firebasestorage.googleapis.com/v0/b/hg-store-293e9.appspot.com/o/cart.svg?alt=media&token=d60920bb-bd11-4b2c-baed-ecba78b66dac'
              }
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

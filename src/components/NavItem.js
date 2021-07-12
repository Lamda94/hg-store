import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({ name, src, active }) {
  return (
    <li className="nav-item">
      <Link
        className={'nav-link ' + (active ? 'active' : '')}
        to={{
          pathname: src,
          search: '',
          hash: '',
          state: {},
        }}
      >
        {name}
      </Link>
    </li>
  );
}

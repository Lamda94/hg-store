import React from 'react'

export default function NavItem({name, src, active}) {
    return (
        <li className="nav-item">
            <a className={"nav-link "+ (active ? "active" : "")} href={src}>{name}</a>
        </li>
    )
}

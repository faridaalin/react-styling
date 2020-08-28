import React from 'react';
import style from './nav.module.css';

export default function Nav() {
    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.active}>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

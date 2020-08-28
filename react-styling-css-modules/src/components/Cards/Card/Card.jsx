import React from 'react';
import style from './card.module.css';
import styleDark from './dark.module.css';

export default function Card(props) {
    let darkBackground = null;
    let lightText = null;

    if (props.variant === "dark") {
        darkBackground = styleDark.dark;
        lightText = styleDark.light;
    }


    return (
        <div className={`${style.box} ${darkBackground}`}>
            <h2 className={`${style.heading} ${lightText}`}>{props.heading}</h2>

            <p className={`${style.text} ${lightText}`}>{props.children}</p>
        </div>
    )
}

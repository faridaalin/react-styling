import React from 'react';
import style from './box.module.css';
import bgColor from "./secondary.module.css";

export default function Box({ children, variant }) {
    console.log(variant)
    let baseColor = null;
    let maxWidth = null;

    if (variant === "secondary") {
        baseColor = bgColor.secondary;
    }

    if (variant === "secondary maxWidth") {
        maxWidth = bgColor.maxWidth;
    }
    return (
        <div className={`${style.box} ${baseColor} ${maxWidth}`}>
            {children}
        </div>
    )
}

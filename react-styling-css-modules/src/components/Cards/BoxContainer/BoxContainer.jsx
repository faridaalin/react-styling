import React from 'react';
import style from './boxContainer.module.css';

export default function BoxContainer({children}) {

    return (
        <section className={style.box}>
            {children}
        </section>
    )
}

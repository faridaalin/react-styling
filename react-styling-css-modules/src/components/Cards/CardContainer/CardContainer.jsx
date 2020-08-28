import React from 'react';
import style from './cardContainer.module.css';
import Card from "../Card/Card";


export default function CardContainer() {

    return (
        <section className={style.container}>
            <Card heading="HEADING ONE">Nam nulla ligula, rutrum non aliquam vel, rutrum id justo. Lorem ipso facto.</Card>
            <Card heading="HEADING TWO" variant="dark">Rutrum non aliquam vel, rutrum id justo.</Card>
        </section>
    )
}

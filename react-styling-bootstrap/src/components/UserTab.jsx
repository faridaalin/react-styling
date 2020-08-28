import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col'


export default function UserTab() {
    const winWidth = window.innerWidth;
    let isMobile = false;

    if (winWidth <= 768) {
        isMobile = true;
        console.log(isMobile)
    }


    return (

        <Col md={6} className={isMobile ? "hide" : ""}>

            <Tabs defaultActiveKey="Lorem" id="uncontrolled-tab-example">
                <Tab eventKey="Lorem" title="Lorem">
                    <p>Suspendisse massa diam, efficitur eu massa euismod, pretium
                lacinia magna.</p>
                </Tab>
                <Tab eventKey="Ipsum" title="Ipsum">
                    <p>Suspendisse massa diam, efficitur eu massa euismod, pretium
                lacinia magna.</p>
                </Tab>
                <Tab eventKey="Dolar" title="Dolar">
                    <p>Suspendisse massa diam, efficitur eu massa euismod, pretium
                lacinia magna.</p>
                </Tab>
                <Tab eventKey="Porta" title="Porta">
                    <p>Suspendisse massa diam, efficitur eu massa euismod, pretium
                lacinia magna.</p>
                </Tab>
            </Tabs>


        </Col>


    )
}

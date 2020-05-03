/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'


import { Jumbotron, Container , Row, Col, Card} from "react-bootstrap"

import profilePhoto from "../components/assets/images/profilePhoto.jpg"

function Home() {
    return (
        <>

           

        <Jumbotron >
            <Container>
            <Row>
                <Col lg={3}>
                    <Card>
                    <Card.Header><h3>Eric Zeng</h3></Card.Header>
                        <Card.Body>
                            <img src={profilePhoto}
                                alt="Card image" />
                            <h5 className="card-title">Lives at</h5>
                            <h6 className="card-subtitle text-muted"><a
                                    href="https://www.facebook.com/places/Things-to-do-in-Everett-Washington/105792912788161/">Everett,
                                    WA</a>
                                    </h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9}>
                    <Row>
                    <p>I graduate from <a href="https://www.wwu.edu/"> Western Washington University</a> with 2 years of
                        learning experience in Information System Management, E-commerce System Management, Business
                        Process
                        Designs and Project Management. As well as an Information Systems graduate with diverse
                        experience
                        across the analysis, HTML/CSS designs, troubleshooting and business model reworks using SDLC.
                        
                        <a href="https://cbe.wwu.edu/dsci/management-information-systems">Click to see more about
                            MIS</a>
                    </p>
                    </Row>
                </Col>
             </Row>
             </Container>
        </Jumbotron>

        
     </>
    );
}
export default Home;


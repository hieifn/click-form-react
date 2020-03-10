import React from "react";
import TabComponent from '../tab/TabContent';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
    return (
        <Container fluid id="register" style={{
            background: "linear-gradient(to right, #3931af, #00c6ff)",
            'margin-top': "3%",
            'padding': "3%"
        }}>
            <Row>
                <Col md="3" style={{
                    "text-align": "center",
                    "color": "#fff",
                    "margin-top": "4%"
                }}>
                    <FontAwesomeIcon icon={faPaperPlane}
                        size="6x"
                        style={{
                            "margin-top": "15%",
                            "margin-bottom": "5%",
                            "width": "25%",
                            "-webkit-animation": "mover 2s infinite  alternate",
                            "animation": "mover 1s infinite  alternate"
                        }} />
                    <h3>Bem Vindo</h3>
                    <p style={{
                        "font-weight": "lighter",
                        "padding": "12%",
                        "margin-top": "-9%"
                    }}>
                        Você está a 30 segundos de criar a sua própria BA!
                    </p>
                    <input type="submit" name="" value="Ajuda" style={{
                        "border": "none",
                        "border-radius": "1.5rem",
                        "padding": "2%",
                        "width": "60%",
                        "background": "#f8f9fa",
                        "font-weight": "bold",
                        "color": "#383d41",
                        "margin-top": "30%",
                        "margin-bottom": "3%",
                        "cursor": "pointer"
                    }} /><br />
                </Col>
                <Col md="9" style={{
                    "background": "#f8f9fa",
                    "border-top-left-radius": "10% 50%",
                    "border-bottom-left-radius": "10% 50%"
                }}>
                    <TabComponent></TabComponent>
                </Col>
            </Row>

        </Container>
    );
};

export default HomePage;
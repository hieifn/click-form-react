import React, {useState} from "react";
import TabComponent from '../tab/TabContent';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ModalComponent from '../modal/Modal';

const HomePage = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <ModalComponent 
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Ajuda"
                text="Algum texto, talvez."
                header="Criado de BA - Ajuda"
            ></ModalComponent>
            <Container fluid id="register" style={{
                background: "linear-gradient(to right, #3931af, #00c6ff)",
                'marginTop': "3%",
                'padding': "3%"
            }}>
                <Row>
                    <Col md="3" style={{
                        "textAlign": "center",
                        "color": "#fff",
                        "marginTop": "4%"
                    }}>
                        <FontAwesomeIcon icon={faPaperPlane}
                            size="6x"
                            style={{
                                "marginTop": "15%",
                                "marginBottom": "5%",
                                "width": "25%",
                                "animation": "mover 2s infinite  alternate"
                            }} />
                        <h3>Bem Vindo</h3>
                        <p style={{
                            "fontWeight": "lighter",
                            "padding": "12%",
                            "marginTop": "-9%"
                        }}>
                            Você está a 30 segundos de criar a sua própria BA!
                        </p>
                        <input 
                            onClick={() => setModalShow(true)}
                            type="submit" 
                            name="" 
                            value="Ajuda" 
                            style={{
                                "border": "none",
                                "borderRadius": "1.5rem",
                                "padding": "2%",
                                "width": "60%",
                                "background": "#f8f9fa",
                                "fontWeight": "bold",
                                "color": "#383d41",
                                "marginTop": "30%",
                                "marginBottom": "3%",
                                "cursor": "pointer"
                        }} /><br />
                    </Col>
                    <Col md="9" style={{
                        "background": "#f8f9fa",
                        "borderTopLeftRadius": "10% 50%",
                        "borderBottomLeftRadius": "10% 50%"
                    }}>
                        <TabComponent></TabComponent>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
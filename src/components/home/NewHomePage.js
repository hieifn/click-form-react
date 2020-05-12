import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/SideBar";
import ModalComponent from '../modal/Modal';

const NewHomePage = props => {
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
            <Container 
                fluid
            >
            <Row>
                <Col>
                    <Sidebar />
                </Col>
            </Row>
            </Container>
        </>
    );
};

export default NewHomePage;
import React, { useState, useEffect } from "react";
import { Tab, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import FormComponent from '../form/Form';
import * as XmlApi from '../../api/xmlApi';
// import "../home/NewHomePage.css";

const Sidebar = props => {

    const [hide, setHide] = useState(false);
    const [key, setKey] = useState('create');
    const [list, setList] = useState();

    useEffect(()=>{
        XmlApi.getXmls()
            .then((xmlResponse) => setList(xmlResponse.data.xmls))
            .catch((e) => console.log('deu ruim!>', e))
    },[])

    return (
        <>
            <Tab.Container id="myTabContent" activeKey={key} onSelect={k => setKey(k)}>
                <Row>
                    <Col 
                        id="sidebar-wrapper" 
                        xs="2" 
                        hidden={hide}
                        style={{
                            "paddingRight": "0",
                        }}
                    >
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Opções</Navbar.Brand>
                        </Navbar>
                        <hr></hr>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="create">Criar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="assign">Atribuir</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="singleInstall">Instalação Conjunta</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="change-status">Alterar Status</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="all">Criação Completa</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="aprove-final-test">Aprovar Teste Final</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col >
                        <Tab.Content>
                            <Tab.Pane eventKey="create">
                                <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                                    <Button variant="outline-info" onClick={() => setHide(!hide)}>Esconder</Button>
                                    <Navbar.Brand href="#home">Criar BA</Navbar.Brand>
                                </Navbar>
                                <FormComponent list={list} title="Criação de BA" btnTxt="Criar" type='create'/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="assign">
                                <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                                    <Button variant="outline-info" onClick={() => setHide(!hide)}>Esconder</Button>
                                    <Navbar.Brand href="#home">Atribuir BA</Navbar.Brand>
                                </Navbar>
                                <FormComponent list={list} title="Atribuição de BA" btnTxt="Atribuir" type='assign'/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="singleInstall">
                                <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                                    <Button variant="outline-info" onClick={() => setHide(!hide)}>Esconder</Button>
                                    <Navbar.Brand href="#home">Instalação Conjunta BA</Navbar.Brand>
                                </Navbar>
                                <FormComponent list={list} title="Instalação conjunta de BAs" btnTxt="Criar" type='singleInstall'/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="change-status">
                                <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                                    <Button variant="outline-info" onClick={() => setHide(!hide)}>Esconder</Button>
                                    <Navbar.Brand href="#home">Alterar Status BA</Navbar.Brand>
                                </Navbar>
                                <FormComponent list={list} title="Alteração de status da BA" btnTxt="Alterar Status" type='changeStatus'/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="all">
                                <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                                    <Button variant="outline-info" onClick={() => setHide(!hide)}>Esconder</Button>
                                    <Navbar.Brand href="#home">Criar, Atribuir e alterar status BA</Navbar.Brand>
                                </Navbar>
                                <FormComponent list={list} title="Criar, atribuir e alterar status da BA" btnTxt="Faz Tudo" type='all'/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="aprove-final-test">
                                <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                                    <Button variant="outline-info" onClick={() => setHide(!hide)}>Esconder</Button>
                                    <Navbar.Brand href="#home">Aprovar Teste Final</Navbar.Brand>
                                </Navbar>
                                <FormComponent list={list} title="Aprovar Teste Final" btnTxt="Aprova Teste FInal" type='approveFinalTestFtth'/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};
export default Sidebar
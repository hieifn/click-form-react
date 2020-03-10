import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { faUser, faPhone, faKey, faEdit, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormComponent = ({ title, btnTxt, type }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const mapInputs = {
        'create': [{
            name: 'assos-doc',
            label: 'Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'contact',
            label: 'Contato',
            icon: faPhone,
            placeholder: "Telefone",
            error: 'Fovor Inserir o Telefone'
        },{
            name: 'type',
            type: 'select',
            label: 'Tipo da BA',
            icon: faEdit,
            error: 'Fovor Inserir o Telefone'
        }],
        'assign':[{
            name: 'tr-id',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'ba-num',
            label: 'Número da BA',
            icon: faKey,
            placeholder: "Numero da BA",
            error: 'Fovor Inserir o Numero da BA'
        }],
        'single-install':[{
            name: 'assos-doc',
            label: 'Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'assos-doc-2',
            label: 'Segundo Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'tr-id',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'contact',
            label: 'Contato',
            icon: faPhone,
            placeholder: "Telefone",
            error: 'Fovor Inserir o Telefone'
        }],
        'change-status':[{
            name: 'ba-num',
            label: 'Número da BA',
            icon: faKey,
            placeholder: "Numero da BA",
            error: 'Fovor Inserir o Numero da BA'
        },{
            name: 'tr-id',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        }],
        'all':[{
            name: 'tr-id',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'contact',
            label: 'Contato',
            icon: faPhone,
            placeholder: "Telefone",
            error: 'Fovor Inserir o Telefone'
        },{
            name: 'assos-doc',
            label: 'Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'type',
            type: 'select',
            label: 'Tipo da BA',
            icon: faEdit,
            error: 'Fovor Inserir o Telefone'
        }]
    }

    const createFormGroup = ({ name, type, label, icon, placeholder, error }) => {
        return (
            <Form.Group as={Col} controlId={`${name}-formHorizontalCheck`}>
                <Form.Label>{label}</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                            <FontAwesomeIcon icon={icon} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    {type ?
                    <Form.Control as="select">
                        <option>xml 1</option>
                        <option>xml 2</option>
                        <option>xml 3</option>
                        <option>xml 4</option>
                        <option>xml 5</option>
                    </Form.Control>
                        : 
                    <Form.Control
                        type="text"
                        placeholder={placeholder}
                        aria-describedby="inputGroupPrepend"
                        required
                    />}
                    
                    <Form.Control.Feedback type="invalid">
                        {error}
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        );
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
            "padding": "10%",
            "margin-top": "10%"
        }}>
            <Row>
                <Col >
                    <h2 style={{
                        "text-align": "center",
                        "margin-top": "-8%",
                        "margin-bottom": "-15%",
                        "color": "#495057"
                    }}>{title}</h2>
                </Col>
            </Row>
            {mapInputs[type ? type : 'create'].map((element) => {
                return createFormGroup(element)
            })}
            
            <Row>
                <Col>
                    <Button type="submit" style={{
                        "float": "right",
                        "margin-top": "10%",
                        "border": "none",
                        "border-radius": "1.5rem",
                        "padding": "2%",
                        "background": "#0062cc",
                        "color": "#fff",
                        "font-weight": "600",
                        "width": "50%",
                        "cursor": "pointer"
                    }}>{btnTxt}</Button>
                </Col>
            </Row>
        </Form>
    );
};


export default FormComponent;
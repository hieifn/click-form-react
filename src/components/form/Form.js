import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { faUser, faPhone, faKey, faEdit, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ClickApi from '../../api/clickApi';
import ModalComponent from '../modal/Modal';

const FormComponent = ({ title, btnTxt, type, list }) => {
    const [validated, setValidated] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [response, setResponse] = useState('');
    const [check, setCheck] = useState(false);

    const convertBackToId = (paramElement, paramList) => {
        return paramList.filter((listElement) => listElement.name === paramElement.value)[0].id;
    };

    // reducing array to single request obj
    const buildRequest = (paramList) => {
        const newParamList = paramList.map((element) => element.label === 'type' ? 
            {
                "label":element.label,
                "value": convertBackToId(element, list)
            } 
                : 
            element);
            
        return newParamList.reduce((accValue, currValue) => ({...accValue,  ...{[currValue.label]: currValue.value}}), {})
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        
        const form = event.currentTarget;
        const listObjValues = mapInputs[type].map((element) => ({ label:element.name, value: document.getElementById(`${element.name}-${type}`).value}))
        console.log(listObjValues);

        if (form.checkValidity()) {    
            let request = buildRequest(listObjValues);
            const { baNumber } = request;
            console.log({baNumber});
            ClickApi.clickRequests(request, type)
                .then((resp) => {
                    setResponse(JSON.stringify(resp));
                    setModalShow(true)
                    console.table(resp)
                    if (check) {
                        ClickApi.clickRequestsFinalTest({baNumber: baNumber ? baNumber : resp.data.workOrderId}, 'setInFinalTest')
                        // new request for final Test
                    }
                })
                .catch((e) => {console.log(e)});
            console.log('sucess');
            
        } else {
            setValidated(true);
            console.log('form errado!');
            console.table(listObjValues)
        }
    };

    // can be putted on DB for maping and flexibility
    const mapInputs = {
        'create': [{
            name: 'associatedDocument',
            label: 'Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'customerContact',
            label: 'Contato',
            icon: faPhone,
            placeholder: "Telefone",
            error: 'Fovor Inserir o Telefone'
        },{
            name: 'type',
            typeField: 'select',
            label: 'Tipo da BA',
            icon: faEdit,
            error: 'Fovor Inserir o Telefone'
        }],
        'assign':[{
            name: 'technicianId',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'baNumber',
            label: 'Número da BA',
            icon: faKey,
            placeholder: "Numero da BA",
            error: 'Fovor Inserir o Numero da BA'
        }],
        'singleInstall':[{
            name: 'associatedDocumentVoz',
            label: 'Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'associatedDocumentVlx',
            label: 'Segundo Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'technicianId',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'customerContact',
            label: 'Contato',
            icon: faPhone,
            placeholder: "Telefone",
            error: 'Fovor Inserir o Telefone'
        }],
        'changeStatus':[{
            name: 'baNumber',
            label: 'Número da BA',
            icon: faKey,
            placeholder: "Numero da BA",
            error: 'Fovor Inserir o Numero da BA'
        },{
            name: 'technicianId',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'checkBoxTF',
            label: 'Incluir Teste Final ?',
            typeField: 'checkbox',
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        }],
        'all':[{
            name: 'technicianId',
            label: 'TR Técnico Responsável',
            icon: faUserLock,
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        },{
            name: 'customerContact',
            label: 'Contato',
            icon: faPhone,
            placeholder: "Telefone",
            error: 'Fovor Inserir o Telefone'
        },{
            name: 'associatedDocument',
            label: 'Documento Associado',
            icon: faUser,
            placeholder: "Documento",
            error: 'Fovor Inserir Documento'
        },{
            name: 'type',
            typeField: 'select',
            label: 'Tipo da BA',
            icon: faEdit,
            error: 'Fovor Inserir o Telefone'
        },{
            name: 'checkBoxTF',
            label: 'Incluir Teste Final ?',
            typeField: 'checkbox',
            placeholder: "TR do Técnico",
            error: 'Fovor Inserir TR do Técnico'
        }]
    }

    const createFormGroup = ({ name, typeField, label, icon, placeholder, error }) => {
        return (
            <Form.Group key={name} as={Col} controlId={`${name}-${type}`}>
                {
                    typeField === 'checkbox' ? 
                        undefined
                        :
                        <Form.Label>{label}</Form.Label>
                }
                
                <InputGroup>
                    {
                        icon ? 
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <FontAwesomeIcon icon={icon} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        :
                            undefined
                    }
                    {(typeField === 'select') && list ?
                        <Form.Control as="select">
                            {list.map((element) => (<option key={`${element.id}-${element.name}`}>{element.name}</option>))}
                        </Form.Control>
                        :
                        (typeField === 'checkbox') ? 
                            <Form.Check 
                                inline
                                onChange={() => {check ? setCheck(false) : setCheck(true)}}
                                checked={check} 
                                label={label} 
                                id={`${name}-${type}`} 
                            />
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
        <>
            <ModalComponent 
                show={modalShow}
                onHide={() => setModalShow(false)}
                header="Sucesso"
                title="Retorno do click"
                text={response}
            ></ModalComponent>
            <Form key="form" id="form" noValidate validated={validated} onSubmit={handleSubmit} style={{
                "padding": "10%",
                "marginTop": "10%"
            }}>
                <Row>
                    <Col >
                        <h2 style={{
                            "textAlign": "center",
                            "marginTop": "-8%",
                            "marginBottom": "-15%",
                            "color": "#495057"
                        }}>{title}</h2>
                    </Col>
                </Row>
                {mapInputs[type ? type : 'create'].map((element) => {
                    return createFormGroup(element)
                })}
                
                <Row>
                    <Col>
                        <Button type="submit" 
                            style={{
                                "float": "right",
                                "marginTop": "10%",
                                "border": "none",
                                "borderRadius": "1.5rem",
                                "padding": "2%",
                                "background": "#0062cc",
                                "color": "#fff",
                                "fontWeight": "600",
                                "width": "50%",
                                "cursor": "pointer"
                            }}>
                                {btnTxt}
                            </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};


export default FormComponent;
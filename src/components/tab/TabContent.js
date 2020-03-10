import React, {useState} from 'react';
import FormComponent from '../form/Form';
import {Tab, Tabs} from 'react-bootstrap';
// import PropTypes from 'prop-types';

const TabContent = props => {
    const [key, setKey] = useState('create');

    return (
        <Tabs id="myTabContent" activeKey={key} onSelect={k => setKey(k)} style={{
            "margin-top": "3%",
            "width": "70%",
            "float": "right"
        }}>
            <Tab eventKey="create" title="Create">
                <FormComponent title="Criação de BA" btnTxt="Criar" type='create'/>
            </Tab>
            <Tab eventKey="assign" title="Assign">
                <FormComponent title="Atribuição de BA" btnTxt="Atribuir" type='assign'/>
            </Tab>
            <Tab eventKey="single-install" title="Single Install">
                <FormComponent title="Instalação conjunta de BAs" btnTxt="Criar" type='single-install'/>
            </Tab>
            <Tab eventKey="change-status" title="Change Status">
                <FormComponent title="Alteração de status da BA" btnTxt="Alterar Status" type='change-status'/>
            </Tab>
            <Tab eventKey="all" title="All at Once">
                <FormComponent title="Criar, atribuir e alterar status da BA" btnTxt="Faz Tudo" type='all'/>
            </Tab>
        </Tabs>
    );
};

// TabContent.propTypes = {

// };

export default TabContent;
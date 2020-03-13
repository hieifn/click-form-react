import React, {useState, useEffect} from 'react';
import FormComponent from '../form/Form';
import {Tab, Tabs} from 'react-bootstrap';
import * as XmlApi from '../../api/xmlApi';
// import PropTypes from 'prop-types';

const TabContent = props => {
    const [key, setKey] = useState('create');
    const [list, setList] = useState()

    useEffect(()=>{
        XmlApi.getXmls()
            .then((xml)=> setList(xml))
            .catch((e) => console.log('deu ruim!>', e))
    },[])

    return (
        <Tabs id="myTabContent" activeKey={key} onSelect={k => setKey(k)} style={{
            "marginTop": "3%",
            "width": "70%",
            "float": "right"
        }}>
            <Tab eventKey="create" title="Create">
                <FormComponent list={list} title="Criação de BA" btnTxt="Criar" type='create'/>
            </Tab>
            <Tab eventKey="assign" title="Assign">
                <FormComponent list={list} title="Atribuição de BA" btnTxt="Atribuir" type='assign'/>
            </Tab>
            <Tab eventKey="single-install" title="Single Install">
                <FormComponent list={list} title="Instalação conjunta de BAs" btnTxt="Criar" type='singleInstall'/>
            </Tab>
            <Tab eventKey="change-status" title="Change Status">
                <FormComponent list={list} title="Alteração de status da BA" btnTxt="Alterar Status" type='changeStatus'/>
            </Tab>
            <Tab eventKey="all" title="All at Once">
                <FormComponent list={list} title="Criar, atribuir e alterar status da BA" btnTxt="Faz Tudo" type='all'/>
            </Tab>
        </Tabs>
    );
};

// TabContent.propTypes = {

// };

export default TabContent;
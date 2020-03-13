const xml_list = [
  { id: 'DTH_INST.txt', name: 'Instalação DTH' }, 
  { id: 'DTH_MIG.txt', name: 'Migração DTH' }, 
  { id: 'DTH_MUD.txt', name: 'Mudança DTH' }, 
  { id: 'DTH_REP.txt', name: 'Reparo DTH' }, 
  { id: 'DTH_RET.txt', name: 'Retirada DTH' }, 
  { id: 'DTH_SRV.txt', name: 'Serviço DTH' }, 
  { id: 'VLX_INST.txt', name: 'Instalação Velox' }, 
  { id: 'VLX_MUD.txt', name: 'Mudança Velox' }, 
  { id: 'VOZ_INST.txt', name: 'Instalação Voz' }];

const create = [{
  id:1,
  "code": 200,
  "data": {
    "success": true,
    "workOrderId": 144098100403722
  }}];

const assign = [{
  id:1,
  "code": 200,
  "data": {
    "success": true,
    "workOrderId": "144098100403722",
    "technicianId": "TR637384"
  }
}];

const singleInstall = [{
  id:1,
  success: true,
  workOrderIdVoz: "",
  workOrderIdVlx: "",
  technicianId: ""
}];

const changeStatus = [{
  id:1,
  "code": 200,
  "data": {
    "success": true,
    "workOrderId": "144098100403722",
    "technicianId": "TR637384"
  }
}];

const all = [{
  id:1,
  success: true,
  workOrderId: 'workOrderId',
  technicianId: 'technicianId'
}];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  xml_list,
  create,
  assign,
  singleInstall,
  changeStatus,
  all
};

/*
This uses json-server, but with the module approach: https://github.com/typicode/json-server#module
Downside: You can't pass the json-server command line options.
Instead, can override some defaults by passing a config object to jsonServer.defaults();
You have to check the source code to set some items.
Examples:
Validation/Customization: https://github.com/typicode/json-server/issues/266
Delay: https://github.com/typicode/json-server/issues/534
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/

/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "node_modules/json-server/public"
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function(req, res, next) {
  setTimeout(next, 0);
});

// Declaring custom routes below. Add custom routes before JSON Server router

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

const data = {
  xmls:[{ id: 'DTH_INST.txt', name: 'Instalação DTH' }, 
    { id: 'DTH_MIG.txt', name: 'Migração DTH' }, 
    { id: 'DTH_MUD.txt', name: 'Mudança DTH' }, 
    { id: 'DTH_REP.txt', name: 'Reparo DTH' }, 
    { id: 'DTH_RET.txt', name: 'Retirada DTH' }, 
    { id: 'DTH_SRV.txt', name: 'Serviço DTH' }, 
    { id: 'VLX_INST.txt', name: 'Instalação Velox' }, 
    { id: 'VLX_MUD.txt', name: 'Mudança Velox' }, 
    { id: 'VOZ_INST.txt', name: 'Instalação Voz' }
  ]};

server.post("/getBaXmls/", function(req, res, next) {
  req.body.data = data;
  next();
});

// Use default router
server.use(router);

// Start server
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Centralized logic

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}


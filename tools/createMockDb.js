/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { getBaXmls, create, all, assign, changeStatus,singleInstall } = mockData;
const data = JSON.stringify({ getBaXmls, create, all, assign, changeStatus, singleInstall });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});

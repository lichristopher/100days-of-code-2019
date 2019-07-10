const fs = require("fs");

const dataJSON = fs.readFileSync("1-json.json", "utf-8");
const data = JSON.parse(dataJSON);
data.name = "Andrew";
data.age = 20;

const newDataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", newDataJSON);

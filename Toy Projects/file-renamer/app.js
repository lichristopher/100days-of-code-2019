const fs = require("fs");
const yargs = require("yargs");

fs.writeFileSync("names.txt", "");
// const filesDirectory = `E:\\fake-directory\\`;
const filesDirectory = yargs.argv._[0] + "\\";

let fileNames = fs.readFileSync("file-names.txt", "utf-8").split("\n");
fileNames = fileNames.map(fileName => fileName.replace(/\r/, ""));

for (let i = 0; i < fileNames.length; i++) {
  fs.appendFileSync(
    "names.txt",
    `REN "${filesDirectory}lesson${i + 1}.webm" "${filesDirectory}${
      fileNames[i]
    }.webm"\n`
  );
}

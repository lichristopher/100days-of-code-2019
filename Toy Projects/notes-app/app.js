const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },

    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    const noteTitle = argv.title;
    const noteBody = argv.body;
    notes.addNotes(noteTitle, noteBody);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note");
  }
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: function() {
    console.log("Listing all notes");
  }
});

yargs.command({
  command: "read",
  describe: "Read notes",
  handler: function() {
    console.log("Read all notes");
  }
});

yargs.parse();
// console.log(yargs.argv);
// const chalk = {};

// chalk.green = function(string) {
//   return `\u001b[32m${string}\u001b[39m`;
// };

// console.log(chalk.green("hello world"));
// console.log("hello world");

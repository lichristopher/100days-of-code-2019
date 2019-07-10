const fs = require("fs");
function getNotes() {
  return "Your notes...";
}

function addNotes(title, body) {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
}

function saveNotes(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}
module.exports = { getNotes, addNotes, loadNotes };

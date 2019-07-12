const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send([
    {
      temperature: 200,
      location: "Boston"
    },
    {
      temperature: 100,
      location: "Los Angeles"
    }
  ]);
});

app.get("*", function(req, res) {
  res.send("what???", 404);
});
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

const scrapeIt = require("scrape-it");

scrapeIt("https://coursehunters.net/course/polnoe-vvedenie-v-react-v5", {
  "lesson-names": ".lessons-name "
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

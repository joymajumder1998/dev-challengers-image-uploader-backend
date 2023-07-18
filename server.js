const express = require("express");
const api = require("./api");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 8080;

api(app);

app.listen(PORT, () => {
  console.log("Server is running at : ", PORT);
});

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const listRouter = require("./routes/list");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/list", listRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listenging on port', PORT);
});
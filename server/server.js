const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// creates express server?

const app = express();

//      middleware

// bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors

app.use(cors());

// imports our routers

const listRouter = require("./routes/list");

// tells express to use our routers

app.use("/api/list", listRouter);

// listens on port 5000

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listenging on port", PORT);
});

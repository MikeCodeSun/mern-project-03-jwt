const express = require("express");
const errorHandler = require("./midWare/errorHandler");
const notFound = require("./midWare/not-found");
const router = require("./routes/route");
require("dotenv").config();
require("express-async-errors");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => res.send("home page"));
app.use("/api/v1", router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log(`server is running on port : ${port}`));

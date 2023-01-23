import express, { json } from "express";
import router from "./routers/index.js";
var app = express();
app.use(json());
app.use(router);
var port = 5000;
app.listen(port, function () { return console.log("Server running in port ".concat(port)); });

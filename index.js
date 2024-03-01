const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const { todoRouter } = require('./routes/todo.js');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/', todoRouter);
const port = process.env.PORT;
console.log(process.env);


app.listen(port);
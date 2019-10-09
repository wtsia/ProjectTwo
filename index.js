const express = require('express');
const parser = require('body-parser');
const methodOverride = require('method-override');
const hbs = require('hbs');
const cors = require("cors");
const path = require('path')

const controller = require('./controllers/controller');

const app = express();

app.use(methodOverride('_method'));

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use(cors());

app.set("view engine", "hbs");

app.use("/", controller);

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3301, () => {
    console.log("Running on port 3301!")
});


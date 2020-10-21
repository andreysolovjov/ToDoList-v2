const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname+"/generateDate.js");
const mainPage = require('./routes/main');
const getError = require('./routes/404');
const aboutPage = require('./routes/about');
const WorkPage = require('./routes/work')

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(aboutPage);
app.use(mainPage);
app.use(WorkPage);
app.use(getError);


app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})
// require---starts
const express = require("express")
const app = express()
const port =process.env.PORT ||  8000;
const path = require("path");
const hbs = require("hbs");
// require---ends

//static-path
const static_path = path.join(__dirname, "../public");
console.log(static_path);
const template_path = path.join(__dirname, "../src/templates/views")
const partial_path= path.join(__dirname, "../src/templates/partials")
// const images_path = path.join(__dirname, "/src/templates/images")

app.use(express.static(static_path))
// app.use(express.static())
app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partial_path)
// routing---start
app.get("", (req, res) =>{
    res.render("index")

})
app.get("/about", (req, res) =>{
    res.render("about")

})
app.get("/weather", (req, res) =>{
    res.render("weather")

})
app.get("*", (req, res) =>{
    res.render("error")

})
app.listen(port, () =>{
    console.log("starting...");
})
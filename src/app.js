const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port= process.env.PORT || 8000;


// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));



// Routing
app.get("/", (req,res)=>{
    // res.send("Welcome to this new website");
    res.render('index')
})

app.get("/about", (req,res)=>{
    // res.send("Welcome to this new website about page");
    res.render('about')
})

app.get("/weather", (req,res)=>{
    // res.send("Welcome to this new website  weather page");
    // res.render("Welcome to this new website  weather page");
    res.render('weather')
})

app.get("*", (req,res)=>{
    // res.send("404 ERROR Page ");
    // res.render("404 ERROR Page ");
    res.render('404error', {
        errorMsg: "Oops! Page Not Found"
    })
})



app.listen(port, ()=>{
    console.log(`Listening to the port no ${port}... `);
})
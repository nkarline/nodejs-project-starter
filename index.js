
// require express modules 
const express = require("express");
const app = express();                      // create express app
const hbs = require("hbs");                 // hbs
const fs =  require('fs');

// use middlewares 
// __dirname = current project dir 
app.set('view engine', 'hbs');                       // set templating engine HBS
hbs.registerPartials(__dirname + '/views/partials'); // HBS - to use page components register partials
hbs.registerHelper('getCurrentYear', ()=>{           // functions to pass in other partial components
    return new Date().getFullYear();
});
hbs.registerHelper('capitalize', (text)=>{
    return text.toUpperCase();
});
app.use((req, res, next) => {
    // can create a logger
    const log = `${new Date().toString()} ${req.method} ${req.url}`;
    fs.appendFile('server.log', log+'\n', (err)=>{
        if(err){
            console.log('Unable to append to server log');
        }
    })

    next(); // <---- necessary to continue below code

});

// maintenance page
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
});
// Need to put static files below maintenance page otherwise static files will be accessible 
app.use(express.static(__dirname + '/public'));      // express.static enable us to request any file directly in public folder .

// create routes
app.get("/", (req,res)=> {
    res.send('<h1> Home page request</h1>'); // header content-type = text/html
});
app.get("/bad", (req,res)=> {
    const obj = {status: 'bad request'}
    res.send('<h1> Bad request</h1>'+ JSON.stringify(obj));  
    // express automatically change the content-type of suitable format - text/json or others
});
app.get("/about", (req,res)=> {
    res.render('about.hbs', { // views dir will be automatically detected
        // params to pass 
        pageTitle: "About",
        currentYear: new Date().getFullYear()
    }); 
});

var option = () =>{
    console.log("server is up on port 3000");
}
// listen request on specific port
app.listen(3000, option); 

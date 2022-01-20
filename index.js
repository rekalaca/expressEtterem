const express = require('express');
const path = require('path');
const app = express();
const adatok = require('./myModules/adatok.js');
const port = 5555;

app.set('view engine', 'ejs');
app.use(express.static('css'));
app.use(express.static('images'));

app.get('/', (req,res) => {
    adatok.jsonRender(req, res);
    //res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get('/json', (req, res) =>{
    adatok.jsonRender(req, res);
})

app.get('/mysql', (req, res)=>{
    adatok.dbRender(req, res);
})

app.listen(port);
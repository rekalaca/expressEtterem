const mysql = require('mysql');
const fs = require('fs');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'termekek', 
    port: 3306
})

module.exports.dbRender = function(req, res){
    myQuery = "SELECT id, nev, ar FROM termekek";
    connection.query(myQuery, (err, result, fields) =>{
        if(err) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        res.render("mysql", {termekek : sorok});
    })

}

const jsonDatas = "./datas/termekek.json";
module.exports.jsonRender = function(req, res){
    fs.readFile(jsonDatas, (err, data) =>{
        if(err) throw err;
        const etelek = JSON.parse(data);
        res.render("json", {termekek : etelek})
    })

}
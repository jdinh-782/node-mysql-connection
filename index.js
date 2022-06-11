const express = require('express')
const mysql = require("mysql2")  

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    // database: "cs122a_gym"
});

// connect to mysql
db.connect((err) => {
    if (!err)
        console.log('Database is connected!');
    else
        console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
});

const app = express()

// create database
app.get('/createdb', (req, res) => {
    let sql = "CREATE DATABASE nodemysql"
    db.query(sql, err => {
        if (err) {throw err}
        res.send('Database Created');
    });
});

app.get('/', (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl);
});

var server = app.listen(80, function() {
    var host = server.address().address;
    var port = server.address().port;

    // console.log(host);
    // console.log(port);

    // console.log("App listening at http://localhost/");
    console.log("App listening at http:localhost//%s:%s", host, port);

})
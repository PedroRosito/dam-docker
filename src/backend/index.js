//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

const cors = require('cors');

var express = require('express');
var app     = express();
var pool   = require('./mysql-connector');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable cors
app.use(cors(corsOptions));

//=======[ Main module code ]==================================================

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Hola DAM'}).status(200);
});

app.get('/devices/', function(req, res, next) {
    pool.query('Select * from Devices', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================

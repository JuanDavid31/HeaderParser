var os = require("os");
var express = require('express');
var app = express();
const publicIp = require('public-ip');
 
app.get("/", function(req, res){
    publicIp.v4().then(ip => {
        res.send({
            ipaddres: ip, 
            language: req.headers["accept-language"].split(",")[0],
            software: os.release() + ", "+  os.platform() + " "+ os.arch()
        });
    });
});

app.listen(3001, function(){
    console.log("servidor iniciado");
});
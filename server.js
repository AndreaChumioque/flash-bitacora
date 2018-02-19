var express = require('express');
var app = express();
var server = app.listen(3000,listening);

function listening() {
    console.log('Servidor listo');
}

app.use(express.static('public'));
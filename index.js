//
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
require('./config/configdb');
// let jwt = require('jsonwebtoken');
// global.config = require('./config/configjwt');
// let verifyToken = require('./middleware/verifyToken');
// let User = require('./login/loginModel');

let app = express();

app.use(function(res, req, next){
    res.header("Access-Control-Allow-Access", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acces-Control-Allow-Menthods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8889));

// let loginRoute = require("./login/loginRoute.js");
// app.use('/api', loginRoute);

let barangRoute = require("./barang/barangRoute.js");
app.use('/api', barangRoute);

let kategoriBarangRoute = require("./kategoribarang/kategoribarangRoute.js");
app.use('/api', kategoriBarangRoute);

let pembelianRoute = require('./pembelian/pembelianRoute.js');
app.use('/api', pembelianRoute);

let pembelianDetailRoute =require('./pembeliandetail/pembeliandetailRoute.js');
app.use('/api', pembelianDetailRoute);

let petugasRoute = require('./petugas/petugasRoute');
app.use('/api',petugasRoute);

let pelangganRoute = require('./pelanggan/pelangganRoute');
app.use('/api',pelangganRoute);

let penjualanRoute = require('./penjualan/penjualanRoute');
app.use('/api',penjualanRoute);

let penjualandetailRoute = require('./penjualandetail/penjualandetailRoute');
app.use('/api',penjualandetailRoute);

app.listen(app.get('port'), function(){
    console.log("Node app is running on port "+ app.get('port'));
})

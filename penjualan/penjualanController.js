Penjualan = require('./penjualanModel.js');

module.exports.getPenjualan = function(callback,limit){
    Penjualan.find(callback).limit(limit);
}

module.exports.getPenjualanById = function(_id,callback){
    Penjualan.findById(_id,callback);
}

module.exports.createPenjualan = function(prpns,callback){
    Penjualan.create(prpns,callback);
}

module.exports.removePenjualan = function(_id,callback){
    Penjualan.findByIdAndRemove(_id,callback);
}

module.exports.updatePenjualanById = function(_id,prpns,callback){
    Penjualan.findByIdAndUpdate(_id,prpns,callback);
}
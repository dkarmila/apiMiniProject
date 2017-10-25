Pembelian = require('./pembelianModel.js');

module.exports.getPembelian=function(callback,limit){
    Pembelian.find(callback).limit(limit);
}

module.exports.getPembelianById=function(id, callback){
    Pembelian.findById(id, callback);
}

module.exports.updatePembelian=function(id, dataPembelian, callback){
    Pembelian.findByIdAndUpdate(id, dataPembelian, callback);
}

module.exports.createPembelian=function(dataPembelian, callback){
    Pembelian.create(dataPembelian, callback);
}

module.exports.rmvPembelian=function(id, callback){
    Pembelian.findByIdAndRemove(id, callback);
}
let barang = require('./barangModel.js');

module.exports.getBarang = function(callback,limit){
    barang.find(callback).limit(limit);
}

module.exports.getBarangById = function(id, callback, limit){
    barang.findById(id, callback).limit(limit);
}

module.exports.updateBarang = function(id, dataBarang, callback){
    barang.findByIdAndUpdate(id, dataBarang, callback);
}

module.exports.createBarang = function(dataBarang, callback){
    barang.create(dataBarang, callback);
}

module.exports.rmvBarang = function(id, callback){
    barang.findByIdAndRemove(id, callback)
}
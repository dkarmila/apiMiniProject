Petugas = require('./petugasModel.js');

module.exports.getPetugas = function(callback,limit){
    Petugas.find(callback).limit(limit);
}

module.exports.getPetugasById = function(_id,callback){
    Petugas.findById(_id,callback);
}

module.exports.createPetugas = function(prpns,callback){
    Petugas.create(prpns,callback);
}

module.exports.removePetugas = function(_id,callback){
    Petugas.findByIdAndRemove(_id,callback);
}

module.exports.updatePetugasById = function(_id,prpns,callback){
    Petugas.findByIdAndUpdate(_id,prpns,callback);
}
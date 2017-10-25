let express = require('express');
let route = express.Router();
let petugasController = require('./petugasController.js');
route.get('/petugas',function(req,res){
    petugasController.getPetugas(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/petugas/:_id',function(req,res){
	let id = req.params._id;
    petugasController.getPetugasById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/petugas',function(req,res){
    let prpns = req.body;
    petugasController.createPetugas(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/petugas/:_id',function(req,res){
    petugasController.removePetugas(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/petugas/:_id',function(req,res){
    let prpns = req.body;
    petugasController.updatePetugasById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
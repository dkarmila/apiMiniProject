let express = require('express');
let router = express.Router();
let barangController = require ('./barangController.js');

router.get('/barang', function(req,res){
    barangController.getBarang(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//read by id
router.get('/barang/:id', function(req,res){
    barangController.getBarangById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//update
router.put('/barang/:id', function(req,res){
    let dataBarang = req.body;
    barangController.updateBarang(req.params.id, dataBarang, function(err,respon){
        if(err){
            throw err;
        };
        rea.json(respon);
    });
});

//create
router.post('/barang', function(req,res){
    let dataBarang = req.body;
    barangController.createBarang(dataBarang, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//delete
router.delete('/barang/:id', function(req,res){
    barangController.rmvBarang(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;
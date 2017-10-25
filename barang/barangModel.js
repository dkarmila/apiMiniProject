let mongoose = require('mongoose');

let barang = mongoose.Schema(
    {
		KdBarang: {
            type: String,
            require: true,
            unique: true
        },
		KdKategoriBarang: String,
		KdMerkBarang: String,
		TypeBarang: String,
		StokAwal: Number,
		StokAkhir: Number,
		HargaBarang: Number
    },{
        collection: 'Barang'
    }
)

let Barang = module.exports = mongoose.model('Barang', barang);
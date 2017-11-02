let mong = require('mongoose');
let penjualan = mong.Schema({
    KdPenjualan:String,
    KdPelanggan:String,
	TglPenjualan: Date,
	JmlItem:Number,
	TotalHargaJual:Number,
	BuktiPembayaran:String
});
let Penjualan = module.exports =  mong.model("Penjualan",penjualan,"Penjualan");
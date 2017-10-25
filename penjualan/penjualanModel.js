let mong = require('mongoose');
let penjualan = mong.Schema({
    KdPenjualan:String,
    KdPelanggan:String,
    KdPenjualan:String,
	TglPenjualan: Date,
	JmlItem:Number,
	TotalHargaJual:Number,
	StatusPembayaran:Boolean,
	BuktiPembayaran:String
});
let Penjualan = module.exports =  mong.model("Penjualan",penjualan,"Penjualan");
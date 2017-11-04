let mong = require('mongoose');
let penjualandetail = mong.Schema({
    KdPenjualan:String,
	KdBarang:String,
	JmlBarang: Number,
	SubTotal:Number,
	NamaBang:String,
	HargaBarang:Number
});
let PenjualanDetail = module.exports =  mong.model("PenjualanDetail",penjualandetail,"PenjualanDetail");
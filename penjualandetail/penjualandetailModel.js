let mong = require('mongoose');
let penjualandetail = mong.Schema({
    KdPenjualan:String,
	KdBarang:String,
	JmlBarang: Number,
	SubTotal:Number
});
let PenjualanDetail = module.exports =  mong.model("PenjualanDetail",penjualandetail,"PenjualanDetail");
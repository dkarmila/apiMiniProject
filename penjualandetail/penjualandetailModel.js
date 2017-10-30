let mong = require('mongoose');
let penjualandetail = mong.Schema({
    KdPenjualanDetail:String,
    KdPenjualan:String,
	KdBarang:String,
	JmlBarang: Number,
	SubTotal:Number
});
let PenjualanDetail = module.exports =  mong.model("PenjualanDetail",penjualandetail,"PenjualanDetail");
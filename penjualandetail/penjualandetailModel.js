let mong = require('mongoose');
let penjualandetail = mong.Schema({
    KdPenjualanDetailDetail:String,
    KdPenjualanDetail:String,
	KdBarangJual:String,
	JmlBarangJual: Number,
	SubTotalJual:Number
});
let PenjualanDetail = module.exports =  mong.model("PenjualanDetail",penjualandetail,"PenjualanDetail");
let mong = require('mongoose');
let petugas = mong.Schema({
    KdPetugas:String,
    NamaPetugas:String,
    AlamatPetugas:String,
	NoRmh:Number,
	NoTelp: Number,
	UsernamePetugas:String,
	PasswordPetugas:String
});
let Petugas = module.exports =  mong.model("Petugas",petugas,"Petugas");
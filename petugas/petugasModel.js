let mong = require('mongoose');
let petugas = mong.Schema({
    KdPetugas:String,
    NamaPetugas:String,
    AlamatPetugas:String,
	NoRmh:String,
	NoTelp: String,
	UsernamePetugas:String,
	PasswordPetugas:String,
	JenisKelamin:String
});
let Petugas = module.exports =  mong.model("Petugas",petugas,"Petugas");

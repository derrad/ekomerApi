var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfZanimanja = new Schema({
   IDZanimanjaID:{type:Schema.Types.Mixed},
   Sifra  :{ type: String },
   Naziv : { type: String, required: [true, 'Naziv je obavezan'] },
   StepenSS  :  {
                 type : String,
                 default : 'Nekvalifikovan',
                 enum : ['Nekvalifikovan', 'Polukvalifikovan', 'Kvalifikovan','Srednja Strucna Sprema','VKV','Visa skola','Fakultet','Magistar','Doktor Nauka']
                },
   NivoUnosa   : {
                 type : String,
                 required: [true, 'Nivo unosa je obavezan'],
                 default : 'Unos',
                 enum : ['Unos', 'Pregled']
                },
   Opis  :{ type: String },
   DatCreate :{ type: Date, default: Date.now },
   DatUpdate :{ type: Date},
 },
 {
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}
 );

module.exports = mongoose.model('sfZanimanja', sfZanimanja);
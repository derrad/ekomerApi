var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;


var Posao = new Schema({
   Naziv : { type: String, required: [true, 'Naziv je obavezan'] },
   StepenSS  :  {
                 type : String,
                 default : 'Nekvalifikovan',
                 enum : ['Nekvalifikovan', 'Polukvalifikovan', 'Kvalifikovan','Srednja Strucna Sprema','VKV','Visa skola','Fakultet','Magistar','Doktor Nauka']
                },
   Skola  :{ type: String },
   Sifra   :{ type: String },
   Sifra1   :{ type: String },
   Opis  :{ type: String },
   DatCreate :{ type: Date, default: Date.now },
   DatUpdate :{ type: Date},
 },
 {
 timestamps: { createdAt: 'created_at' }
 }
 );

module.exports = mongoose.model('Posao', Posao);

// module.exports = mongoose.model('Posao', {
//    Naziv : { type: String, default: 'default' },
//    StepenSS  :  {
//                  type : String,
//                  default : 'Nekvalifikovan',
//                  enum : ['Nekvalifikovan', 'Polukvalifikovan', 'Kvalifikovan','Srednja Strucna Sprema','VKV','Visa skola','Fakultet','Magistar','Doktor Nauka']
//                 },
//    Skola  :{ type: String },
//    Sifra   :{ type: String },
//    Sifra1   :{ type: String },
//    Opis  :{ type: String },
//    DatCreate :{ type: Date, default: Date.now },
//    DatUpdate :{ type: Date}
// });


// <option value="1">Nekvalifikovan</option>  PosaoID: ID,
// <option value="2">Polukvalifikovan</option>
// <option value="3">Kvalifikovan</option>
// <option value="4">Srednja Strucna Sprema</option>
// <option value="5">VKV</option>
// <option value="6">Visa skola</option>
// <option value="7">Fakultet</option>
// <option value="8">Magistar</option>
// <option value="9">Doktor Nauka</option>

// var mongoose = require('./index')
// , TempSchema = new mongoose.Schema({
// salutation: {type: String, enum: ['Mr.', 'Mrs.', 'Ms.']}
// });

// var Temp = mongoose.model('Temp', TempSchema);

// console.log(Temp.schema.path('salutation').enumValues);
// var temp = new Temp();
// console.log(temp.schema.path('salutation').enumValues);

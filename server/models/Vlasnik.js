var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    VlasnikID  = Schema.ObjectId;

// module.exports = mongoose.model('Vlasnik', {
//    Ime : { type: String, default: 'default' },

//    name: { type: String, default: 'hahaha' },
//    name: String,
//    sku: String
// });

var Vlasnik = new Schema({
   Ime : { type: String, default: 'default' },
   Adresa :{ type: String },
   Mesto :{ type: String },
   PttReon  :{ type: String },
   PttPak  :{ type: String },
   Direktor :{ type: String },
   KomRukovac :{ type: String },
   Blagajnik :{ type: String },
   Pib :{ type: String },
   MatBroj :{ type: String },
   SifDelat :{ type: String },
   PdvBroj:{ type: String },
   Sud :{ type: String },
   UplRacPorJed:{ type: String },
   NazPorJed:{ type: String },
   DatCreate :{ type: Date, default: Date.now },
   DatUpdate :{ type: Date}
 
});

module.exports = mongoose.model('Vlasnik', Vlasnik);

//  name: { type: String, default: 'hahaha' },
//   age: { type: Number, min: 18, index: true },
//   bio: { type: String, match: /[a-z]/ },
//   date: { type: Date, default: Date.now },
//   buff: Buffer
var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;


var apZiroVlasnik = new Schema({
     Naziv   : { type: String, required: [true,'Naziv je obavezan !!!'] },
     Racun   : { type: String, required: [true,'Racun je obavezan !!!'] },
     Glavni  : {type:boolean, default:false},
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}

);


var apTelefVlasnik = new Schema({
     Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
     Telefon: { type: String, required: [true, 'Telefon je obavezan !!!'] },
     Glavni  : {type:boolean, default:false},
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}
);




var apVlasnik = new Schema({ 
    ZiroVlasnik: [apZiroVlasnik] ,
    TelefVlasnik: [apTelefVlasnik] ,
    Ime: { type: String, required: [true, 'Ime vlasnika je obavezno !!!'] },
    Adresa:{ type: String},
    Mesto:{ type: String},
    PttReon:{ type: String},
    PttPak:{ type: String},
    Direktor:{ type: String},
    KomRukovac:{ type: String},
    Blagajnik:{ type: String},
    Pib:{ type: String},
    MatBroj:{ type: String},
    SifDelat:{ type: String},
    PdvBroj:{ type: String},
    Slika:{type:Schema.Types.Mixed},
    Sud:{ type: String},
    UplRacPorJed:{ type: String},
    NazPorJed:{ type: String},
},
{
 timestamps: { createdAt: 'created_at' }
},
{ minimize: false }
);



module.exports = mongoose.model('apVlasnik', apVlasnik);


var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;


var sfPartnerRacun = new Schema({
     Naziv   : { type: String, required: [true,'Naziv je obavezan !!!'] },
     Racun   : { type: String, required: [true,'Racun je obavezan !!!'] },
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}

);

var sfPartnerTelefon = new Schema({
     Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
     Telefon: { type: String, required: [true, 'Telefon je obavezan !!!'] },
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}
);

var sfPartnerKontakt = new Schema({
     Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   //nastavi
   
   
     Opis    : { type: String },
     NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},{ 
    retainKeyOrder: true 
}
);

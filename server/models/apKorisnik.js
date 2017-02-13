var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;



var apKorisnik = new Schema({
   KorisnikIme : { type: String, required: [true, 'Korisnicko ime je obavezno !!!'] },
   Lozinka : {type: String, required: [true, 'Lozinka je obavezna !!!'] },
   Uloga : {type : String, default : 'radnik',required: [true, 'Uloga korisnika je obavezna !!!'],enum:["admin","vlasnik","radnik"]},
   Prezime :{type:String},
   Ime :{type:String},
   Opis  :{ type: String },
   NameUser: {type:String}

},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}
);

module.exports = mongoose.model('apKorisnik', apKorisnik);

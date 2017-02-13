var mongoose = require('mongoose');

var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfDrzave = new Schema({
   KodDrzave:{type:String,required: [true, 'Kod je obavezan !!!']},
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   EuClan: {type:boolean, default:true},
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

module.exports = mongoose.model('sfDrzave', sfDrzave);

//drzave model kod zadruga
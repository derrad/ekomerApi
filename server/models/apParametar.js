var mongoose = require('mongoose');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;


var apParametar = new Schema({
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   Koristi: {type:boolean, default:true},
   VredString: {type: String },
   VredNumeric:{type:Number,default:0},
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

module.exports = mongoose.model('apParametar', apParametar);
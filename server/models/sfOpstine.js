var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var Drzave = require('./server/models/sfDrzave');; 

var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfOpstine = new Schema({
   Drzava: { type:Schema.ObjectId, ref:"sfDrzave", childPath:"child" },
   RegOzn:{type:String,required: [true, 'Oznaka je obavezna !!!']},
   Naziv : { type: String, required: [true, 'Naziv je obavezan !!!'] },
   SifPorez : { type: String},
   KontBr : { type: String},
   PozivNaBr:{ type: String},
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

sfOpstine.plugin(relationship, { relationshipPathName:'Drzava' });
var child = new sfOpstine({Drzava:sfDrzave._id});

module.exports = mongoose.model('sfOpstine', sfOpstine);

const mongoose = require('mongoose');



const contactSchema = new mongoose.Schema({
    fName:{type:String,required:true},
    lName:{type:String,required:true},
    email:{type:String,required:true},
    city:{type:String,required:true},
    password:{type:String,required:true},
    zip:{type:Number,required:true},
    concern:{type:String,required:true},  
},{timestamps:true});

mongoose.models={};

const contactschema = mongoose.model.user || mongoose.model('contact',contactSchema)

  export default contactschema ;
  
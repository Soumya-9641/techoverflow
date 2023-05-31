const mongoose = require('mongoose');



const createbloSchema = new mongoose.Schema({
  author:{type:String,required:true},
  tech:{type:String,required:true},
  title:{type:String,required:true},
  content:{type:String,required:true},
},{timestamps:true});

mongoose.models={};

const createblogschema = mongoose.model.user || mongoose.model('createblog',createbloSchema)

  export default createblogschema ;

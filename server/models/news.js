const mongoose=require('mongoose')
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;

const newsSchema=mongoose.Schema({
    
    author:{
        type:String
    },
    subject:{
     type:Array,
     default:[],
     required:true
    },
    

},{timestamps:true})


const News=mongoose.model('News',newsSchema)


module.exports={News}
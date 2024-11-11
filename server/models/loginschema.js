//create db schema for login details
const mongoose=require("mongoose")
const loginschema=new mongoose.Schema({
    id:{
        type:String,
        default:null
    },
    email:{
        type:String,
        require:[true,"must provide a name"],
        trim:true
    },
    password:{
        type:String,
        require:[true,"must provide a password"],
        trim:true
    },
    verified:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('loginschema',loginschema)
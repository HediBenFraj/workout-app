const mongoose = require('mongoose')  // improrting mongoose

const Schema = mongoose.Schema   // creating schema variable which is the ssame as the schema variable in mongoose

const exerciceSchema = new Schema({         // creating exerciceSchema which is an instance of Schema
    username : {type: String, required : true},
    description: {type:String, required: true},
    duration : {type: Number, required: true},
    date: {type:Date, required:true}
},{
    timestamps: true
})

const Exercice = mongoose.model('Exercice',exerciceSchema)

module.exports = Exercice
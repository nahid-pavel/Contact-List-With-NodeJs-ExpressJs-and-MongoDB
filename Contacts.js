const mongoose = require('mongoose');

let { Schema, model} = mongoose;

let contactSchema = Schema({
   name:String,
   email:String,
   phone:String
})

let Contact = model('Contact',contactSchema);

module.exports = Contact;
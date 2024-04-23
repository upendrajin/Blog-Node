const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uname : {
    type : String,
    require : true
  },
  email : {
    type : String,
    require : true,
    unique : true    
  },
  password : {
    type : String,
    require : true
  }
});

let USER = mongoose.model('user', userSchema)

module.exports = USER
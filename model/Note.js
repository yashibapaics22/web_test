const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
        trim: true,
    },
   
    imageUrl:{
        type:String,
    
    }
},{timestamps:true});

const note = mongoose.model('RealEstate', noteSchema);
module.exports = note;

const mongoose = require('mongoose');
var GenderSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    }
},
{ 
    timestamps: true 
});
    
module.exports = mongoose.model('Gender', GenderSchema, 'gender');
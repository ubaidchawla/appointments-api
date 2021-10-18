const mongoose = require('mongoose');
var ServiceTypeSchema= mongoose.Schema(
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
    
module.exports = mongoose.model('ServiceType', ServiceTypeSchema, 'serviceTypes');
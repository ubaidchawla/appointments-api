const mongoose = require('mongoose');
var timeFormatsSchema= mongoose.Schema(
{
    format:
    {
        type: String, 
        required: true
    },
    isActive:
    {
        type:Boolean,
        default: true
    }
},
{ 
    timestamps: true 
});
    
module.exports = mongoose.model('TimeFormat', timeFormatsSchema, 'timeFormats');
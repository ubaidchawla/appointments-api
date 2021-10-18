const mongoose = require('mongoose');
var timeZonesSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    timeZonescol:
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
    
module.exports = mongoose.model('TimeZone', timeZonesSchema, 'timeZones');
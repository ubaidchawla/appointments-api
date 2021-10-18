const mongoose = require('mongoose');
var ServiceDurationSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    durationInMinutes: 
    {
        type: Number,
        required: true
    },

},
{ 
    timestamps: true 
});
    
module.exports = mongoose.model('ServiceDuration', ServiceDurationSchema, 'serviceDurations');
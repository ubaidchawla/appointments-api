const mongoose = require('mongoose');
var businessTypesSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    icon:
    {
        type: String,
        default: null
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
    
module.exports = mongoose.model('BusinessType', businessTypesSchema, 'businessTypes');
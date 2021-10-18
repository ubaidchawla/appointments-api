const mongoose = require('mongoose');
var languagesSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    code:
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
    
module.exports = mongoose.model('Language', languagesSchema, 'languages');
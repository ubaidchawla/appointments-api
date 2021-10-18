const mongoose = require('mongoose');
var ExtraTimeTypeSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    description:
    {
        type: String, 
        required: true
    }
},
{ 
    timestamps: true 
});
module.exports = mongoose.model('ExtraTimeType', ExtraTimeTypeSchema, 'extraTimeTypes');
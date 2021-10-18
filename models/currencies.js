const mongoose = require('mongoose');
var currenciesSchema= mongoose.Schema(
{
    name:
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
    
module.exports = mongoose.model('Currency', currenciesSchema, 'currencies');
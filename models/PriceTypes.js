const mongoose = require('mongoose');
var PriceTypeSchema= mongoose.Schema(
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
    
module.exports = mongoose.model('PriceType', PriceTypeSchema, 'priceTypes');
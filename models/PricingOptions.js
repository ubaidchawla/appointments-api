const mongoose = require('mongoose');
var PricingOptionSchema= mongoose.Schema(
{
    priceName:
    {
        type: String, 
        required: true
    },
    serviceduration:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceDuration',
        required: true
    },
    priceType:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PriceType',
        required: true
    },
    price:
    {
        type: mongoose.Types.Decimal128, 
        required: true
    },
    specialPrice:
    {
        type: mongoose.Types.Decimal128, 
        required: true
    }
},
{ 
    timestamps: true 
});
    
module.exports = mongoose.model('PricingOption', PricingOptionSchema, 'pricingOption');
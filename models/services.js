const mongoose = require('mongoose');
var ServiceSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    category:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceCategory',
        required: true
    },
    partner:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
        required: true
    },
    type:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceType',
        required: true
    },
    description:
    {
        type: String, 
        required: true
    },
    gender:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gender',
        required: true
    },
    onlineBookingEnabled:
    {
        type: Boolean, 
        default: false
    },
    pricingOption:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PricingOption',
        required: true
    },
    extraTimeEnabled:
    {
        type: Boolean, 
        default: false
    },
    extraTimeType:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExtraTimeType'    
    },
    taxRate:
    {
        type: mongoose.Types.Decimal128, 
        required: true
    },
    voucherSalesEnabled:
    {
        type: Boolean, 
        default: false
    },
    voucherExpiryPeriod:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VoucherExpiryPeriod'    
    }
},
{ 
    timestamps: true 
});
    
module.exports = mongoose.model('Service', ServiceSchema, 'services');
const mongoose = require('mongoose');
var VoucherExpiryPeriodSchema= mongoose.Schema(
{
    name:
    {
        type: String, 
        required: true
    },
    expiryInDays:
    {
        type: Number, 
        required: true
    }
},
{ 
    timestamps: true 
});
    
module.exports = mongoose.model('VoucherExpiryPeriod', VoucherExpiryPeriodSchema, 'voucherExpiryPeriods');
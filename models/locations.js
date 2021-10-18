const mongoose = require('mongoose');
var locationsSchema= mongoose.Schema(
{
    locationName:
    {
        type: String, 
        required: true
    },
    primaryContactNumber:
    {
        type: String, 
        required: true
    },
    secondaryContactNumber:
    {
        type: String,
        default: null
    },
    emailAddress:
    {
        type: String, 
        required: true
    },
    partnerId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
        required: true
    },
    mainBusinessType:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessType',
        required: true
    },
    additionalBusinessTypes:
    {
        type: Array,
        default: null
    },
    gallery:
    {
        type: Array,
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
    
module.exports = mongoose.model('Location', locationsSchema, 'locations');
const mongoose = require('mongoose');
var PartnerSchema= mongoose.Schema(
{
    businessName:
    {
        type: String, 
        required: true
    },
    currency:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Currency',
        default: null
    },
    timeZone:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TimeZone',
        default: null
    },
    timeFormat:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TimeFormat',
        default: null
    },
    weekStart:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WeekDay',
        default: null
    },
    clientNotificationsLanguage:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
        default: null
    },
    staffNotificationsLanguage:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
        default: null
    },
    websiteUrl:
    {
        type: String,
        default: null
    },
    facebookUrl:
    {
        type: String,
        default: null
    },
    instagramUrl:
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
    
module.exports = mongoose.model('Partner', PartnerSchema, 'partners');
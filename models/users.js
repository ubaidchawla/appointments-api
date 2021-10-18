const mongoose = require('mongoose');
var usersSchema= mongoose.Schema(
{
    firstName:
    {
        type: String, 
        required: true
    },
    lastName:
    {
        type: String,
        default: null
    },
    email:
    {
        type: String, 
        required: true
    },
    mobile:
    {
        type: String, 
        required: true
    },
    profilePicture:
    {
        type: String,
        default: null
    },
    username:
    {
        type: String, 
        required: true
    },
    password:
    {
        type: String, 
        required: true
    },
    userRole:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRole',
        required: true
    },
    partnerId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
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
    
module.exports = mongoose.model('User', usersSchema, 'users');
const mongoose = require('mongoose');
var userRolesSchema= mongoose.Schema(
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
    
module.exports = mongoose.model('UserRole', userRolesSchema, 'userRoles');
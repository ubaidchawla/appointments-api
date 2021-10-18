const mongoose = require('mongoose');
var ServiceCategorySchema= mongoose.Schema(
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
    
module.exports = mongoose.model('ServiceCategory', ServiceCategorySchema, 'serviceCategories');
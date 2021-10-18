const mongoose = require('mongoose');
var weekDaysSchema= mongoose.Schema(
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
    
module.exports = mongoose.model('WeekDay', weekDaysSchema, 'weekDays');
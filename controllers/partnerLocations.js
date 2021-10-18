const partnerLocation = require('../models/locations');
const validateRequest = require('../utils/validate-request');
const removeEmpty = require('../utils/remove_empty').removeEmpty;
const logger = require('../utils/logger');
const Joi = require('joi');
require('../models/businessTypes');

exports.create = async (req, res) => {
    try {
        const schema = Joi.object({
            locationName : Joi.string().required(), 
            primaryContactNumber : Joi.string().required(), 
            secondaryContactNumber : Joi.string().allow(''), 
            emailAddress: Joi.string().required(), 
            partnerId : Joi.string().required(), 
            mainBusinessType : Joi.string().required(), 
            additionalBusinessTypes : Joi.string().allow(''), 
            gallery : Joi.string().allow(''),
            isActive : Joi.boolean(),
        });
        
        const validationError = validateRequest(schema, req.body);

        if (validationError) return res.status(400).send({error: "Bad Request", message: validationError});
    
        const partnerLocation = new Location();
    
        partnerLocation.locationName = req.body.locationName,
        partnerLocation.primaryContactNumber = req.body.primaryContactNumber,
        partnerLocation.secondaryContactNumber = req.body.secondaryContactNumber,
        partnerLocation.emailAddress = req.body.emailAddress,
        partnerLocation.partnerId = req.body.partnerId,
        partnerLocation.mainBusinessType = req.body.mainBusinessType,
        partnerLocation.additionalBusinessTypes = req.body.additionalBusinessTypes,
        partnerLocation.gallery = req.body.gallery,
        partnerLocation.isActive = req.body.isActive,

        await partnerLocation.save();
        res.status(200).send({status:1, data:partnerLocation})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

exports.searchbyQuery = async (req, res) => 
{
    try {
        const filter = removeEmpty(req.query);
        const response = await Service.find(filter)
        .populate([ 
            'mainBusinessType',
            {
                path: "partnerId",
                populate: 
                [
                    {
                        path:'currency',
                    }, 
                    {
                        path:'timeZone'
                    },
                    {
                        path:'timeFormat'
                    },
                    {
                        path:'weekStart',
                    }, 
                    {
                        path:'clientNotificationsLanguage'
                    },
                    {
                        path:'staffNotificationsLanguage'
                    }

                ]
            }
        ])
        res.send(response)
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

exports.update = async (req, res) => {
    try {
        const response = await Service.findByIdAndUpdate(req.params.id, {
            locationName = req.body.locationName,
            primaryContactNumber = req.body.primaryContactNumber,
            secondaryContactNumber = req.body.secondaryContactNumber,
            emailAddress = req.body.emailAddress,
            partnerId = req.body.partnerId,
            mainBusinessType = req.body.mainBusinessType,
            additionalBusinessTypes = req.body.additionalBusinessTypes,
            gallery = req.body.gallery,
            isActive = req.body.isActive,
        }, {new: true});
        res.status(200).send({status:1,message:"Updated Successfully",data:response})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

exports.delete = async (req, res) => 
{
    try {
        const response = await Service.findByIdAndUpdate(req.params.id, {
            isActive = false,
        }, {new: true});
        res.status(200).send({status:1,message:"Updated Successfully",data:response})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

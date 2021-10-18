const Service = require('../models/Services.js');
const validateRequest = require('../utils/validate-request');
const removeEmpty = require('../utils/remove_empty').removeEmpty;
const logger = require('../utils/logger');
const Joi = require('joi');
require('../models/*');

exports.create = async (req, res) => {
    try {
        const schema = Joi.object({
            name : Joi.string().required(), 
            category : Joi.string().required(), 
            type : Joi.string().required(), 
            partner: Joi.string().required(), 
            description : Joi.string().required(), 
            gender : Joi.string().required(), 
            onlineBookingEnabled : Joi.boolean(), 
            pricingOption : Joi.string().required(), 
            extraTimeEnabled : Joi.boolean(),
            extraTimeType : Joi.string().allow(''), 
            taxRate : Joi.number().required(),
            voucherSalesEnabled : Joi.boolean(), 
            voucherExpiryPeriod : Joi.string().allow('')
        });
        
        const validationError = validateRequest(schema, req.body);

        if (validationError) return res.status(400).send({error: "Bad Request", message: validationError});
    
        const service = new Service();
    
        service.name = req.body.name,
        service.category = req.body.category,
        service.partner = req.body.partner,
        service.type = req.body.type,
        service.description = req.body.description
        service.gender = req.body.gender,
        service.onlineBookingEnabled = req.body.onlineBookingEnabled,
        service.pricingOption = req.body.pricingOption,
        service.extraTimeEnabled = req.body.extraTimeEnabled
        service.extraTimeType = req.body.extraTimeType,
        service.taxRate = req.body.taxRate,
        service.voucherSalesEnabled = req.body.voucherSalesEnabled,
        service.voucherExpiryPeriod = req.body.voucherExpiryPeriod

        await service.save();
        res.status(200).send({status:1, data:service})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

exports.search = async (req, res) => 
{
    try {
        const response = await Service.findById(req.params.id)
        .populate([
            'category',
            'partner',
            'type',
            'gender',
            {
                path: "pricingOption",
                populate: 
                [
                    {
                        path:'serviceduration'
                    }, 
                    {
                        path:'priceType'
                    }
                ]
            },
            'extraTimeType',
            'voucherExpiryPeriod'
        ])
        res.send(response)
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
            'category',
            'partner',
            'type',
            'gender',
            {
                path: "pricingOption",
                populate: 
                [
                    {
                        path:'serviceduration'
                    }, 
                    {
                        path:'priceType'
                    }
                ]
            },
            'extraTimeType',
            'voucherExpiryPeriod'
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
            name : req.body.name,
            category : req.body.category,
            type : req.body.type,
            description : req.body.description,
            gender : req.body.gender,
            onlineBookingEnabled : req.body.onlineBookingEnabled,
            pricingOption : req.body.pricingOption,
            extraTimeEnabled : req.body.extraTimeEnabled,
            extraTimeType : req.body.extraTimeType,
            taxRate : req.body.taxRate,
            voucherSalesEnabled : req.body.voucherSalesEnabled,
            voucherExpiryPeriod : req.body.voucherExpiryPeriod
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
        const response = await Service.findByIdAndRemove(req.params.id)
        res.status(200).send({status:1, message:"Deleted Successfully", data:response})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

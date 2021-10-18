const User = require('../models/users.js');
const validateRequest = require('../utils/validate-request');
const logger = require('../utils/logger');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
require('../models/userRoles');
require('../models/Partners');

exports.create = async (req, res) => {
    try {
        const schema = Joi.object({
            firstName: Joi.string().required(), 
            lastName: Joi.string().allow(''),
            businessName: Joi.string().required(),
            email : Joi.string().required(), 
            mobile: Joi.string().required(), 
            profilePicture : Joi.string().allow(''), 
            username : Joi.string().required(), 
            password : Joi.string().required(), 
            userRole : Joi.string().required(), 
            partnerId : Joi.string().required(),
            isActive : Joi.boolean(),
        });
        
        const validationError = validateRequest(schema, req.body);

        if (validationError) return res.status(400).send({error: "Bad Request", message: validationError});

        if (await User.find({ username: req.body.username })) {
            throw req.body.username + ' is already taken';
        }
        if (await User.find({ email: req.body.email })) {
            throw req.body.email + ' is already taken';
        }
        if (await Partner.find({ businessName: req.body.businessName })) {
            throw req.body.businessName + ' is already taken';
        }
        const partner = new Partner();
        partner.businessName = req.body.businessName;
        partner_saved = await partner.save();
        const user = new User();
        user.firstName = req.body.firstName,
        user.lastName = req.body.lastName,
        user.email = req.body.email,
        user.mobile = req.body.mobile,
        user.profilePicture = req.body.profilePicture,
        user.username = req.body.username,
        user.password = await bcrypt.hash(req.body.password, 10),
        user.userRole = req.body.userRole,
        user.partnerId = partner_saved._id,
        user.isActive = req.body.isActive,
        await user.save();
        res.status(200).send({status:1, data:user})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.find({ username: req.query.username });
        if (!user || !(await bcrypt.compare(req.query.password, user.password)))
            throw 'Username or password is incorrect';
        return user;
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

exports.update = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!(await bcrypt.compare(req.query.password, user.password)))
            throw 'Old password is incorrect';

        const response = await Service.findByIdAndUpdate(req.params.id, {
            firstName = req.body.firstName,
            lastName = req.body.lastName,
            email = req.body.email,
            mobile = req.body.mobile,
            profilePicture = req.body.profilePicture,
            username = req.body.username,
            password = await bcrypt.hash(req.body.password, 10),
            userRole = req.body.userRole,
            partnerId = partner_saved._id,
            isActive = req.body.isActive,
        }, {new: true});
        res.status(200).send({status:1,message:"Updated Successfully",data:response})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

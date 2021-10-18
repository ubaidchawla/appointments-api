const Partner = require('../models/Partners.js');
const logger = require('../utils/logger');
require('../models/*');

exports.update = async (req, res) => {
    try {
        const response = await Partner.findByIdAndUpdate(req.params.id, {
            businessName = req.body.businessName,
            currency = req.body.currency,
            timeZone = req.body.timeZone,
            timeFormat = req.body.timeFormat,
            weekStart = req.body.weekStart,
            clientNotificationsLanguage = req.body.clientNotificationsLanguage,
            staffNotificationsLanguage = req.body.staffNotificationsLanguage,
            websiteUrl = req.body.websiteUrl,
            facebookUrl = req.body.facebookUrl,
            instagramUrl = req.body.instagramUrl,
            isActive = req.body.isActive
        }, {new: true});
        res.status(200).send({status:1,message:"Updated Successfully",data:response})
    } catch (error) {
        logger.error(error)
        res.status(500).send({ message: "Internal server error." });
    }
};

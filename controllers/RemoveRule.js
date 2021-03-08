/**
 * Services
 */
const RuleService = require('../services/rule');

const removeRuleFromDB = async (req, res) => {
    const ruleObject = req.body;
    if (!ruleObject) return res.status(400).send({status: 'Error', message: 'Error: Rule is required.'});
    if (!ruleObject._id ) return res.status(400).send({
        status: 'Error',
        message: 'Error: Rule _id is required.'
    });
    return res.send(await RuleService.remove(ruleObject));
};

module.exports = {
    removeRuleFromDB,
}

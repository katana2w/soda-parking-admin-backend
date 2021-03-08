/**
 * Services
 */
const RuleService = require('../services/rule');

const addRuleToDB = async (req, res) => {
    const ruleObject = req.body;

    if (!ruleObject) return res.status(400).send({status: 'Error', message: 'Error: Rule is required.'});
    if (!ruleObject.ruleName) return res.status(400).send({
        status: 'Error',
        message: 'Error: Rule name is required.'
    });

    return res.send(await RuleService.create(ruleObject));
};


module.exports = {
    addRuleToDB,
}

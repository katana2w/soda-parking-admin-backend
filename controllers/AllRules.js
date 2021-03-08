/**
 * Services
 */
const RuleService = require('../services/rule');

const getAllRulesFromDb = async (req, res) => {
    return res.send(await RuleService.allRules());
};

module.exports = {
    getAllRulesFromDb,
}

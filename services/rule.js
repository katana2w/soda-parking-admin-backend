/**
 * Service
 */

const RuleModel = require('../models/Rule');

const create = async (ruleObject) => {
    try {
        let result =  await RuleModel.create(ruleObject);
        return {
            status: 'Ok',
            data: result
        };
    } catch (err) {
        if (err.code === 11000) { // 1100 code means unique fields duplication which is bad request error;
            return { status: 'Error', message: `Error: line with name "${ruleObject.ruleName}" already exists.`};
        }            console.log('RuleService', RuleService);

        return { status: 'Error', message: `Error: creation line with name "${ruleObject.ruleName}".`};
    }
};

const allRules = async () => {
    try {
        const allRulesObject = await RuleModel.find({});
        return { status: 'Ok', data: allRulesObject };
    } catch (err) {
        return { status: 'Error', message: 'Error: get all rules from Db.'};
    }
}

const remove = async (ruleObject) => {
    try {
        const result = await RuleModel.deleteOne({ _id: ruleObject._id});
        return { status: 'Ok', data: result };
    } catch (err) {
        return { status: 'Error', message: `Error: removing line "${ruleObject.ruleName}" from Db.`};
    }
}

const update = async (ruleObject) => {
    const { _id } = ruleObject;
    try {
        const result = await RuleModel.findOneAndUpdate({ _id }, { ...ruleObject });
        return { status: 'Ok', data: result };
    } catch(err) {
        return { status: 'Error', message: `Error: updating line "${ruleObject.ruleName}" in Db.`};
    }
}

module.exports = {
    create,
    allRules,
    remove,
    update
}

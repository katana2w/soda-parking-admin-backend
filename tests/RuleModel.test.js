const mongoose = require('mongoose');
const RuleModel = require('../models/Rule');
const dbConfig = require('../helpers/db-config');

const ruleData = {
    "ruleName": "RULE_A",
    "ruleRedTo": 1,
    "ruleYellowFrom": 2,
    "ruleYellowTo": 3,
    "ruleGreenFrom": 4
};

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbConfig.connect();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbConfig.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbConfig.closeDatabase();
});

describe('Rule Model Test', () => {
    it('has a module', async () => {
        expect(RuleModel).toBeDefined();
    });

    it('create & save rule successfully', async () => {
        const validRule = new RuleModel(ruleData);
        const savedRule = await validRule.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedRule._id).toBeDefined();
        expect(savedRule.ruleName).toBe(ruleData.ruleName);
        expect(savedRule.ruleRedTo).toBe(ruleData.ruleRedTo);
        expect(savedRule.ruleYellowFrom).toBe(ruleData.ruleYellowFrom);
        expect(savedRule.ruleYellowTo).toBe(ruleData.ruleYellowTo);
        expect(savedRule.ruleGreenFrom).toBe(ruleData.ruleGreenFrom);
    });

    it('insert rule successfully, but the field does not defined in schema should be undefined', async () => {
        const ruleWithInvalidField = new RuleModel({
            "ruleName": "RULE_A",
            "ruleRedTo": 1,
            "ruleYellowFrom": 2,
            "ruleYellowTo": 3,
            "ruleGreenFrom": 4,
            "rule": 7
        });
        const savedRuleWithInvalidField = await ruleWithInvalidField.save();
        expect(savedRuleWithInvalidField._id).toBeDefined();
        expect(savedRuleWithInvalidField.rule).toBeUndefined();
    });

    it('create rule without required field should failed', async () => {
        const ruleWithoutRequiredField = new RuleModel({
            "ruleName": "RULE_A",
            "ruleRedTo": 1,
            "ruleYellowFrom": 2,
            "ruleYellowTo": 3
        });
        let err;
        try {
            const savedRuleWithoutRequiredField = await ruleWithoutRequiredField.save();
            error = savedRuleWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.ruleGreenFrom).toBeDefined();
    });

    it('create rule with same value in unique field should failed', async () => {
        const ruleWithUniqueField = new RuleModel(ruleData);
        const ruleWithUniqueFieldSecond = new RuleModel(ruleData);
        let err;
        try {
            const savedRuleWithUniqueField = await ruleWithUniqueField.save();
            const savedRuleWithUniqueFieldSecond = await ruleWithUniqueFieldSecond.save();
            error = savedRuleWithUniqueFieldSecond;
        } catch (error) {
            err = error
        }
        expect(err.name).toBeDefined();
        expect(err.name).toBe("MongoError");
        expect(err.code).toBeDefined();
        expect(err.code).toBe(11000);
    });
});

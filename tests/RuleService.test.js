const RuleService = require('../services/rule');
const dbConfig = require('../helpers/db-config');

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


describe('RuleService', () => {
    describe('create a new rule', () => {
        it('should create a new rule', async () => {
            try {
                let rule = {
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                const firstRuleSuccess = await RuleService.create(rule);
                expect(firstRuleSuccess.status).toBe('Ok');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });

        it('should not create a new rule if record with the same ruleName is already exists', async () => {
            try {
                let rule = {
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                await RuleService.create(rule);
                let rule_duplicate = {
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                const secondRuleFail = await RuleService.create(rule_duplicate);
                expect(secondRuleFail.status).toBe('Error');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });
    });

    describe('remove a rule', () => {
        it('should not remove a rule if rule with needed _id is not created', async () => {
            try {
                let rule = {
                    "_id": "some-id-11",
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                const removeRuleFail = await RuleService.remove(rule);
                expect(removeRuleFail.status).toBe('Error');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });

        it('should remove rule from db', async () => {
            try {
                let rule = {
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                const ruleForRemove = await RuleService.create(rule);
                const secondRuleSuccess = await RuleService.remove(ruleForRemove);
                expect(secondRuleSuccess.status).toBe('Ok');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });
    });

    describe('update a rule', () => {
        it('should not update a rule if rule with needed _id is not created', async () => {
            try {
                let rule = {
                    "_id": "some-id-123",
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                const removeRuleFail = await RuleService.update(rule);
                expect(removeRuleFail.status).toBe('Error');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });

        it('should update rule from db', async () => {
            try {
                let rule = {
                    "ruleName" : "RULE_C",
                    "ruleRedTo" : 111,
                    "ruleYellowFrom" : 222,
                    "ruleYellowTo" : 333,
                    "ruleGreenFrom" : 444,
                }

                const ruleForUpdate = await RuleService.create(rule);
                ruleForUpdate.ruleYellowTo = 0;
                const secondRuleSuccess = await RuleService.update(ruleForUpdate);
                expect(secondRuleSuccess.status).toBe('Ok');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });
    });

    describe('get all rules', () => {
        it('should return all rules', async () => {
            try {
                const body = await RuleService.allRules()
                expect(body.status).toBe('Ok');
            } catch (e) {
                expect(e.message).toMatch('Error: get all rules from Db.');
            }
        });
    });
});

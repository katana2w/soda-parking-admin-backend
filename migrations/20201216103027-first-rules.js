require('../database/connection');
/**
 * Models
 */
const RuleModel = require('../models/Rule');

/**
 * Fixtures
 */
const RulesFixture = require('../public/rules.json');

/**
 * Services
 */
const { create } = require('../services/rule');

module.exports = {
  async up(db, client) {
    const rules = await RuleModel.find({});

    if (rules.length) return;

    for (let i = 0; i < RulesFixture.length; i++) {
      await create({ ...RulesFixture[i] });
    }
  },

  async down(db, client) {
    await RuleModel.deleteMany({});
  }
};

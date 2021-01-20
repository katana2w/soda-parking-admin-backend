require('../database/connection');
/**
 * Models
 */
const UserModel = require('../models/User');

/**
 * Fixtures
 */
const UsersFixture = require('../public/users.json');

/**
 * Services
 */
const { create } = require('../services/user');

module.exports = {
  async up(db, client) {
    const users = await UserModel.find({});

    if (users.length) return;

    for (let i = 0; i < UsersFixture.length; i++) {
      await create({ ...UsersFixture[i] });
    }
  },

  async down(db, client) {
    await UserModel.deleteMany({});
  }
};

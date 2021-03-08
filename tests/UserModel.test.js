const mongoose = require('mongoose');
const UserModelTest = require('../models/User');
const dbConfig = require('../helpers/db-config');

const userMockData = {
    "_id": 'some-user-id',
    "name": "Admin user 1",
    "email": "admin1@mail.com",
    "password": "password",
    "role": "ADMIN"
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

describe('User Model Test', () => {
    it('has a module', async () => {
        expect(UserModelTest).toBeDefined();
    });

    it('create & save user successfully', async () => {
        const validUser = new UserModelTest(userMockData);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(userMockData.name);
        expect(savedUser.email).toBe(userMockData.email);
        expect(savedUser.password).toBe(userMockData.password);
        expect(savedUser.role).toBe(userMockData.role);
    });

    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new UserModelTest({
            name: 'TekLoon',
            email: 'eeee@eee.ee',
            nickname: 'Handsome TekLoon'
        });
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
        expect(savedUserWithInvalidField.nickname).toBeUndefined();
    });
    it('create user without required field should failed', async () => {
        const userWithoutRequiredField = new UserModelTest({name: 'TekLoon'});
        let err;
        try {
            const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
            error = savedUserWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.email).toBeDefined();
    });

    it('create user with same value in unique field should failed', async () => {
        const userWithUniqueField = new UserModelTest({name: 'TekLoon', email: 'admin1@mail.com'});
        const userWithUniqueFieldSecond = new UserModelTest({name: 'TekLoon 2', email: 'admin1@mail.com'});
        let err;
        try {
            const savedUserWithUniqueField = await userWithUniqueField.save();
            const savedUserWithUniqueFieldSecond = await userWithUniqueFieldSecond.save();
            error = savedUserWithUniqueFieldSecond;
        } catch (error) {
            err = error
        }

        expect(err.name).toBeDefined();
        expect(err.name).toBe("MongoError");
        expect(err.code).toBeDefined();
        expect(err.code).toBe(11000);
    });
});

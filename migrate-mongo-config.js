require('dotenv').config();
const path = require('path');

const { dir: url, base: databaseName } = path.parse(process.env.MONGO_URI);

module.exports = {
  mongodb: {
    url,
    databaseName,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: './migrations',
  changelogCollectionName: '__MIGRATIONS__',
};

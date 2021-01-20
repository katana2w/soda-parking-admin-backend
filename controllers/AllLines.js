/**
 * Models
 */
const LineModel = require('../models/Line');

const getAllLinesFromDb = async (req, res) => {
    const allLinesObject = await LineModel.find({});

    return res.send({ message: 'Ok', allLinesObject });
};

module.exports = {
    getAllLinesFromDb,
}

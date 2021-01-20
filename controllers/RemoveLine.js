/**
 * Models
 */
const LineModel = require('../models/Line');

const removeLineFromDB = async (req, res) => {
    const lineObject = req.body;
    const result = await LineModel.deleteOne({ _id: lineObject._id});
    return res.send({ message: 'Ok', result });
};

module.exports = {
    removeLineFromDB,
}

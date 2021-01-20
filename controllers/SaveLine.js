/**
 * Models
 */
const LineModel = require('../models/Line');

/**
 * Services
 */
const addLineToDB = async (req, res) => {
    const lineObject = req.body;
    let result;
    try {
        result = result = await LineModel.create(lineObject);
    } catch(err) {
        return res.send({ message: 'Error', err });
    }
    return res.send({ message: 'Ok', result });
};


module.exports = {
    addLineToDB,
}

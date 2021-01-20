/**
 * Models
 */
const LineModel = require('../models/Line');


const updateLineInDB = async (req, res) => {
    let result;
    const lineObject = req.body;
    const { _id } = lineObject;
    console.log('lineObject', lineObject);
    try {
        result = await LineModel.findOneAndUpdate({ _id }, { ...lineObject });
        console.log('result', result);
    } catch(err) {
        console.log('err', err);
        return res.send({ message: 'Error', err });
    }
    return res.send({ message: 'Ok', result });
};


module.exports = {
    updateLineInDB,
}

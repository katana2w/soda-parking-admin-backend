/**
 * Services
 */
const LineService = require('../services/line');

const updateLineInDB = async (req, res) => {
    const lineObject = req.body;
    if (!lineObject) return res.status(400).send({status: 'Error', message: 'Error: Line is required.'});
    if (!lineObject._id ) return res.status(400).send({
        status: 'Error',
        message: 'Error: Line _id is required.'
    });
    if (!lineObject.lineName ) return res.status(400).send({
        status: 'Error',
        message: 'Error: Line name is required.'
    });
    return res.send(await LineService.update(lineObject));
};


module.exports = {
    updateLineInDB,
}

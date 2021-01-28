/**
 * Services
 */
const LineService = require('../services/line');

const addLineToDB = async (req, res) => {
    const lineObject = req.body;

    if (!lineObject) return res.status(400).send({status: 'Error', message: 'Error: Line is required.'});
    if (!lineObject.lineName || !lineObject.lineTolerance) return res.status(400).send({
        status: 'Error',
        message: 'Error: Line name and line tolerance are required.'
    });
    if (!lineObject.lineCoordinates ||
        !lineObject.lineCoordinates.start ||
        !lineObject.lineCoordinates.end ||
        !lineObject.lineCoordinates.start.lat ||
        !lineObject.lineCoordinates.start.lng ||
        !lineObject.lineCoordinates.end.lat ||
        !lineObject.lineCoordinates.end.lng) return res.status(400).send({
        status: 'Error',
        message: 'Error: Line coordinates are required.'
    });

    return res.send(await LineService.create(lineObject));
};


module.exports = {
    addLineToDB,
}

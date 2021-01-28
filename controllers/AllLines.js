/**
 * Services
 */
const LineService = require('../services/line');

const getAllLinesFromDb = async (req, res) => {
    return res.send(await LineService.allLines());
};

module.exports = {
    getAllLinesFromDb,
}

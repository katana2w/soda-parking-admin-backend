const axios = require('axios');
const {ALL_SCANNERS_API_URL} = require('../constants/urls');
const getAllScanners = async (req, res) => {
    try {
        const allScanners = await axios.get(ALL_SCANNERS_API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return res.send({status: 'Ok', data: allScanners.data});
    } catch (err) {
        return res.send({status: 'Error', message: 'Error: get all scanners from Vodafone API.'});
    }
};

module.exports = {
    getAllScanners,
}

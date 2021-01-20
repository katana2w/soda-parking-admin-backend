/**
 * Models
 */
// const ScannerModel = require('../models/Scanner'); // leave it for future changes
const axios = require('axios');
const { ALL_SCANNERS_API_URL } = require('../constants/urls');
const getAllScanners = async (req, res) => {
    console.log('GET ALL SCANNERS')
        const allScanners = await axios.get(ALL_SCANNERS_API_URL, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    // console.log('response', response);
    return res.send({ message: 'Ok', response: allScanners.data});
};

module.exports = {
    getAllScanners,
}

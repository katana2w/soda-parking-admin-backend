/**
 * Services
 */
const ScannerService = require('../services/scanner');

const updateScanner = async (scannerObject) => {
    if (!scannerObject) return {status: 'Error', message: 'Error: Rule is required.'};
    if (!scannerObject._id ) return {
        status: 'Error',
        message: 'Error: Rule _id is required.'
    };
    return await ScannerService.update(scannerObject);
};


module.exports = {
    updateScanner,
}

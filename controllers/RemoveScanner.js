/**
 * Services
 */
const ScannerService = require('../services/scanner');

const removeScanner = async (scannerObject) => {
    if (!scannerObject) return {status: 'Error', message: 'Error: Rule is required.'};
    if (!scannerObject._id ) return {
        status: 'Error',
        message: 'Error: Rule _id is required.'
    };
    return await ScannerService.remove(scannerObject);
};

module.exports = {
    removeScanner,
}

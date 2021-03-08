/**
 * Services
 */
const ScannerService = require('../services/scanner');

const saveScanner = async (scannerObject) => {
    if (!scannerObject) return {status: 'Error', message: 'Error: Scanner is required.'};
    if (!scannerObject.ParkingPlaceId) return {
        status: 'Error',
        message: 'Error: Scanner ParkingPlaceId is required.'
    };

    return await ScannerService.create(scannerObject);
};


module.exports = {
    saveScanner,
}

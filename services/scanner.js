const ScannerModel = require('../models/Scanner');

const create = async (scannerObject) => {
    try {
        let result =  await ScannerModel.create(scannerObject);
        return {
            status: 'Ok',
            data: result
        };
    } catch (err) {
        if (err.code === 11000) { // 1100 code means unique fields duplication which is bad request error;
            return { status: 'Error', message: `Error: line with name "${scannerObject.ParkingPlaceId}" already exists.`};
        }            console.log('ScannerService', scannerObject);

        return { status: 'Error', message: `Error: creation line with name "${scannerObject.ParkingPlaceId}".`};
    }
};

const getByParkingPlaceId = async (scannerObject) => {
    const { ParkingPlaceId } = scannerObject;
    try {
        const result = await ScannerModel.findOne({ ParkingPlaceId });
        return { status: 'Ok', data: result };
    } catch(err) {
        return { status: 'Error', message: `Error: updating line "${scannerObject.ParkingPlaceId}" in Db.`};
    }
}

const getById = async (scannerObject) => {
    const { _id } = scannerObject;
    try {
        const result = await ScannerModel.findOne({ _id });
        return { status: 'Ok', data: result };
    } catch(err) {
        return { status: 'Error', message: `Error: updating line "${scannerObject.ParkingPlaceId}" in Db.`};
    }
}

const update = async (scannerObject) => {
    const { _id } = scannerObject;
    try {
        const result = await ScannerModel.findOneAndUpdate({ _id }, { ...scannerObject });
        return { status: 'Ok', data: result };
    } catch(err) {
        return { status: 'Error', message: `Error: updating line "${scannerObject.ParkingPlaceId}" in Db.`};
    }
}

const remove = async (scannerObject) => {
    try {
        const result = await ScannerModel.deleteOne({ _id: scannerObject._id});
        return { status: 'Ok', data: result };
    } catch (err) {
        return { status: 'Error', message: `Error: removing line "${scannerObject.ParkingPlaceId}" from Db.`};
    }
}

module.exports = {
    create,
    getByParkingPlaceId,
    getById,
    update,
    remove
}

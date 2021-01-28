/**
 * Service
 */

const LineModel = require('../models/Line');

const create = async (lineObject) => {
    try {
        let result =  await LineModel.create(lineObject);
        return {
            status: 'Ok',
            data: result
        };
    } catch (err) {
        if (err.code === 11000) { // 1100 code means unique fields duplication which is bad request error;
            return { status: 'Error', message: `Error: line with name "${lineObject.lineName}" already exists.`};
        }
        return { status: 'Error', message: `Error: creation line with name "${lineObject.lineName}".`};
    }
};

const allLines = async () => {
    try {
        const allLinesObject = await LineModel.find({});
        return { status: 'Ok', data: allLinesObject };
    } catch (err) {
        return { status: 'Error', message: 'Error: get all lines from Db.'};
    }
}

const remove = async (lineObject) => {
    try {
        const result = await LineModel.deleteOne({ _id: lineObject._id});
        return { status: 'Ok', data: result };
    } catch (err) {
        return { status: 'Error', message: `Error: removing line "${lineObject.lineName}" from Db.`};
    }
}

const update = async (lineObject) => {
    const { _id } = lineObject;
    try {
        const result = await LineModel.findOneAndUpdate({ _id }, { ...lineObject });
        return { status: 'Ok', data: result };
    } catch(err) {
        return { status: 'Error', message: `Error: updating line "${lineObject.lineName}" in Db.`};
    }
}

module.exports = {
    create,
    allLines,
    remove,
    update
}

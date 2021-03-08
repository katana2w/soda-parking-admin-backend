const mongoose = require('mongoose');
const LineModel = require('../models/Line');
const dbConfig = require('../helpers/db-config');

const lineData = {
    "lineCoordinates": {
        "start": {
            "lat": 47.4914661908453,
            "lng": 19.0543734332539
        },
        "end": {
            "lat": 47.4916274914088,
            "lng": 19.0552867254235
        }
    },
    "lineName": "qq3",
    "ruleName": "RULE_A",
    "lineTolerance": 1,
    "linePoly": null,
    "marker1": {
        "lat": 47.4914661908453,
        "lng": 19.0543734332539
    },
    "marker2": {
        "lat": 47.4916274914088,
        "lng": 19.0552867254235
    },
    "lineScanners": [
        {
            "GpsCoordinates": {
                "Latitude": 47.491507,
                "Longitude": 19.054594
            },
            "ParkingPlaceId": "153",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491496,
                "Longitude": 19.054528
            },
            "ParkingPlaceId": "155",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491542,
                "Longitude": 19.054792
            },
            "ParkingPlaceId": "162",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491599,
                "Longitude": 19.055123
            },
            "ParkingPlaceId": "165",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491484,
                "Longitude": 19.054462
            },
            "ParkingPlaceId": "166",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491473,
                "Longitude": 19.054396
            },
            "ParkingPlaceId": "167",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491565,
                "Longitude": 19.054925
            },
            "ParkingPlaceId": "171",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491519,
                "Longitude": 19.05466
            },
            "ParkingPlaceId": "173",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491622,
                "Longitude": 19.055255
            },
            "ParkingPlaceId": "177",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.49153,
                "Longitude": 19.054726
            },
            "ParkingPlaceId": "182",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491576,
                "Longitude": 19.054991
            },
            "ParkingPlaceId": "186",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491588,
                "Longitude": 19.055057
            },
            "ParkingPlaceId": "196",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491611,
                "Longitude": 19.055189
            },
            "ParkingPlaceId": "198",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        },
        {
            "GpsCoordinates": {
                "Latitude": 47.491553,
                "Longitude": 19.054859
            },
            "ParkingPlaceId": "199",
            "State": "Occupied",
            "Category": "Normal",
            "IsElectricCharger": false,
            "IsOnlyElectric": false
        }
    ]
};

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbConfig.connect();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbConfig.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbConfig.closeDatabase();
});

describe('Line Model Test', () => {
    it('create & save line successfully', async () => {
        const validLine = new LineModel(lineData);
        const savedLine = await validLine.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedLine._id).toBeDefined();
        expect(savedLine.lineName).toBe(lineData.lineName);
        expect(savedLine.lineTolerance).toBe(lineData.lineTolerance);
        expect(savedLine.ruleName).toBe(lineData.ruleName);
        expect(savedLine.lineCoordinates.start.lat).toBe(lineData.lineCoordinates.start.lat);
        expect(savedLine.lineCoordinates.start.lng).toBe(lineData.lineCoordinates.start.lng);
        expect(savedLine.lineCoordinates.end.lat).toBe(lineData.lineCoordinates.end.lat);
        expect(savedLine.lineCoordinates.end.lng).toBe(lineData.lineCoordinates.end.lng);

        expect(savedLine.marker1.lat).toBe(lineData.marker1.lat);
        expect(savedLine.marker1.lng).toBe(lineData.marker1.lng);
        expect(savedLine.marker2.lat).toBe(lineData.marker2.lat);
        expect(savedLine.marker2.lng).toBe(lineData.marker2.lng);
    });

    it('insert line successfully, but the field does not defined in schema should be undefined', async () => {
        const lineDataWithNotDefinedParam = {...lineData, lineLine: 4};
        const lineWithInvalidField = new LineModel(lineDataWithNotDefinedParam);
        const savedLineWithInvalidField = await lineWithInvalidField.save();
        expect(savedLineWithInvalidField._id).toBeDefined();
        expect(savedLineWithInvalidField.lineLine).toBeUndefined();
    });

    it('create line without required field should failed', async () => {
        const lineDataWithoutDefinedParam = {...lineData};
        delete lineDataWithoutDefinedParam.lineName;
        const lineWithoutRequiredField = new LineModel(lineDataWithoutDefinedParam);
        let err;
        try {
            const savedLineWithoutRequiredField = await lineWithoutRequiredField.save();
            error = savedLineWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.lineName).toBeDefined();
    });

    it('create line with same value in unique field should failed', async () => {
        const lineWithUniqueField = new LineModel(lineData);
        const lineWithUniqueFieldSecond = new LineModel(lineData);
        let err;
        try {
            const savedLineWithUniqueField = await lineWithUniqueField.save();
            const savedLineWithUniqueFieldSecond = await lineWithUniqueFieldSecond.save();
            error = savedLineWithUniqueFieldSecond;
        } catch (error) {
            err = error
        }

        expect(err.name).toBeDefined();
        expect(err.name).toBe("MongoError");
        expect(err.code).toBeDefined();
        expect(err.code).toBe(11000);
    });
});

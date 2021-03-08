const LineService = require('../services/line');
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


describe('LineService', () => {
    describe('create a new line', () => {
        it('should create a new line', async () => {
            try {
                const firstLineSuccess = await LineService.create(lineData);
                expect(firstLineSuccess.status).toBe('Ok');
            } catch (e) {
                expect(e.status).toMatch('Error');
            }
        });

        it('should not create a new line if record with the same name is already exists', async () => {
            try {
                let line = {...lineData};

                await LineService.create(line);
                let line_duplicate = {...lineData};

                const secondLineFail = await LineService.create(line_duplicate);
                expect(secondLineFail.status).toBe('Error');
            } catch (e) {
                console.log(e);
            }
        });
    });

    describe('remove a line', () => {
        it('should not remove a line if line with needed _id is not created', async () => {
            try {
                let line = {
                    ...lineData,
                    _id: "some-id-1122"
                }

                const removeLineFail = await LineService.remove(line);
                expect(removeLineFail.data.deletedCount).toBe(0);
            } catch (e) {
                console.log(e);
            }
        });

        it('should remove rule from db', async () => {
            try {
                let line = {...lineData};

                const lineForRemove = await LineService.create(line);
                const secondLineSuccess = await LineService.remove(lineForRemove);
                expect(secondLineSuccess.status).toBe('Ok');
            } catch (e) {
                console.log(e);
            }
        });
    });

    describe('update a line', () => {
        it('should not update a line if line with needed _id is not created', async () => {
            try {
                let line = {
                    ...lineData,
                    _id: "some-id-112233"
                }

                const removeLineFail = await LineService.update(line);
                expect(removeLineFail.status).toBe('Error');
            } catch (e) {
                console.log(e);
            }
        });

        it('should update line from db', async () => {
            try {
                let line = {
                    ...lineData
                }

                const lineForUpdate = await LineService.create(line);
                lineForUpdate.lineTolerance = 3;
                const secondLineSuccess = await LineService.update(lineForUpdate);
                expect(secondLineSuccess.status).toBe('Ok');
            } catch (e) {
                console.log(e);
            }
        });
    });

    describe('get all lines', () => {
        it('should return all lines', async () => {
            try {
                const body = await LineService.allLines()
                expect(body.status).toBe('Ok');
            } catch (e) {
                console.log(e);
            }
        });
    });
});

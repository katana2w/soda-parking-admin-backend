const {Schema, model} = require('mongoose');

const scannerSchema = new Schema({
    GpsCoordinates: {
        Latitude: {
            type: Number,
            required: true
        },
        Longitude: {
            type: Number,
            required: true
        }
    },
    ParkingPlaceId: {
        type: String,
        required: true,
        unique: true
    },
    State: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    IsElectricCharger: {
        type: Boolean,
        required: true
    },
    IsOnlyElectric: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = model('Scanner', scannerSchema);

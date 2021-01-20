/**
 * Models
 */
const {Client} = require("@googlemaps/google-maps-services-js");
const LineModel = require('../models/Line');

const getAllLinesLatLngFromDb = async (req, res) => {
    const { lat1, lng1, lat2, lng2 } = req.query;
    console.log('lat1', lat1);
    console.log('lng1', lng1);
    console.log('lat2', lat2);
    console.log('lng2', lng2);
    const client = new Client({});
    client.geocode({
            params: {
                locations: [{ lat: 45, lng: -110 }],
                key: 'API_KEY',
            },
            timeout: 1000, // milliseconds
        })
        .then((r) => {
            console.log(r.data.results[0].elevation);
        })
        .catch((e) => {
            console.log(e.response.data.error_message);
        })

    // return res.send({ message: 'Ok' });
};


module.exports = {
    getAllLinesLatLngFromDb,
}

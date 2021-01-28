const { getAllScanners } = require('../controllers/AllScanners');
const { getAllLinesFromDb } = require('../controllers/AllLines');
import {PolyUtil} from "node-geometry-library";

const checkScannersChanges = async () => {
    const allScannersArray = await getAllScanners();
    const allLinesArray = await getAllLinesFromDb();
    for (const scannerObject of allScannersArray) {

    }
    // for (const lineObject of allLinesArray) {
    //     const lineScannersArray = lineObject.lineScanners;
    //     lineScannersArray.forEach(scanner => {
    //
    //     });
    //     let response =  PolyUtil.isLocationOnEdge(
    //         {lat: 25.774, lng: -80.19}, // point object {lat, lng}
    //         [
    //             // poligon arrays of object {lat, lng}
    //             {lat: 25.774, lng: -80.19},
    //             {lat: 18.466, lng: -66.118},
    //             {lat: 32.321, lng: -64.757}
    //         ]
    //     );
    // }
};

module.exports = {
    checkScannersChanges,
}

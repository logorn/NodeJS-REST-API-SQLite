/**
 * Controllers Common functions
 */
class controllerCommon {

    findSuccess(result, res) {
        res.status(200); // Found
        res.json(result);
    }

    existsSuccess(result, res) {
        res.status(200); // Found
        res.json(result);
    }

    editSuccess(res) {
        res.status(201); // Created/Updated/Deleted
        res.json();
    }

    serverError(error, res) {
        res.status(500); // Not Created/Updated/Deleted
        res.json(error);
    }

    findError(error, res) {
        res.status(404); // Not found
        res.json(error);
    }
}

module.exports = controllerCommon;
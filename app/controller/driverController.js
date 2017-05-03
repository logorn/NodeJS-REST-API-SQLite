/* Load Driver Data Access Object */
const DriverDao = require('../dao/driverDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Driver entity */
const Driver = require('../model/driver');

/**
 * Driver Controller
 */
class DriverController {

    constructor() {
        this.driverDao = new DriverDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;
        let _self = this;

        this.driverDao.findById(id)
            .then(function (result) {
                _self.common.findSuccess(result, res);
            })
            .catch(function (error) {
                _self.common.findError(error, res);
            });
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        let _self = this;

        this.driverDao.findAll()
            .then(function (results) {
                _self.common.findSuccess(results, res);
            })
            .catch(function (error) {
                _self.common.findError(error, res);
            });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {
        let _self = this;

        this.driverDao.countAll()
            .then(function (result) {
                _self.common.findSuccess(result, res);
            })
            .catch(function (error) {
                _self.common.serverError(error, res);
            });
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let driver = new Driver(req.body.id, req.body.firstName, req.body.lastName, req.body.car);
        let _self = this;

        return this.driverDao.update(driver)
            .then(function () {
                _self.common.editSuccess(res);
            })
            .catch(function (error) {
                _self.common.serverError(error, res);
            });
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let driver = new Driver(0, req.body.firstName, req.body.lastName, req.body.car);
        let _self = this;

        return this.driverDao.create(driver)
            .then(function () {
                _self.common.editSuccess(res);
            })
            .catch(function (error) {
                _self.common.serverError(error, res);
            });
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;
        let _self = this;

        this.driverDao.deleteById(id)
            .then(function () {
                _self.common.editSuccess(res);
            })
            .catch(function (error) {
                _self.common.serverError(error, res);
            });
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;
        let _self = this;

        this.driverDao.exists(id)
            .then(function () {
                _self.common.existsSuccess(res);
            })
            .catch(function (error) {
                _self.common.findError(error, res);
            });
    };
}

module.exports = DriverController;
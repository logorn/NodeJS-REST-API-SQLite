/* Load Car Data Access Object */
const CarDao = require('../dao/carDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Car = require('../model/car');

/**
 * Car Controller
 */
class CarController {

    constructor() {
        this.carDao = new CarDao();
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

        this.carDao.findById(id)
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

        this.carDao.findAll()
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

        this.carDao.countAll()
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
        let _self = this;
        let car = new Car(req.body.id, req.body.maker, req.body.model, req.body.year, req.body.driver);

        return this.carDao.update(car)
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
        let _self = this;
        let car = new Car(0, req.body.maker, req.body.model, req.body.year, req.body.driver);

        return this.carDao.create(car)
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
        let _self = this;
        let id = req.params.id;

        this.carDao.deleteById(id)
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
        let _self = this;
        let id = req.params.id;

        this.carDao.exists(id)
            .then(function () {
                _self.common.existsSuccess(res);
            })
            .catch(function (error) {
                _self.common.findError(error, res);
            });
    };
}

module.exports = CarController;